import React from "react";
import HighlightProductCard from "../cards/HighlightProductCard";
import TrendingProductCard from "../cards/TrendingProductCard";

function ProductSection() {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5">
      {/* highlighted product */}
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <HighlightProductCard />
      </div>

      {/* other products */}
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {Array.from({length: 8}).map((_, index) => (
            <TrendingProductCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
