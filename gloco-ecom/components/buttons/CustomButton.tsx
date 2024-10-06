import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { cn } from "@/lib/utils";

type CustomButtonProps = ComponentProps<"button"> & {
  isLoading?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
};

function CustomButton({
  children,
  isLoading = false,
  variant= 'default',
  size='default',
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button className={cn('rounded-full px-10', className)} {...props} variant={variant} size={size}>
      {isLoading && <Spinner className="mr-2" />}
      <span>{children}{isLoading && '...'}</span>
    </Button>
  );
}

export default CustomButton;
