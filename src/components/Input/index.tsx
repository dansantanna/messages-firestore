import { ChangeEvent, useState } from "react";
import { Container, InputStyled, Label } from "./Input.styles";

const Input: React.FC<{
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, placeholder, type = "text", onChange, value }) => {
  const [isFocused, setIsFocused] = useState(!!value);

  const classNameFocused = isFocused || value ? "focused" : "";

  return (
    <Container>
      <Label htmlFor={id} className={classNameFocused}>
        {placeholder}
      </Label>
      <InputStyled
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
};
export default Input;
