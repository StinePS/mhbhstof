export type MenuItem = {
  name: string;
  url: string;
  items?: Array<MenuItem>;
};
