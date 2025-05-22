import { useEffect, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../assets/svg/general";
import { TablePaginationProps } from "../interface/common";

const TablePagination = ({
  perPage,
  setPage,
  page,
  totalItems: totalCustomer,
}: TablePaginationProps) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  const totalPages = Math.ceil(totalCustomer / perPage);

  const getPageNumbers = () => {
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    if (startPage > 1) pageNumbers.push(1);
    if (startPage > 2 && maxVisiblePages > 3) pageNumbers.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1 && maxVisiblePages > 3)
      pageNumbers.push("...");
    if (endPage < totalPages) pageNumbers.push(totalPages);

    return pageNumbers;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMaxVisiblePages(1);
      } else if (window.innerWidth <= 480) setMaxVisiblePages(1);
      else {
        setMaxVisiblePages(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-7 flex flex-wrap gap-2 justify-between items-center text-sm md:text-base">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="p-[6px] rounded hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous page"
        >
          <LeftArrowIcon />
        </button>

        {getPageNumbers().map((pg, index) => (
          <button
            key={index}
            onClick={() => {
              if (pg !== "...") {
                setPage(Number(pg)); // Directly set the page number if it's not ellipsis
              } else if (pg === "..." && index === 1) {
                setPage(1); // If first ellipsis, go to first page
              } else if (
                pg === "..." &&
                index === getPageNumbers().length - 2
              ) {
                setPage(totalPages); // If second ellipsis, go to last page
              }
            }}
            className={`flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded ${
              page === pg
                ? "text-primary-200 bg-[#ECF2FF]"
                : "text-gray-100 hover:bg-gray-50"
            }`}
            aria-label={`Page ${pg}`}
          >
            {pg}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
          className="p-1 rounded hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next page"
        >
          <RightArrowIcon />
        </button>
      </div>

      <p className="text-gray-100 mt-2 md:mt-0">{totalCustomer} Results</p>
    </div>
  );
};

export default TablePagination;
