import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  className?: string;
  onClick?: () => void;
  icon: React.ReactElement;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className,
      )}
    >
      {icon}
    </button>
  );
};
