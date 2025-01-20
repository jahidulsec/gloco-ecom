import Image from "next/image";
import React from "react";
import ReviewSection from "./ReviewSection";
import PriceSection from "./PriceSection";
import { trendingProducts } from "@/lib/data";

function TrendingProductCard({
  name,
  imagePath,
  prevPrice,
  price,
}: (typeof trendingProducts)[0]) {
  return (
    <article className="flex gap-3 items-center w-full group cursor-pointer">
      <div className="w-1/3 p-3 bg-muted rounded-lg">
        <div className="w-full aspect-square relative mix-blend-multiply scale-90 group-hover:scale-100 transition-all duration-500">
          <Image src={imagePath} alt={name} fill objectFit="cover" />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-2/3">
        <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-primary" title={name}>
          {name}
        </h3>
        <ReviewSection />
        <PriceSection prevPrice={prevPrice} price={price} />
      </div>
    </article>
  );
}

export default TrendingProductCard;
