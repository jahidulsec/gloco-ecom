import React from "react";
import Rating from "../rating/Rating";

function ReviewSection() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Rating className="size-3" noOfStars={4} />
      <p className="text-xs">(2054)</p>
    </div>
  );
}

export default ReviewSection;
