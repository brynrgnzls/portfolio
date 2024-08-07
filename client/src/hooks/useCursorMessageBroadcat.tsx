import { useEffect, useRef, useState } from "react";
import pusher from "../lib/pusher";

export default function useCursorMessageBroadcast() {
  const [userCoordMessage, setUserCoordMessage] = useState<
    Map<string, IUserCoordMessage>
  >(new Map());
  const privateChannelRef = useRef(pusher.subscribe("private-common"));
  const messageRemoveTimeoutId = useRef<NodeJS.Timeout>();
  const messageRef = useRef<string>();

  const handleMouseMove = (e: MouseEvent) => {
    userCoordMessage.set(localStorage.getItem("cookieId")!, {
      x: e.clientX,
      y: e.clientY,
      message: messageRef.current,
    });
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
    senderId: string;
  }) => {
    if (localStorage.getItem("cookieId") === data.senderId)
      messageRef.current = data.message;
    if (messageRemoveTimeoutId.current)
      clearTimeout(messageRemoveTimeoutId.current);

    // remove message after 5s
    messageRemoveTimeoutId.current = setTimeout(() => {
      setUserCoordMessage((prev) => {
        prev.set(data.senderId, {
          ...prev.get(data.senderId)!,
          message: undefined,
        });
        return new Map(prev);
      });
      messageRef.current = undefined;
    }, 5000);

    setUserCoordMessage((prev) => {
      prev.set(data.senderId, {
        ...prev.get(data.senderId)!,
        message: data.message,
      });

      return new Map(prev);
    });
  };
  const handleMouseOut = () => {
    privateChannelRef.current.trigger("client-coord_message_out", {
      cookieId: localStorage.getItem("cookieId"),
    });
    setUserCoordMessage((prev) => {
      prev.delete(localStorage.getItem("cookieId") || "");
      return new Map(prev);
    });
  };
  const handleMouseOutBroadcast = (data: { cookieId: string }) => {
    setUserCoordMessage((prev) => {
      prev.delete(data.cookieId);
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
    const handleInnerMouseMove = throttle(handleMouseMove, 95);

    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousemove", handleInnerMouseMove);
    privateChannelRef.current.bind(
      "client-coord_message",
      handleCoordBroadcast,
    );
    privateChannelRef.current.bind(
      "client-coord_message_out",
      handleMouseOutBroadcast,
    );
    privateChannelRef.current.bind("message", handleMessageBroadcast);

    return () => {
      window.removeEventListener("mousemove", handleInnerMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
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
