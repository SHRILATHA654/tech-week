
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Login UI is working! Authentication is not connected yet.");
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            CyberNova
          </h1>

          <p className="mt-3 text-slate-400">
            Your protection against online scams
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl">

          <h2 className="text-2xl font-bold text-center">
            Welcome Back!
          </h2>

          <p className="text-center text-slate-400 mt-2 mb-8">
            Login to your CyberNova account
          </p>

          <form onSubmit={handleLogin}>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-500 py-3 font-bold text-slate-950 hover:bg-cyan-400 transition"
            >
              Login
            </button>

            {message && (
              <p className="mt-4 text-center text-sm text-cyan-400">
                {message}
              </p>
            )}

          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-cyan-400 hover:underline"
            >
              Back to Home
            </Link>
          </div>

        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          © 2026 CyberNova. Stay Safe Online.
        </p>

      </div>
    </main>
  );
}
