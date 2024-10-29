import React from "react";
import TimerSection from "../offers/TimerSection";
import Image from "next/image";
import Rating from "../rating/Rating";
import CurrencyText from "../heading/CurrencyText";

export default function HighlightProductCard() {
  return (
    <article className="border border-foreground rounded-lg min-h-[10rem] p-5">
      {/* offer section */}
      <TimerSection offerTime={new Date("2024-10-30")} />

      {/* image */}
      <div className="w-full p-3 bg-muted my-5 rounded-lg">
        <div className="w-full aspect-square relative">
          <Image src={""} alt="" fill objectFit="cover" />
        </div>
      </div>

      {/* product details */}
      <div className="flex flex-col gap-3">
        {/* review */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Rating className="size-3" noOfStars={4} />
          <p className="text-xs">(2054)</p>
        </div>


        {/* title */}
        <h3 className="text-xl font-semibold line-clamp-2">Asus zenfone 12</h3>

        <div className="price flex gap-3 items-end">
          {/* current price */}
          <CurrencyText className="text-secondary" currency={5000} />
          {/* previous price */}
          <CurrencyText className="text-muted-foreground line-through text-xs" currency={6000} />
        </div>
      </div>
    </article>
  );
}
