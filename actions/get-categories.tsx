import { ENV } from "@/env";
import { Category } from "@/types";

const URL = `${ENV.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  return res.json();
};

export default getCategories;
