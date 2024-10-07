import React from "react";
import Logo from "../assets/logo/Logo";
import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginSection() {
  return (
    <section className="flex flex-col gap-10 px-6 md:px-20">
      {/* logo */}
      <Logo />

      <section>
        <h2 className="text-xl font-semibold">Sign in to your account</h2>
        <p className="text-sm">
          Not a member? <Link href={"/sign-up"} className="text-primary">Sign up now</Link>
        </p>
      </section>

      <LoginForm />
    </section>
  );
}

export default LoginSection;
