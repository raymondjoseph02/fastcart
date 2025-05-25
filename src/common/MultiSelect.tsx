import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, Cancel } from "../assets/svg/general";

type Option = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: Option[];
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  console.log(options, "value in MultiSelect");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const selectedOptions = options.filter((opt) =>
    value.map((value) => value.toLowerCase().includes(opt.value.toLowerCase()))
  );
  // options.map((option) => console.log(option, "opr"));
  value.map((option) => console.log(option, "vl"));
  // console.log(options[0].label, options[0].value, value);

  return (
    <div
      ref={ref}
      className="relative w-full cursor-pointer border border-[#D9E1EC] rounded min-h-10"
    >
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex flex-wrap items-center w-full px-4 py-2 text-sm font-normal bg-white rounded cursor-pointer"
      >
        {selectedOptions.length === 0 ? (
          <span className="text-base text-gray-400">{placeholder}</span>
        ) : (
          selectedOptions.map((opt) => (
            <span
              key={opt.value}
              className="flex items-center gap-2 bg-[#E6E9F4] rounded max-h-6 my-1 mx-2 text-[#5A607F] px-2 py-0.5"
            >
              {opt.label}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOption(opt.value);
                }}
                className="flex items-center justify-center rounded hover:bg-gray-200"
              >
                <Cancel />
              </button>
            </span>
          ))
        )}
        <span className="absolute -translate-y-1/2 right-3 top-1/2">
          <ArrowDown />
        </span>
      </div>
      {open && (
        <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-white rounded max-h-52">
          {options
            .filter((opt) => !value.includes(opt.value))
            .map((opt) => (
              <div
                key={opt.value}
                onClick={() => toggleOption(opt.value)}
                className="flex items-center px-3 py-2 font-normal cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={value.includes(opt.value) ? true : false}
                  readOnly
                  className="mr-2 appearance-none accent-indigo-500"
                />
                {opt.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
