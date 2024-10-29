import React from "react";
import HighlightProductCard from "../cards/HighlightProductCard";

function ProductSection() {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {/* highlighted product */}
      <div className="col-span-1">
        <HighlightProductCard />
      </div>

      {/* other products */}
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
        asdf
      </div>
    </section>
  );
}

export default ProductSection;
