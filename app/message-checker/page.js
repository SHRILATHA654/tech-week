
"use client";

import { useState } from "react";

export default function MessageChecker() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const scamWords = [
    "urgent",
    "click here",
    "verify your account",
    "password",
    "otp",
    "prize",
    "winner",
    "bank details",
    "claim now",
    "free money",
    "account blocked",
    "send money",
    "limited time",
    "login now"
  ];

  function checkMessage() {
    if (!message.trim()) {
      setResult({
        type: "empty",
        title: "Message Required",
        description: "Please enter a message before checking."
      });
      return;
    }

    const lowerMessage = message.toLowerCase();
    const found = scamWords.filter(word =>
      lowerMessage.includes(word)
    );

    if (found.length >= 3) {
      setResult({
        type: "danger",
        title: "High Risk Message",
        description: "Multiple scam indicators were detected.",
        words: found
      });
    } else if (found.length > 0) {
      setResult({
        type: "warning",
        title: "Suspicious Message",
        description: "Some possible scam indicators were detected.",
        words: found
      });
    } else {
      setResult({
        type: "safe",
        title: "No Obvious Warning Signs",
        description: "No matching scam keywords were found.",
        words: []
      });
    }
  }

  function clearMessage() {
    setMessage("");
    setResult(null);
  }

  function useSample(sample) {
    setMessage(sample);
    setResult(null);
  }

  return (
    <main className="message-page">

      <nav className="message-nav">
        <div className="brand">
          <span className="brand-icon">🛡️</span>
          <span>ScamShield</span>
        </div>
        <span className="nav-label">MESSAGE PROTECTION</span>
      </nav>

      <section className="message-hero">
        <span className="top-label">SMART MESSAGE ANALYSIS</span>

        <h1>
          Think Before You <span>Click.</span>
        </h1>

        <p>
          Check suspicious messages and identify possible
          scam indicators before you respond.
        </p>
      </section>

      <section className="message-card">

        <div className="card-heading">
          <div>
            <h2>Message Checker</h2>
            <p>Paste your suspicious SMS, email or WhatsApp message.</p>
          </div>
          <span className="lock-icon">🔒</span>
        </div>

        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setResult(null);
          }}
          placeholder="Paste your message here..."
        />

        <div className="character-count">
          {message.length} characters
        </div>

        <div className="sample-area">
          <span>TRY SAMPLE:</span>
          <button
            className="sample-button"
            onClick={() =>
              useSample("Congratulations! You are a winner. Click here to claim your free money. Verify your account now.")
            }
          >
            Scam Message
          </button>

          <button
            className="sample-button"
            onClick={() =>
              useSample("Hello! Your appointment is confirmed for tomorrow at 10 AM. Thank you.")
            }
          >
            Normal Message
          </button>
        </div>

        <div className="action-buttons">
          <button className="check-button" onClick={checkMessage}>
            🛡️ Check Message
          </button>

          <button className="clear-button" onClick={clearMessage}>
            Clear
          </button>
        </div>

        {result && (
          <div className={`analysis-result ${result.type}`}>
            <div className="result-heading">
              <span>
                {result.type === "danger" ? "🚨" :
                 result.type === "warning" ? "⚠️" :
                 result.type === "safe" ? "✅" : "ℹ️"}
              </span>

              <h3>{result.title}</h3>
            </div>

            <p>{result.description}</p>

            {result.words && result.words.length > 0 && (
              <div className="warning-list">
                <strong>Warning signs found:</strong>
                <div className="word-tags">
                  {result.words.map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="privacy-note">
          <span>🔐</span>
          Your message is checked using basic keyword matching.
          It is not sent to a server.
        </div>

      </section>

      <footer className="message-footer">
        <p>Stay Alert. Stay Protected.</p>
        <span>ScamShield © 2026</span>
      </footer>

    </main>
  );
}
