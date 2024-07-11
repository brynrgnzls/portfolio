import { useEffect, useState } from "react";

export default function useText() {
  const [text, setText] = useState("");
  const [inputOpen, setInputOpen] = useState(false);

  const listenType = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setInputOpen(false);
      setText("");
      return;
    }
    if (e.key === "Backspace") {
      setText((prev) => prev.slice(0, prev.length - 1));
      return;
    }

    if (e.key.match(/^[a-zA-Z0-9]$/)) {
      setText((prev) => prev + e.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", listenType);
    return () => {
      window.removeEventListener("keydown", listenType);
    };
  }, []);

  return { text, inputOpen };
}
