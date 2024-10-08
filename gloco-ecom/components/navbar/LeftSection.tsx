'use client'

import React from "react";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import Logo from "../assets/logo/Logo";

function LeftSection() {
  return (
    <>
      <section className="left flex items-center gap-1">
        {/* burgur icon */}
        <Button variant={"text"} size={"icon"} className="icon">
          <AlignLeft />
        </Button>

        {/* logo */}
        <Logo />
      </section>
    </>
  );
}

export default LeftSection;
