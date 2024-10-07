"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PasswordInput from "../inputs/PasswordInput";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import CustomButton from "../buttons/CustomButton";

export default function SignUpForm() {
  return (
    <>
      <form action="" className="flex flex-col gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <p>
            <Label htmlFor="email">First name</Label>
            <Input className="mt-3" type="email" id="email" />
          </p>
          <p>
            <Label htmlFor="email">Last name</Label>
            <Input className="mt-3" type="email" id="email" />
          </p>
          <p className="lg:col-span-2">
            <Label htmlFor="email">Email address</Label>
            <Input className="mt-3" type="email" id="email" />
          </p>

          <PasswordInput className="lg:col-span-2" />

          <p className="flex items-center gap-2 lg:col-span-2">
            <Checkbox id="remember" className="rounded" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link href={""} className="underline text-primary">
                Terms & Conditions
              </Link>
            </label>
          </p>
        </div>

        <CustomButton variant={'default'} className="self-start my-5">
          Create account
        </CustomButton>
      </form>
    </>
  );
}
