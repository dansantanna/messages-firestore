import { styled } from "utils/stitches.config";

const Button = styled("button", {
  padding: "16px 24px",
  borderRadius: "12px",
  backgroundColor: "$backgroundPrimary",
  height: 56,
  color: "$white",
  outline: "none",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:disabled": {
    backgroundColor: "$backgroundSecundary",
    color: "$textColorDisabled",
    cursor: "not-allowed",
  },
  "&:not([disabled])": {
    "&:hover, &:active": {
      opacity: 0.95,
      transform: "scale(1.005)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
});

export default Button;
