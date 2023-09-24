import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <Loader2 className="my-5 h-14 w-14 animate-spin" />
    </div>
  );
}
