import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

function SectionHeading({ className, title, ...props }: ComponentProps<"h2">) {
  return (
    <h2 className={cn("relative flex items-center gap-2 font-semibold text-xl", className)} {...props}>
      <span className="circle section"></span>
      <span>{title}</span>
    </h2>
  );
}

export default SectionHeading;
