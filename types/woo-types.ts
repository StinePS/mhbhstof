export type WooImage = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
};

export type WooCategory = { id: number; name: string; slug: string };

export type WooProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: "simple" | string;
  status: "publish" | string;
  featured: boolean;
  catalog_visibility: "visible" | string;
  description?: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  on_sale: false;
  purchasable: true;
  total_sales: 0;
  virtual: false;
  downloadable: false;
  downloads: [];
  download_limit: -1;
  download_expiry: -1;
  external_url: "";
  button_text: "";
  tax_status: "taxable";
  tax_class: "";
  manage_stock: false;
  stock_quantity: null;
  backorders: "no";
  backorders_allowed: false;
  backordered: false;
  low_stock_amount: null;
  sold_individually: false;
  weight: "";
  dimensions: { length: ""; width: ""; height: "" };
  shipping_required: true;
  shipping_taxable: true;
  shipping_class: "";
  shipping_class_id: 0;
  reviews_allowed: true;
  average_rating: "0.00";
  rating_count: 0;
  upsell_ids: [];
  cross_sell_ids: [];
  parent_id: 0;
  purchase_note: string;
  categories: WooCategory[];
  tags: string[];
  images: WooImage[];
  attributes: Object[];
  default_attributes: [];
  variations: [];
  grouped_products: [];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: [];
  stock_status: "instock" | string;
  has_options: boolean;
  _links: { self: [[Object]]; collection: [[Object]] };
};
