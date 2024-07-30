import cursor from "../assets/cursor_20.svg";
import useCursorMessageBroadcast from "../hooks/useCursorMessageBroadcat";

export default function BroadcastCursors() {
  const userCoordMessage = useCursorMessageBroadcast();

  return (
    <>
      {Array.from(userCoordMessage.entries()).map((key) => {
        if (localStorage.getItem("cookieId") === key[0]) return;
        return <MousePointer key={key[0]} data={key[1]} />;
      })}
    </>
  );
}

function MousePointer({ data }: IMousePointerProp) {
  return (
    <div
      className="absolute z-50 flex items-center gap-2.5"
      style={{ top: data.y, left: data.x }}
    >
      <img src={cursor} alt="other user's cursor" />
      {data.message && (
        <p className="self-end rounded-md bg-dark-700 px-2 py-1 font-mono text-base font-light">
          {data.message}
        </p>
      )}
    </div>
  );
}

interface IMousePointerProp {
  data: {
    x: number;
    y: number;
    message?: string;
  };
}
