interface SplitOptions {
  type: "chars" | "words" | "lines";
  className?: string;
}

export function splitText(element: HTMLElement, options: SplitOptions): HTMLSpanElement[] {
  const { type, className = "" } = options;
  const text = element.textContent || "";
  element.innerHTML = "";

  const spans: HTMLSpanElement[] = [];

  if (type === "chars") {
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      if (className) span.className = className;
      span.dataset.char = char;
      span.textContent = char === " " ? "\u00A0" : char;
      if (char === " ") span.style.whiteSpace = "pre";
      element.appendChild(span);
      spans.push(span);
    });
  } else if (type === "words") {
    text.split(" ").forEach((word, i, arr) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      if (className) span.className = className;
      span.dataset.word = word;
      span.textContent = word + (i < arr.length - 1 ? "\u00A0" : "");
      element.appendChild(span);
      spans.push(span);
    });
  } else {
    // lines
    text.split("\n").forEach((line) => {
      const span = document.createElement("span");
      span.style.display = "block";
      span.style.overflow = "hidden";
      if (className) span.className = className;
      span.dataset.line = line;
      span.textContent = line;
      element.appendChild(span);
      spans.push(span);
    });
  }

  return spans;
}
