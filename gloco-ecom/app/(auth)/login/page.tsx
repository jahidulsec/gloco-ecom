import LoginBg from "@/components/assets/login/LoginBg";
import LoginSection from "@/components/login/LoginSection";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Waveform',
}

function LoginPage() {
  return (
    <>
      {/* left */}
      <div className="justify-self-center hidden md:block">
        <LoginBg />
      </div>

      {/* right */}
      <div className="bg-muted/40 h-full place-content-center">
        <LoginSection />
      </div>
    </>
  );
}

export default LoginPage;
