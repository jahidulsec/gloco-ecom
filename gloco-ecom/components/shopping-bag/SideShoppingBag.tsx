import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import CurrencyText from "../heading/CurrencyText";
import { Button } from "../ui/button";
import CustomButton from "../buttons/CustomButton";
import NoItem from "../assets/no-data/NoItem";

function SideShoppingBag() {
  return (
    <>
      <ScrollArea className="px-6 py-6 min-h-[65vh] max-h-[69vh] border-b">
        <NoItem />
      </ScrollArea>
      <div className="absolute bottom-1 w-full">
        <section className="px-6 py-3">
          <h4 className="font-medium">Subtotal</h4>
          <h5 className="text-xl font-bold">
            <CurrencyText currency={5000} />
          </h5>
        </section>
        <div className="buttons px-6 py-1 flex flex-col">
          <CustomButton className="">Checkout</CustomButton>
        </div>
      </div>
    </>
  );
}

export default SideShoppingBag;
