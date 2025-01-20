import React from "react";
import TimerSection from "../offers/TimerSection";
import Image from "next/image";
import ReviewSection from "./ReviewSection";
import PriceSection from "./PriceSection";
import { trendingProducts } from "@/lib/data";

export default function HighlightProductCard({name, prevPrice, price, imagePath }: typeof trendingProducts[0]) {
  return (
    <article className="border border-foreground rounded-lg min-h-[10rem] p-6 h-full group cursor-pointer">
      {/* offer section */}
      <TimerSection offerTime={new Date("2024-10-30")} />

      {/* image */}
      <div className="w-full p-3 bg-muted my-6 rounded-lg">
        <div className="w-full aspect-square relative mix-blend-multiply scale-75 group-hover:scale-90 transition-all duration-500">
          <Image src={imagePath} alt={name} fill objectFit="cover" />
        </div>
      </div>

      {/* product details */}
      <div className="flex flex-col gap-3 my-5">
        {/* review */}
        <ReviewSection />

        {/* title */}
        <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary" title={name}>
         {name}
        </h3>

        <PriceSection prevPrice={prevPrice} price={price} />
      </div>
    </article>
  );
}
