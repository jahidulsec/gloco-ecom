import Image from "next/image";
import React from "react";

function NoItem() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <Image
        src={"./no_item.svg"}
        alt="No-item-image"
        width={200}
        height={200}
      />
      <p className="text-xs mt-5 text-gray-400 pointer-events-none">No data</p>
    </div>
  );
}

export default NoItem;
