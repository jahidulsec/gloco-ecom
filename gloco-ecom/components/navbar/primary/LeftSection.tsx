"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { AlignLeft, MapPinHouse, MonitorSmartphone, Store } from "lucide-react";
import Logo from "../../assets/logo/Logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../ui/sheet";
import { ScrollArea } from "../../ui/scroll-area";

function LeftSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="left flex items-center gap-3">
        {/* burgur icon */}
        <Button
          variant={"text"}
          size={"icon"}
          className="icon md:hidden"
          onClick={() => {
            setOpen(true);
          }}
        >
          <AlignLeft />
        </Button>

        {/* logo */}
        <Logo />

        {/* large screen menu */}
        <div className="md:flex items-center gap-3 hidden ">
          <Button variant={"text"} className="font-regular">
            <MonitorSmartphone className="mr-2 size-4" /> Product
          </Button>
          <Button variant={"text"} className="font-regular">
            <Store className="mr-2 size-4" /> About
          </Button>
          <Button variant={"text"} className="font-regular">
            <MapPinHouse className="mr-2 size-4" /> Contact
          </Button>
        </div>
      </section>

      {/* sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={"left"}
          className="p-0"
          closeButtonClassName="text-white top-7 right-7"
        >
          <SheetHeader className="bg-foreground text-background px-6 py-6 rounded-br-[160px_25px]">
            <SheetTitle>
              <Logo className="text-background" />
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="p-6 min-h-[70vh]">
            <h2 className="p-3 text-sm text-center bg-muted/50">
              All departments
            </h2>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default LeftSection;
