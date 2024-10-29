import React from "react";
import CurrencyText from "../heading/CurrencyText";

function PriceSection() {
  return (
    <div className="price flex gap-3 items-center">
      {/* current price */}
      <CurrencyText className="text-secondary text-lg" currency={5000} />
      {/* previous price */}
      <CurrencyText
        className="text-muted-foreground line-through text-xs"
        currency={6000}
      />
    </div>
  );
}

export default PriceSection;
