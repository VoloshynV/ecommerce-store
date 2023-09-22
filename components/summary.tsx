"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { useCard } from "@/hooks/use-card";

import Button from "./ui/button";
import { Currency } from "./ui/currency";

export const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCard();

  const totalPrice = items.reduce((acc, item) => acc + Number(item.price), 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
    );
    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong with the payment");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="mt-6 w-full"
      >
        Checkout
      </Button>
    </div>
  );
};
