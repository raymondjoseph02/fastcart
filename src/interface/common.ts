export interface SelectFilterProps {
  name: string;
  id?: string;
  option: string[];
  handleOnChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
}
export interface TagProps {
  text: string;
  handleCancle?: () => void;
}
