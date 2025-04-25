import { useState } from "react";
import { Cancel, DeleteIcon } from "../../assets/svg/general";

interface DeleteCustomerPropsP {
  buttonType: "icon" | "text";
  onDelete: () => void;
  disabled?: boolean;
}

const DeleteCustomer = ({
  buttonType,
  onDelete,
  disabled = false,
}: DeleteCustomerPropsP) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen((cur) => !cur);
  const isText = buttonType === "text";

  const handleDelete = () => {
    onDelete();
    toggleModal();
  };
  return (
    <>
      <button
        className={
          isText
            ? "text-red-100 text-sm border-0"
            : "p-2 disabled:opacity-50 hover:text-white  hover:bg-red-100 text-primary-200 border rounded border-gray-150"
        }
        aria-label="Edit selected"
        disabled={disabled}
        onClick={toggleModal}
      >
        {isText ? "Delete Customer" : <DeleteIcon />}
      </button>

      <div
        className={
          "fixed inset-0 bg-gray-300/40 z-1000 transition-all ease-linear duration-300 " +
          (open ? "opacity-100" : "opacity-0 pointer-events-none")
        }
      >
        <div className="flex justify-center items-center w-full h-full ">
          <div
            className={
              "text-gray-300 rounded relative bg-white shadow-bg-auth p-7 max-w-[540px] w-full transition-all ease-linear duration-300 " +
              (open ? "opacity-100 scale-100" : "opacity-0 scale-75")
            }
          >
            <p className=" font-bold text-xl">Delete Items</p>

            <button
              onClick={toggleModal}
              className="absolute border-0 top-4 right-4"
            >
              <Cancel />
            </button>

            <p className="mt-5 mb-10">
              Are you sure you want to delete these items?
            </p>

            <div className="flex justify-end items-center gap-4 flex-wrap">
              <button
                onClick={toggleModal}
                className="bg-white py-2 px-5 text-red-100 rounded hover:scale-110 transition-all ease-linear"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="text-white border border-primary-150 py-2 px-5 bg-red-100 rounded transition-all ease-linear hover:scale-110"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCustomer;
