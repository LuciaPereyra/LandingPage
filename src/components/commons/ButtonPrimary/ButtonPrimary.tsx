import { FC } from "react";
import { CustomButton } from "./ButtonPrimary.styles";

interface Props {
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained" | undefined;
  children: JSX.Element | string
}

export const ButtonPrimary: FC<Props> = ({ children, onClick, variant, ...props }) => {

  return (
    <CustomButton
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {children}
    </CustomButton>
  );
};
