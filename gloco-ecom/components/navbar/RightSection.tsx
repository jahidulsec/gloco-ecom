'use client'

import React from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag } from "lucide-react";

function RightSection() {
  return (
    <>
      <section className="right">
        {/* search button */}
        <Button variant={"text"} size={"icon"}>
          <Search />
        </Button>

        <Button variant={"text"} size={"icon"}>
          <ShoppingBag />
        </Button>
      </section>
    </>
  );
}

export default RightSection;
