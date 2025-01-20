import React from "react";
import CurrencyText from "../heading/CurrencyText";

function PriceSection({
  prevPrice,
  price,
}: {
  prevPrice?: number | null;
  price: number;
}) {
  return (
    <div className="price flex gap-3 items-center">
      {/* current price */}
      <CurrencyText className="text-secondary text-lg" currency={price} />
      {/* previous price */}
      {prevPrice != null && (
        <CurrencyText
          className="text-muted-foreground line-through text-xs"
          currency={prevPrice}
        />
      )}
    </div>
  );
}

export default PriceSection;
