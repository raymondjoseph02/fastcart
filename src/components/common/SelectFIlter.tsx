import { FC } from "react";
import { SelectFilterProps } from "../../interface/common";
import { Option, Select } from "@material-tailwind/react";
export const SelectFilter: FC<SelectFilterProps> = ({ name, id, option }) => {
  return (
    <Select
      variant="outlined"
      label="Filter"
      name={name}
      id={id}
      animate
      className="text-sm font-normal leading-5 text-gray-100 capitalize bg-white border-t-0   appearance-auto focus:bg-transparent focus:outline-none "
      // value={}
      // onChange={}
    >
      {option.map((opt, i) => (
        <Option key={i} value={opt}>
          <span className="px-4 py-2 capitalize">{opt}</span>
        </Option>
      ))}
    </Select>
  );
};
