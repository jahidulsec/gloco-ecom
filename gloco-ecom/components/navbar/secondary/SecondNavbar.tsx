import React from "react";
import CategoryCard from "./CategoryCard";
import Search from "@/components/search/Search";

function SecondNavbar() {
  return (
    <div className="hidden md:block md:sticky top-0  bg-foreground text-background z-10">
      <div className="px-4 py-2 border-b-2 border-primary 2xl:container mx-auto flex justify-between items-center">
        {/* left */}
        <div className="left relative h-8">
          <CategoryCard />
        </div>

        {/* right */}
        <div className="">
          <Search className="bg-background border-primary text-foreground w-[400px]" placeholder="Search products..." />
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
