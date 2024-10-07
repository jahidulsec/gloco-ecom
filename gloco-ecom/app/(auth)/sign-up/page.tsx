import SignUpBg from "@/components/assets/sign-up/SignUpBg";
import SignUpSection from "@/components/sign-up/SignUpSection";
import React from "react";

function SignUpPage() {
  return (
    <>
      {/* left */}

      <div className="bg-muted/40 h-full place-content-center">
        <SignUpSection />
      </div>

      {/* right */}
      <div className="justify-self-center hidden md:block">
        <SignUpBg />
      </div>
    </>
  );
}

export default SignUpPage;