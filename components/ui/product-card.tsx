"use client";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { Currency } from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import { useCard } from "@/hooks/use-card";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { name, category, price, images } = data;

  const router = useRouter();
  const { onOpen } = usePreviewModal();
  const { addItem } = useCard();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onOpen(data);
  };

  const onAddToCard: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          src={images[0].url}
          alt="image"
          className="aspect-square rounded-md object-contain"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCard}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
    </div>
  );
};
