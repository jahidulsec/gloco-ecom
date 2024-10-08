"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import Logo from "../assets/logo/Logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

function LeftSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="left flex items-center gap-1">
        {/* burgur icon */}
        <Button
          variant={"text"}
          size={"icon"}
          className="icon"
          onClick={() => {
            setOpen(true);
          }}
        >
          <AlignLeft />
        </Button>

        {/* logo */}
        <Logo />
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
            <h2 className="p-3 text-sm text-center bg-muted/50">All departments</h2>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default LeftSection;
