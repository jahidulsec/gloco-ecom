import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ButtonBadgeProps = ComponentProps<"button"> & {
  count?: number;
};

function ButtonBadge({
  className,
  children,
  count = 0,
  ...props
}: ButtonBadgeProps) {
  return (
    <Button
      variant={"text"}
      size={"icon"}
      className={cn("relative", className)}
      {...props}
    >
      {children}
      {count !== 0 && (
        <span className="badge absolute top-0 right-0 size-[1.125rem] p-0.5 text-[10px] text-background flex justify-center items-center bg-secondary rounded-full">
          {count}
        </span>
      )}
    </Button>
  );
}

export default ButtonBadge;
