import qs from "query-string";

import { ENV } from "@/env";
import { Product } from "@/types";

const URL = `${ENV.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      ...query,
    },
  });

  const res = await fetch(url, { next: { revalidate: 0 } });

  return res.json();
};

export default getProducts;
