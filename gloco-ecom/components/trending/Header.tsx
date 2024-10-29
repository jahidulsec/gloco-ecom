import React from "react";
import SectionHeading from "../heading/SectionHeading";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

function Header() {
  return (
    <section className="flex justify-between items-center gap-5 border-b pb-2">
      <SectionHeading title="Trending Products" />
      <Button variant={'text'} size={'sm'} className="text-xs">View all <ArrowRight className="size-3 ml-2" /></Button>
    </section>
  );
}

export default Header;
