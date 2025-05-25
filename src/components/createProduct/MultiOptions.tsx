import { FC, useEffect, useState } from "react";
import { ArrowDown } from "../../assets/svg/general";
import MultiSelect from "../../common/MultiSelect";
import { motion, AnimatePresence } from "framer-motion";
import { OptionType, optionTypes } from "../../interface/dataType";
import { option } from "../../data/multiOption"; // Assuming you have this data in a separate file
import { MultipleOptionsProps } from "../../interface/dataType";

export const MultipleOptions: FC<MultipleOptionsProps> = ({
  optionBlocks,
  setOptionBlocks,
  isEdit, // Default to false if not provided
}) => {
  const [multipleOptions, setMultipleOptions] = useState<boolean>();
  console.log(optionBlocks, "optionBlocks");

  useEffect(() => {
    if (isEdit && optionBlocks.length > 0) {
      setMultipleOptions(true);
      setOptionBlocks((prev) =>
        prev.map((block) => ({
          ...block,
          values: Array.isArray(block.values) ? block.values : [],
        }))
      );
    }
  }, [isEdit]);

  const handleTypeChange = (idx: number, newType: OptionType) => {
    setOptionBlocks((prev) =>
      prev.map((block, i) =>
        i === idx ? { ...block, type: newType, values: [] } : block
      )
    );
  };

  const handleValuesChange = (idx: number, newValues: string[]) => {
    setOptionBlocks((prev) =>
      prev.map((block, i) =>
        i === idx ? { ...block, values: newValues } : block
      )
    );
  };

  const handleAddOption = () => {
    // Find first unused type, or default to 'size'
    const usedTypes = optionBlocks.map((b) => b.type);
    const nextType = optionTypes.find((t) => !usedTypes.includes(t)) || "size";
    setOptionBlocks([...optionBlocks, { type: nextType, values: [] }]);
  };

  const handleRemoveOption = (idx: number) => {
    setOptionBlocks((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
        Different Options
      </p>
      <div>
        <div className="flex items-center pb-10 gap-x-3">
          <div className="switch-wrapper">
            <input
              className="switch"
              type="checkbox"
              checked={multipleOptions}
              onChange={() => setMultipleOptions((v) => !v)}
              name="multipleOptions"
              id="multipleOptions"
            />
          </div>
          <label
            className="text-base font-normal leading-5 text-gray-[#131523] select-none"
            htmlFor="multipleOptions"
          >
            This product has multiple options
          </label>
        </div>
        <AnimatePresence>
          {multipleOptions && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {optionBlocks.map((block, idx) => (
                <div key={idx} className="mb-6">
                  <p className="pb-2 text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
                    Option {idx + 1}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-7">
                    <div className="grow">
                      <label className="text-sm text-[#5A607F]">Type</label>
                      <div className="select-wrapper">
                        <div className="select-icon">
                          <ArrowDown />
                        </div>
                        <select
                          value={block.type}
                          onChange={(e) =>
                            handleTypeChange(idx, e.target.value as OptionType)
                          }
                        >
                          {optionTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              disabled={optionBlocks.some(
                                (b, i) => b.type === type && i !== idx
                              )}
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grow md:max-w-1/2">
                      <label className="text-sm text-[#5A607F]">Value</label>
                      <MultiSelect
                        options={option[block.type]}
                        value={
                          Array.isArray(block.values) && block.values.length > 0
                            ? block.values
                            : []
                        }
                        onChange={(vals: string[]) =>
                          handleValuesChange(idx, vals)
                        }
                      />
                    </div>
                    {optionBlocks.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-xs text-red-500"
                        onClick={() => handleRemoveOption(idx)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {optionBlocks.length < optionTypes.length && (
                <button
                  type="button"
                  className="px-4 py-2 mt-2 text-white bg-blue-600 rounded"
                  onClick={handleAddOption}
                >
                  More option
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
