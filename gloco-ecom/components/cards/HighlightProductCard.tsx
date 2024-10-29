import React from "react";
import TimerSection from "../offers/TimerSection";
import Image from "next/image";
import Rating from "../rating/Rating";
import CurrencyText from "../heading/CurrencyText";
import ReviewSection from "./ReviewSection";
import PriceSection from "./PriceSection";

export default function HighlightProductCard() {
  return (
    <article className="border border-foreground rounded-lg min-h-[10rem] p-6">
      {/* offer section */}
      <TimerSection offerTime={new Date("2024-10-30")} />

      {/* image */}
      <div className="w-full p-3 bg-muted my-6 rounded-lg">
        <div className="w-full aspect-square relative">
          <Image src={""} alt="" fill objectFit="cover" />
        </div>
      </div>

      {/* product details */}
      <div className="flex flex-col gap-3 my-5">
        {/* review */}
        <ReviewSection />

        {/* title */}
        <h3 className="text-xl font-semibold line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi itaque
          nisi quis repellendus adipisci quos fugiat voluptatem. Voluptatem eius
          a hic repudiandae nesciunt officiis explicabo, temporibus eos dolore.
          Debitis, consequatur.
        </h3>

        <PriceSection />
      </div>
    </article>
  );
}
