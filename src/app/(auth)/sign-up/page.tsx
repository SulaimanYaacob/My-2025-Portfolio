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
          console.log(ctx);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
    console.log(data, error);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col">
        <label className="font-semibold">Name</label>
        <input
          className="px-2 py-1 outline outline-1"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Password</label>
        <input
          className="px-2 py-1 outline outline-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Email</label>

        <input
          className="px-2 py-1 outline outline-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
