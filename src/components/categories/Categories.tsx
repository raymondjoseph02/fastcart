import CategoriesCard from "./CategoriesCard";
import { categories } from "../../data/category";
export const CategoriesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.92rem]">
      {categories.map(
        (category, index) =>
          category.visibility === true && (
            <CategoriesCard
              image={category.image}
              categoryTitle={category.categoryName}
              key={index}
              numberOfProduct={category.products.length}
            />
          )
      )}
    </div>
  );
};
