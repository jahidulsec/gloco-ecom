import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Navbar() {
  return (
    <div className="border-b sticky top-0 ">
      <nav className=" flex mx-auto justify-between items-center gap-5 py-2 container">
        {/* left */}
        <LeftSection />

        {/* right */}
        <RightSection />
      </nav>
    </div>
  );
}
