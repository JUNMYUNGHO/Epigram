"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">
        로그아웃
      </button>
    );
  }

  return (
    <div className="flex gap-4">
      <button onClick={() => signIn("google")} className="p-2 bg-blue-500 text-white rounded">
        Google 로그인
      </button>
      <button onClick={() => signIn("github")} className="p-2 bg-gray-800 text-white rounded">
        GitHub 로그인
      </button>
    </div>
  );
}
