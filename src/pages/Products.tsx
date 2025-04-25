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
import React, { useState } from "react";

export const Products = () => {
  const products = [
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
  ];

  const filterOption = ["date", "price", "rating"];
  const repeatedProducts = Array(120)
    .fill(null)
    .flatMap((_, index) => products[index % products.length]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(repeatedProducts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = repeatedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-7">
      <div>
        <Heading
          title="Products"
          primaryBtnIcon={true}
          primaryBtnText="Add Product"
          SecondaryBtnText="Export"
        />
      </div>
      <div className="pb-10 pt-5.5 px-7 bg-white space-y-6.5 rounded-md h-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <SelectFilter name="productFilter" option={filterOption} />
            <SearchBar />
          </div>
          <div className="flex gap-3">
            <div className="p-2 border border-primary-150 rounded text-primary-200 hover:bg-primary-150/60 transition-colors ease-in-out duration-500">
              <EditIcon />
            </div>
            <div className="p-2 border border-primary-150 rounded text-primary-200 hover:bg-primary-150/60 transition-colors ease-in-out duration-500">
              <DelectIcon />
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="h-11 border-b border-primary-150 [&>td]:text-sm [&>td]:font-normal [&>td]:text-gray-100 [&>td]:leading-5">
              <td>
                <input
                  type="checkbox"
                  className="size-5 rounded border border-primary-200"
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
              <tr key={index} className="h-18 border-b border-primary-150">
                <td>
                  <input
                    type="checkbox"
                    className="size-5 rounded border outline-primary-200"
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

        <div className="flex justify-between items-center">
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
              {repeatedProducts.length}{" "}
              {repeatedProducts.length > 1 ? "Results" : "Result"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
