import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { WooCategory } from "../types/woo-types";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL as string,
  consumerKey: process.env.WC_COMSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

// Fetching product data
export async function getProducts(category?: WooCategory) {
  try {
    const { data } = await api.get("products", {
      per_page: 50,
      category: category?.id,
    });

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetching product slug
export async function getProduct(slug: string) {
  try {
    const { data } = await api.get("products?slug=" + slug);
    return data?.[0];
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

// Fetching product categories
// https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-product-categories
export async function getCategories() {
  try {
    const { data } = await api.get("products/categories", {
      per_page: 50,
    });

    return data as WooCategory[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCategory(
  category?: string
): Promise<WooCategory | undefined> {
  if (!category) return undefined;
  const categories = category ? await getCategories() : [];
  return categories.find((item) => item.slug === category);
}
