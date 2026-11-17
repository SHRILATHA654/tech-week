
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface MessageContextType {
  message: string;
  setMessage: (value: string) => void;
  result: string;
  warnings: string[];
  checkMessage: () => void;
  clearMessage: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(
  undefined
);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);

  function checkMessage() {
    if (!message.trim()) {
      setResult("Please enter a message first.");
      setWarnings([]);
      return;
    }

    const text = message.toLowerCase();
    const detected: string[] = [];

    const suspiciousWords = [
      "urgent",
      "immediately",
      "account blocked",
      "verify your account",
      "claim your prize",
      "lottery",
      "free gift",
      "click here",
      "limited time",
      "congratulations",
    ];

    const sensitiveWords = [
      "otp",
      "password",
      "pin",
      "cvv",
      "bank details",
      "credit card",
    ];

    if (suspiciousWords.some((word) => text.includes(word))) {
      detected.push("Suspicious or urgent language detected");
    }

    if (sensitiveWords.some((word) => text.includes(word))) {
      detected.push("Request for sensitive information detected");
    }

    if (/https?:\/\/|www\./i.test(message)) {
      detected.push("Message contains a web link");
    }

    if (/\b(bit\.ly|tinyurl\.com|cutt\.ly)\b/i.test(message)) {
      detected.push("Shortened link detected");
    }

    if (detected.length >= 3) {
      setResult("Potentially Fraudulent");
    } else if (detected.length > 0) {
      setResult("Suspicious");
    } else {
      setResult("No obvious warning signs found");
    }

    setWarnings(detected);
  }

  function clearMessage() {
    setMessage("");
    setResult("");
    setWarnings([]);
  }

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        result,
        warnings,
        checkMessage,
        clearMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useMessage must be used inside MessageProvider");
  }

  return context;
}
