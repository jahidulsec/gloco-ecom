"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag } from "lucide-react";
import ButtonBadge from "../buttons/ButtonBadge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import SideShoppingBag from "../shopping-bag/SideShoppingBag";

function RightSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="right">
        {/* search button */}
        <Button variant={"text"} size={"icon"}>
          <Search />
        </Button>

        <ButtonBadge
          count={2}
          onClick={() => {
            setOpen(true);
          }}
        >
          <ShoppingBag />
        </ButtonBadge>
      </section>

      {/* sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-0" closeButtonClassName="top-7 right-7">
          <SheetHeader className="mx-6 py-6 border-b">
            <SheetTitle>
              <h3>Shopping Bag</h3>
            </SheetTitle>
          </SheetHeader>
          <SideShoppingBag />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default RightSection;
