"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Heart, Search, ShoppingBag } from "lucide-react";
import ButtonBadge from "../../buttons/ButtonBadge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../ui/sheet";
import SideShoppingBag from "../../shopping-bag/SideShoppingBag";
import CustomButton from "../../buttons/CustomButton";

function RightSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="right flex items-center gap-3">
        <CustomButton
          size={"sm"}
          className="lg:block hidden text-xs px-5 bg-transparent border border-primary text-primary hover:text-background"
        >
          Build your PC
        </CustomButton>

        {/* search button */}
        <Button variant={"text"} size={"icon"} className="lg:hidden">
          <Search />
        </Button>

        <ButtonBadge
          count={2}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Heart />
        </ButtonBadge>

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
