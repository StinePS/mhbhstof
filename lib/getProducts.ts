import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL as string,
  consumerKey: process.env.WC_COMSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

export async function getProducts() {
  try {
    const { data } = await api.get("products", {
      per_page: 10,
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProduct(id: string) {}
