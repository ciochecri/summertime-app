import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, disabled, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} disabled = {disabled??false}>
    {children}
  </StyledButton>
);
