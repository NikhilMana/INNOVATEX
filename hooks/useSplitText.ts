"use client";

import { useLayoutEffect, type RefObject } from "react";

interface Options {
  type?: "words" | "chars";
  wrapperClassName?: string;
}

export function useSplitText(
  ref: RefObject<HTMLElement | null>,
  { type = "words", wrapperClassName = "inline-block" }: Options = {}
) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const text = el.textContent ?? "";
    if (!text) return;

    el.innerHTML = "";

    const parts = type === "words" ? text.split(/(\s+)/) : Array.from(text);

    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        el.appendChild(document.createTextNode(part));
        return;
      }
      const span = document.createElement("span");
      span.className = wrapperClassName;
      span.dataset.splitChild = "true";
      span.textContent = part;
      el.appendChild(span);
    });

    return () => {
      el.textContent = text;
    };
  }, [ref, type, wrapperClassName]);
}
