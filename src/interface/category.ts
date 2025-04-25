export interface CategoryProductsProps {
  isEdit: boolean;
  id?: string | undefined;
}
export interface CategoryCardPrpos {
  image: string;
  categoryTitle: string;
  numberOfProduct: number;
}
interface ProductProps {
  productName: string;
  productImage: string;
}
export interface CategoryProps {
  categoryName: string;
  image: string;
  visibility: boolean;
  products: ProductProps[];
}
export interface CategoryFormProps {
  isEdit: boolean;
  editCategory?: CategoryProps | null;
}
export interface ImageDropInputProps {
  isEdit: boolean;
  imageUrl?: string;
}
