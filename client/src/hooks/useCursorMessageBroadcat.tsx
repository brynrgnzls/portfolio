import { useEffect, useRef, useState } from "react";
import pusher from "../lib/pusher";

export default function useCursorMessageBroadcast() {
  const [userCoordMessage, setUserCoordMessage] = useState<
    Map<string, IUserCoordMessage>
  >(new Map());
  const privateChannelRef = useRef(pusher.subscribe("private-common"));

  const handleMouseMove = (e: MouseEvent) => {
    userCoordMessage.set(localStorage.getItem("cookieId")!, {
      x: e.pageX,
      y: e.pageY,
    }),
      privateChannelRef.current.trigger(
        "client-coord_message",
        Object.fromEntries(userCoordMessage.entries()),
      );
  };
  const handleCoordBroadcast = (data: Record<string, IUserCoordMessage>) => {
    setUserCoordMessage(new Map(Object.entries(data)));
  };
  const handleMessageBroadcast = (data: {
    message: string;
    sender: string;
  }) => {
    if (userCoordMessage == undefined) return;
    setUserCoordMessage((prev) => {
      if (prev == undefined) return prev;
      prev.set(data.sender, {
        ...prev.get(data.sender)!,
        message: data.message,
      });
      return new Map(prev);
    });
  };
  const mouseMovementEffect = () => {
    const throttle = (fcn: Function, duration: number) => {
      let timeout = false;

      return (e: MouseEvent) => {
        if (!timeout) {
          fcn(e);
          timeout = true;
          setTimeout(() => (timeout = false), duration);
        }
      };
    };
    window.addEventListener("mousemove", throttle(handleMouseMove, 90));
    privateChannelRef.current.bind(
      "client-coord_message",
      handleCoordBroadcast,
    );
    privateChannelRef.current.bind("client-message", handleMessageBroadcast);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      privateChannelRef.current.unbind_all();
      privateChannelRef.current.unsubscribe();
    };
  };

  useEffect(mouseMovementEffect, []);

  return userCoordMessage;
}

interface IUserCoordMessage {
  x: number;
  y: number;
  message?: string;
}
