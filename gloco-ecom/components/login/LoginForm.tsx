import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PasswordInput from "../inputs/PasswordInput";
import CustomButton from "../buttons/CustomButton";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

function LoginForm() {
  return (
    <>
      <form action="" className="flex flex-col gap-3">
        <p>
          <Label htmlFor="email">Email address</Label>
          <Input className="mt-3" type="email" id="email" />
        </p>

        <PasswordInput />

        <div className="flex justify-between items-center gap-5 my-3">
          <p className="flex items-center gap-2">
            <Checkbox id="remember" className="rounded" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </p>

          <Link className="text-sm text-primary" href={''}>Forget password?</Link>
        </div>

        <CustomButton variant={'secondary'} className="self-start">Login</CustomButton>
      </form>
    </>
  );
}

export default LoginForm;
