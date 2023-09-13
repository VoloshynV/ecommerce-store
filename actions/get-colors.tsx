import { ENV } from "@/env";
import { Color } from "@/types";

const URL = `${ENV.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  return res.json();
};

export default getColors;
