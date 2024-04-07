import { useMemo } from "react";
import { Button } from "./ui-button.styled";

const buttonVariants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};

const UIButton = ({ variant, onClick, children }) => {
  const buttonVariant = useMemo(() => {
    return buttonVariants[variant] || buttonVariants.primary;
  }, [variant]);

  return (
    <Button type="button" className={buttonVariant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default UIButton;
