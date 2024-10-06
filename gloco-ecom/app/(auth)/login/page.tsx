import LoginBg from "@/components/assets/login/LoginBg";
import LoginSection from "@/components/login/LoginSection";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Glocom',
}

function LoginPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 min-h-screen justify-center items-center">
      {/* left */}
      <div className="justify-self-center hidden sm:block">
        <LoginBg />
      </div>

      {/* right */}
      <div className="bg-muted/40 h-full place-content-center">
        <LoginSection />
      </div>
    </main>
  );
}

export default LoginPage;
