
"use client";

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
}

export default function MessageInput({
  message,
  onMessageChange,
}: MessageInputProps) {
  return (
    <textarea
      value={message}
      onChange={(e) => onMessageChange(e.target.value)}
      placeholder="Paste your message here..."
      className="mt-6 h-40 w-full resize-none rounded-xl border border-slate-600 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
    />
  );
}
