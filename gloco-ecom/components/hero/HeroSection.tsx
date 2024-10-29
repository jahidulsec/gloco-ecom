import React from "react";
import HeroCarousel from "./HeroCarousel";
import CategoryMenu from "./category-menu/CategoryMenu";

function HeroSection() {
  return (
    <section className="flex gap-6">
      {/* left */}
      <div className="-mt-6 lg:block hidden">
        <CategoryMenu />
      </div>

      {/* right */}
      <HeroCarousel />
    </section>
  );
}

export default HeroSection;
