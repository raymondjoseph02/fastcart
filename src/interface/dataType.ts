export interface DashboardLayoutProps {
  children?: React.ReactNode;
}
export const optionTypes = [
  "size",
  "color",
  "material",
  "pattern",
  "style",
  "brand",
] as const;
export type OptionType = (typeof optionTypes)[number];

export interface OptionBlock {
  type: OptionType;
  values: string[];
}

export interface MultipleOptionsProps {
  optionBlocks: OptionBlock[];
  setOptionBlocks: React.Dispatch<React.SetStateAction<OptionBlock[]>>;
  isEdit?: boolean;
}
