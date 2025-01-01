"use client";
import { useState } from "react";
import { authClient } from "../../../../utils/auth-client";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          console.log(ctx);
        },
        onSuccess: (ctx) => {
          console.log("Success!" + ctx.data);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
    console.log(data, error);
  };

  return (
    <div className="flex h-screen justify-center">
      <div className="mx-4 my-auto flex w-full max-w-md flex-col justify-center gap-4 rounded-xl border-2 border-slate-900 bg-violet-400 p-8 shadow-md [box-shadow:4px_4px_0_0_#0f172a] md:w-1/2 md:max-w-lg">
        {/* <h1 className="mb-2 bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-center text-4xl font-bold text-violet-600 text-transparent">
          Create Account
        </h1> */}
        <h1 className="text-xl font-semibold">Create Account</h1>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="rounded border-2 border-slate-900 px-2 py-1 outline outline-1 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:scale-105"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="rounded border-2 border-slate-900 px-2 py-1 outline outline-1 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:scale-105"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>

          <input
            className="rounded border-2 border-slate-900 px-2 py-1 outline outline-1 transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:scale-105"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="mt-2 rounded border-2 border-slate-900 bg-violet-400 px-4 py-1 font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]"
          onClick={signUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
