import React from "react";
import HighlightProductCard from "../cards/HighlightProductCard";
import TrendingProductCard from "../cards/TrendingProductCard";
import { trendingProducts } from "@/lib/data";

function ProductSection() {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-0 md:gap-y-0 md:gap-x-8">
      {/* highlighted product */}
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <HighlightProductCard {...trendingProducts[0]} />
      </div>

      {/* other products */}
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 place-self-start">
        {trendingProducts.map((item, index) => (
            <TrendingProductCard key={index} {...item} />
        ))}
        {/* {trendingProducts.map((item, index) => (
            <TrendingProductCard key={index} {...item} />
        ))} */}
      </div>
    </section>
  );
}

export default ProductSection;
