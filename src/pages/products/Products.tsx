import { ArrowLeft, ArrowRight, EditIcon } from "../../assets/svg/general";
import { SearchBar } from "../../common/SearchBar";
import { SelectFilter } from "../../common/SelectFIlter";
import { Heading } from "../../common/Heading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/RoutesPath";
import DeleteCustomer from "../../common/modals/DeleteCustomer";
import { categories } from "../../data/category";
import { debounce } from "../../utility/debounce";
export const Products = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isDelete, setIsDelete] = useState(true);
  const [products, setProducts] = useState(() => {
    const products = categories.flatMap((category) => category.products);
    return products.map((product) => ({
      ...product,
    }));
  });
  const [searchTerm, setSearchTerm] = useState("");

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

  const toggleSelect = (name: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name]
    );
  };

  const toggleSelectAll = () => {
    const allIds = paginatedProducts.map((c) => c.name.toString());
    const allSelected = allIds.every((name) =>
      selected.includes(name.toString())
    );
    setSelected(
      allSelected
        ? selected.filter((name) => !allIds.includes(name))
        : [...new Set([...selected, ...allIds])]
    );
  };
  const handleEditProduct = () => {
    if (selected.length === 1) {
      const productId = selected[0];
      console.log("Editing product with ID:", productId);

      const productCategory = categories.find((category) =>
        category.products.some((product) => product.name === productId)
      );
      if (!productCategory) {
        return;
      }
      const categoryName = productCategory.categoryName;
      navigate(
        RoutePaths.EDIT_PRODUCT.replace(":id", categoryName).replace(
          ":productName",
          productId
        )
      );
    }
  };

  const handleDeleteProduct = () => {
    if (selected.length === 0) {
      return;
    }

    const updatedProducts = products.filter(
      (product) => !selected.includes(product.name.toString())
    );
    setProducts(updatedProducts);
    setSelected([]);
  };
  const filterProducts = (searchValue: string) => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    if (lowerCaseSearchValue.trim() === "") {
      setProducts(
        categories
          .flatMap((category) => category.products)
          .map((product) => ({ ...product }))
      );
      return;
    }
    const filteredProducts = categories
      .flatMap((category) => category.products)
      .filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseSearchValue) ||
          product.description.toLowerCase().includes(lowerCaseSearchValue)
      )
      .map((product) => ({ ...product }));

    setProducts(filteredProducts);
    setCurrentPage(1);
  };
  const debouncedHandleSearch = debounce(filterProducts, 300);

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
    debouncedHandleSearch(searchValue);
  };
  useEffect(() => {
    if (selected.length !== 0) {
      setIsDelete(false);
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
            <SearchBar
              value={searchTerm}
              setValue={setSearchTerm}
              handleSearch={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            {selected.length === 1 && (
              <button
                onClick={handleEditProduct}
                className="p-2 transition-colors duration-500 ease-in-out border rounded border-primary-150 text-primary-200 hover:bg-primary-150/60"
              >
                <EditIcon />
              </button>
            )}
            {selected.length > 0 && (
              <DeleteCustomer
                buttonType="icon"
                disabled={isDelete}
                onDelete={handleDeleteProduct}
                numbersOfItems={selected.length}
              />
            )}
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="h-11 border-b border-primary-150 [&>td]:text-sm [&>td]:font-normal [&>td]:text-gray-100 [&>td]:leading-5">
              <td className="pl-2">
                <input
                  type="checkbox"
                  checked={paginatedProducts.every((c) =>
                    selected.includes(c.name.toString())
                  )}
                  className="border rounded size-5 border-primary-200"
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
                className="transition-colors border-b h-18 border-primary-150 hover:bg-gray-50 whitespace-nowrap"
              >
                <td className="pl-2">
                  <input
                    type="checkbox"
                    className="border rounded size-5 outline-primary-200"
                    onChange={() => toggleSelect(product.name.toString())}
                    checked={selected.includes(product.name.toString())}
                  />
                </td>
                <td className="flex items-center gap-4 h-18">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded size-12"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-5 text-gray-300">
                      {product.name}
                    </p>
                    <p className="text-sm font-normal leading-5 text-gray-100">
                      {product.description}
                    </p>
                  </div>
                </td>
                <td className="text-sm font-normal leading-5 text-gray-300">
                  {product.stock.toString().toLowerCase() === "out of stock" ? (
                    <p className="rounded bg-gray-150 w-fit py-0.5 px-2 text-sm font-normal text-gray-300 leading-5">
                      {product.stock}
                    </p>
                  ) : (
                    <p>{product.stock} in stock</p>
                  )}
                </td>
                <td className="text-sm font-normal leading-5 text-gray-300 capitalize">
                  {product.options
                    ?.find((opt) => opt.name === "Color")
                    ?.values.map((value) => value + " ") || "N/A"}
                </td>
                <td className="text-sm font-normal leading-5 text-gray-300">
                  ${product.price}
                </td>
                <td className="text-sm font-normal leading-5 text-gray-300">
                  {product.rating} ({product.vote} votes)
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between pt-7">
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
