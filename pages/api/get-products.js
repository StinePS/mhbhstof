// Fetching products from Wordpress with inspiration from Imran Sayed https://www.youtube.com/watch?v=YJj2edx0ZFs&list=PLD8nQCAhR3tSRwsvzRtogv9MFkEWo5d9c&index=10

export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
