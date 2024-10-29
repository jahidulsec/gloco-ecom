"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function Search({ placeholder = "Search...", type='search', className }: { placeholder?: string, type?: string, className?:string }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (search) {
      params.set("q", search);
      params.delete("p");
    } else {
      params.delete("q");
      params.delete("p");
    }
    router.push(pathname + "?" + params.toString());
  }

  return (
    <form onSubmit={handleSubmit} className="relative min-w-[5rem]">
      <Input
        type={type}
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={cn("pl-8 pr-12 w-full", className)}
        placeholder={placeholder}
      />
      <Label
        htmlFor="search"
        className="absolute top-[50%] -translate-y-[50%] left-3 text-gray-400"
      >
        <SearchIcon className="size-4" />
      </Label>
      <Button
      type="submit"
        className="absolute right-0 top-0 rounded-l-none"
      >
        Search
      </Button>
    </form>
  );
}

export default Search;