
"use client";

import MessageInput from "./components/MessageInput";
import ResultCard from "./components/ResultCard";
import { useMessage } from "./context/MessageContext";

export default function Home() {
  const {
    message,
    setMessage,
    result,
    warnings,
    checkMessage,
    clearMessage,
  } = useMessage();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          CyberNova
        </h1>

        <p className="mt-3 text-center text-slate-300">
          Your protection against online scams
        </p>

        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl">

          <h2 className="text-2xl font-semibold">
            Message Checker
          </h2>

          <p className="mt-2 text-slate-400">
            Paste an SMS, WhatsApp message or email to check for suspicious signs.
          </p>

          <MessageInput
            message={message}
            onMessageChange={setMessage}
          />

          <div className="mt-5 flex gap-4">

            <button
              onClick={checkMessage}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Check Message
            </button>

            <button
              onClick={clearMessage}
              className="rounded-lg border border-slate-600 px-6 py-3 hover:bg-slate-800"
            >
              Clear
            </button>

          </div>

          {result && (
            <ResultCard
              result={result}
              warnings={warnings}
            />
          )}

        </div>
      </div>
    </main>
  );
}
