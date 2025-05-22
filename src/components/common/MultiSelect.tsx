import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, Cancel } from "../../assets/svg/general";

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

  const selectedLabels = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label);

  return (
    <div
      ref={ref}
      className="relative w-full cursor-pointer  border border-[#D9E1EC] rounded min-h-10"
    >
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex w-full px-4 py-2 text-sm font-normal bg-white rounded cursor-pointer wrap-anywhere"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {selectedLabels.length === 0 ? (
          <span className="text-base text-gray-400">{placeholder}</span>
        ) : (
          selectedLabels.map((label) => (
            <span
              key={label}
              className="flex items-center justify-between gap-3 bg-[#E6E9F4] rounded max-h-6 my-1 mx-2 text-[#5A607F]"
              style={{
                padding: "2px 8px",
              }}
            >
              {label}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOption(label);
                }}
                className="flex items-center justify-center hover:bg-gray-200"
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
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            marginTop: 4,
            width: "100%",
            maxHeight: 200,
            overflowY: "auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {options
            .filter((opt) => !value.includes(opt.value))
            .map((opt) => (
              <div
                key={opt.value}
                onClick={() => toggleOption(opt.value)}
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  background: "#fff",
                  fontWeight: 400,
                }}
              >
                <input
                  type="checkbox"
                  checked={false}
                  className="appearance-none"
                  readOnly
                  style={{ marginRight: 8 }}
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
