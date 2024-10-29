import Image from "next/image";
import React from "react";
import ReviewSection from "./ReviewSection";
import PriceSection from "./PriceSection";

function TrendingProductCard() {
  return (
    <article className="flex gap-3 items-center w-full">
      <div className="w-1/3 p-3 bg-muted rounded-lg">
        <div className="w-full aspect-square relative">
          <Image src={""} alt="" fill objectFit="cover" />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-2/3">
        <h3 className="text-sm font-semibold line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
          iusto cumque distinctio amet quibusdam beatae reprehenderit et magni.
          Explicabo accusantium doloribus dolor eum optio esse nihil! Neque,
          vero sed.
        </h3>
        <ReviewSection />
        <PriceSection />
      </div>
    </article>
  );
}

export default TrendingProductCard;
