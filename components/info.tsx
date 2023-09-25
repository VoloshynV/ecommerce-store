"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

import { useCard } from "@/hooks/use-card";
import { Product } from "@/types";

import Button from "./ui/button";
import { Currency } from "./ui/currency";

interface InfoProps {
  data: Product;
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  const { addItem } = useCard();
  const { name, price, size, color } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between text-2xl text-gray-900">
        <Currency value={price} />
      </div>
      <hr className="my-4" />
      <div className="space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-2"
          onClick={() => addItem(data)}
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
