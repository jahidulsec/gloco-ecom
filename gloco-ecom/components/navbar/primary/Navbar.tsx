import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Navbar() {
  return (
    <div className="border-b sticky md:relative top-0 bg-background">
      <nav className="px-4 flex mx-auto justify-between items-center gap-5 py-2 2xl:container">
        {/* left */}
        <LeftSection />

        {/* right */}
        <RightSection />
      </nav>
    </div>
  );
}
