import { memo, useEffect, useRef, useState } from "react";
import axiosClient from "../lib/axiosClient";
import useMousePoint from "../hooks/useMousePoint";
import React from "react";

function MouseTextInput() {
  const { x, y } = useMousePoint();
  const [inputOpen, setInputOpen] = useState(false);
  const [inputLeght, setInputLength] = useState(0);
  const [message, setMessage] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const messageTimeoutId = useRef<NodeJS.Timeout>();

  const handleKeydown = (e: KeyboardEvent) => {
    setInputOpen(true);
    inputRef.current?.focus();
    switch (e.key) {
      case "Escape":
        setInputOpen(false);
        inputRef.current?.blur();
        break;
      case "Enter":
        setInputOpen(false);
        inputRef.current?.blur();
        submitRef.current?.click();
        break;
    }
  };
  const handleInputLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(e.target.value.length);
  };
  const keydownEffect = () => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    clearTimeout(messageTimeoutId.current);
    e.preventDefault();
    if (
      !inputRef.current ||
      inputRef.current.value.length == 0 ||
      !inputRef.current.value
    )
      return;

    const message = inputRef.current.value;

    axiosClient
      .post("/message", {
        cookieId: localStorage.getItem("cookieId") || "uknown",
        message,
        createdAt: Date(),
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data.payload.message);
          setMessage(res.data.payload.message);
          messageTimeoutId.current = setTimeout(() => {
            setMessage(undefined);
          }, 5000);
        }
      });
    inputRef.current.value = "";
    setInputLength(0);
  };
  const handleMouseOut = () => {
    if (!setInputOpen || !inputRef.current) return;

    inputRef.current.value = "";
    setInputOpen(false);
  };
  const mouseEffect = () => {
    document
      .getElementById("root")!
      .addEventListener("mouseleave", handleMouseOut);
    return () => {
      document
        .getElementById("root")!
        .removeEventListener("mouseleave", handleMouseOut);
    };
  };

  useEffect(keydownEffect, []);
  useEffect(mouseEffect, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="fixed z-50"
        style={{
          left: x + 15,
          top: y + 15,
          display: inputOpen ? "block" : "none",
        }}
      >
        <input
          className="border-red appearance-none rounded-md border-2 border-solid p-1.5 pr-12 font-mono text-sm text-dark-950 outline-none"
          type="text"
          style={{
            borderColor: inputLeght < 60 ? "#1115d5" : "#f87171",
          }}
          onChange={handleInputLength}
          ref={inputRef}
          maxLength={60}
        />
        <span className="absolute right-3 top-2.5 font-mono text-xs text-dark-700">
          {inputLeght}/60
        </span>
        <button ref={submitRef} type="submit"></button>
      </form>
      {message && (
        <p
          style={{
            position: "fixed",
            top: y + 15,
            left: x + 15,
          }}
          className="self-end rounded-md bg-dark-700 px-2 py-1 font-mono text-base font-light"
        >
          {message}
        </p>
      )}
    </>
  );
}

export default memo(MouseTextInput);
