export interface ProductItem {
  id: string;
  images: string[];
  category: string;
  price: string;
  currency: string;
  title: string;
  description: string;
  adress: {
    city: string;
    street: string;
  };
  date: string;
  time: string;
}
