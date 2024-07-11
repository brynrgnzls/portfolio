import { useEffect, useRef, useState } from "react";
import useMousePoint from "../hooks/useMousePoint";

export default function MouseTexttInput() {
  const { x, y } = useMousePoint();
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const listenType = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        setInputOpen(false);
        break;
      case "Enter":
        broadcastText();
        setInputOpen(false);
        setInputValue("");
        break;
      case "Backspace":
        setInputValue((prev) => prev.slice(0, prev.length - 1));
        break;
      case " ": 
        e.preventDefault();
        if (inputValue.length >= 60) return;
        setInputValue((prev) => prev + " ");
        break;
      default:
        if (inputValue.length >= 60) return;
        if (e.key.match(/^[a-zA-Z0-9]$/)) {
          setInputOpen(true);
          setInputValue((prev) => prev + e.key);
        }
        break;
    }
  };

  const broadcastText = () => {};
  console.log(inputValue);

  useEffect(() => {
    window.addEventListener("keydown", listenType);
    return () => {
      window.removeEventListener("keydown", listenType);
    };
  }, [inputValue]);

  return (
    <div
      className="absolute z-50"
      style={{
        left: x + 15,
        top: y + 15,
        display: "block",
        visibility: inputOpen ? "visible" : "hidden",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        style={{ borderColor: inputValue.length < 60 ? "#1115d5" : "#f87171" }}
        className="border-red appearance-none rounded-md border-2 border-solid p-1.5 pr-12 text-sm text-dark-950 outline-none"
      />
      <span className="relative right-10 text-xs text-dark-700">
        {inputValue.length}/60
      </span>
    </div>
  );
}
