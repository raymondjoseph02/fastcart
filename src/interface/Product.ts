export interface ProductHeadingProps {
  title: string;
  SecondaryBtnText: string;
  primaryBtnIcon: boolean;
  primaryBtnText?: string;
  handleOnClickPrimaryButton?: () => void;
  handleOnClickSecondaryButton?: () => void;
}
