import {
  ArrowLeft,
  ArrowRight,
  DelectIcon,
  EditIcon,
} from "../assets/svg/general";
import { SearchBar } from "../components/common/SearchBar";
import { SelectFilter } from "../components/common/SelectFIlter";
import { Heading } from "../components/products/Heading";
import hoodieImage from "../assets/images/hoodie.png";
import tShirt from "../assets/images/womenTshirt.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import DeleteCustomer from "../components/common/modals/DeleteCustomer";

export const Products = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isDelect, setIsDelect] = useState(true);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Men Grey Hoodie",
      description: "Hoodies",
      image: hoodieImage,
      inStock: 96,
      color: "black",
      price: 49.99,
      rating: "5.0",
      vote: 32,
    },
    {
      id: 2,
      name: "Women Striped T-Shirt",
      description: "T-Shirt",
      image: tShirt,
      inStock: 56,
      color: "white",
      price: 34.9,
      rating: "4.8",
      vote: 24,
    },
    {
      id: 3,
      name: "Men White T-Shirt",
      description: "T-Shirt",
      image: tShirt,
      inStock: "Out of Stock",
      color: "white",
      price: 34.9,
      rating: "4.8",
      vote: 24,
    },
    {
      id: 4,
      name: "Black Hoodie 4",
      description: "Hoodie",
      image: hoodieImage,
      inStock: 35,
      color: "black",
      price: 64.82,
      rating: "4.5",
      vote: 9,
    },
    {
      id: 5,
      name: "White T-Shirt 5",
      description: "T-Shirt",
      image: tShirt,
      inStock: 25,
      color: "white",
      price: 65.24,
      rating: "4.4",
      vote: 4,
    },
    {
      id: 6,
      name: "Blue Sweater 6",
      description: "Sweater",
      image: hoodieImage,
      inStock: 74,
      color: "blue",
      price: 41.91,
      rating: "4.4",
      vote: 48,
    },
    {
      id: 7,
      name: "Red Jacket 7",
      description: "Jacket",
      image: tShirt,
      inStock: 87,
      color: "red",
      price: 39.18,
      rating: "4.8",
      vote: 10,
    },
    {
      id: 8,
      name: "Green Tank Top 8",
      description: "Tank Top",
      image: hoodieImage,
      inStock: 1,
      color: "green",
      price: 38.42,
      rating: "4.8",
      vote: 28,
    },
    {
      id: 9,
      name: "Gray Hoodie 9",
      description: "Hoodie",
      image: tShirt,
      inStock: 85,
      color: "gray",
      price: 38.68,
      rating: "4.9",
      vote: 24,
    },
    {
      id: 10,
      name: "Black T-Shirt 10",
      description: "T-Shirt",
      image: hoodieImage,
      inStock: "Out of Stock",
      color: "black",
      price: 40.04,
      rating: "4.2",
      vote: 44,
    },
    {
      id: 11,
      name: "White Sweater 11",
      description: "Sweater",
      image: tShirt,
      inStock: 62,
      color: "white",
      price: 51.39,
      rating: "4.5",
      vote: 41,
    },
    {
      id: 12,
      name: "Blue Jacket 12",
      description: "Jacket",
      image: hoodieImage,
      inStock: 90,
      color: "blue",
      price: 43.07,
      rating: "4.1",
      vote: 34,
    },
    {
      id: 13,
      name: "Red Tank Top 13",
      description: "Tank Top",
      image: tShirt,
      inStock: 91,
      color: "red",
      price: 50.06,
      rating: "4.7",
      vote: 19,
    },
    {
      id: 14,
      name: "Green Hoodie 14",
      description: "Hoodie",
      image: hoodieImage,
      inStock: 80,
      color: "green",
      price: 61.11,
      rating: "4.8",
      vote: 38,
    },
    {
      id: 15,
      name: "Gray T-Shirt 15",
      description: "T-Shirt",
      image: tShirt,
      inStock: 69,
      color: "gray",
      price: 49.49,
      rating: "4.5",
      vote: 1,
    },
    {
      id: 16,
      name: "Black Sweater 16",
      description: "Sweater",
      image: hoodieImage,
      inStock: 57,
      color: "black",
      price: 47.86,
      rating: "4.8",
      vote: 11,
    },
    {
      id: 17,
      name: "White Jacket 17",
      description: "Jacket",
      image: tShirt,
      inStock: 26,
      color: "white",
      price: 59.91,
      rating: "4.7",
      vote: 36,
    },
    {
      id: 18,
      name: "Blue Tank Top 18",
      description: "Tank Top",
      image: hoodieImage,
      inStock: 94,
      color: "blue",
      price: 46.73,
      rating: "4.3",
      vote: 15,
    },
    {
      id: 19,
      name: "Red Hoodie 19",
      description: "Hoodie",
      image: tShirt,
      inStock: 5,
      color: "red",
      price: 56.96,
      rating: "4.9",
      vote: 10,
    },
    {
      id: 20,
      name: "Green T-Shirt 20",
      description: "T-Shirt",
      image: hoodieImage,
      inStock: "Out of Stock",
      color: "green",
      price: 44.73,
      rating: "4.4",
      vote: 0,
    },
  ]);

  const navigate = useNavigate();
  const filterOption = ["date", "price", "rating"];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleSelect = (id: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const toggleSelectAll = () => {
    const allIds = paginatedProducts.map((c) => c.id.toString());
    const allSelected = allIds.every((id) => selected.includes(id));
    setSelected(
      allSelected
        ? selected.filter((id) => !allIds.includes(id))
        : [...new Set([...selected, ...allIds])]
    );
  };

  const handleDeleteProduct = () => {
    if (selected.length === 0) {
      return;
    }
    const updatedProducts = products.filter(
      (product) => !selected.includes(product.id.toString())
    );
    setProducts(updatedProducts);
    setSelected([]);
  };
  useEffect(() => {
    if (selected.length !== 0) {
      setIsDelect(false);
    }
  }, [selected]);
  return (
    <div className="space-y-7 h-13">
      <div>
        <Heading
          title="Products"
          primaryBtnIcon={true}
          primaryBtnText="Add Product"
          SecondaryBtnText="Export"
          handleOnClickPrimaryButton={() =>
            navigate(RoutePaths.CREATE_PRODUCTS)
          }
        />
      </div>
      <div className="pb-10 pt-5.5 pl-5 pr-7 bg-white  rounded-md ">
        <div className="flex justify-between items-center pb-6.5 pl-2">
          <div className="flex gap-3">
            <SelectFilter name="productFilter" option={filterOption} />
            <SearchBar />
          </div>
          <div className="flex gap-3">
            <div className="p-2 border border-primary-150 rounded text-primary-200 hover:bg-primary-150/60 transition-colors ease-in-out duration-500">
              <EditIcon />
            </div>
            <DeleteCustomer
              buttonType="icon"
              disabled={isDelect}
              onDelete={handleDeleteProduct}
              numbersOfItems={selected.length}
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="h-11 border-b border-primary-150 [&>td]:text-sm [&>td]:font-normal [&>td]:text-gray-100 [&>td]:leading-5">
              <td className="pl-2">
                <input
                  type="checkbox"
                  checked={paginatedProducts.every((c) =>
                    selected.includes(c.id.toString())
                  )}
                  className="size-5 rounded border border-primary-200"
                  onChange={toggleSelectAll}
                />
              </td>
              <td>Product</td>
              <td className="md:min-w-35">Inventory</td>
              <td className="md:min-w-35">Color</td>
              <td className="md:min-w-35">Price</td>
              <td className="md:min-w-35">Rating</td>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
              <tr
                key={index}
                className="h-18 border-b border-primary-150 hover:bg-gray-50 whitespace-nowrap transition-colors"
              >
                <td className="pl-2">
                  <input
                    type="checkbox"
                    className="size-5 rounded border outline-primary-200"
                    onChange={() => toggleSelect(product.id.toString())}
                    checked={selected.includes(product.id.toString())}
                  />
                </td>
                <td className="flex gap-4 items-center h-18">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-12 rounded"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-300 leading-5">
                      {product.name}
                    </p>
                    <p className="text-sm font-normal text-gray-100 leading-5">
                      {product.description}
                    </p>
                  </div>
                </td>
                <td className="text-sm font-normal text-gray-300 leading-5">
                  {product.inStock.toString().toLowerCase() ===
                  "out of stock" ? (
                    <p className="rounded bg-gray-150 w-fit py-0.5 px-2 text-sm font-normal text-gray-300 leading-5">
                      {product.inStock}
                    </p>
                  ) : (
                    <p>{product.inStock} in stock</p>
                  )}
                </td>
                <td className="text-sm capitalize font-normal text-gray-300 leading-5">
                  {product.color}
                </td>
                <td className="text-sm font-normal text-gray-300 leading-5">
                  ${product.price}
                </td>
                <td className="text-sm font-normal text-gray-300 leading-5">
                  {product.rating} ({product.vote} votes)
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center pt-7">
          <div className="flex gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrowLeft />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-[#ECF2FF] text-primary-200"
                      : " text-gray-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ArrowRight />
            </button>
          </div>
          <div>
            <p>
              {products.length} {products.length > 1 ? "Results" : "Result"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
