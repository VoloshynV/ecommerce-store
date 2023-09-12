"use client";
import Image from "next/image";
import { Product } from "@/types";
import { IconButton } from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "@/components/ui/currency";

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { name, category, price, images } = data;

  return (
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          src={images[0].url}
          alt="image"
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
    </div>
  );
};
