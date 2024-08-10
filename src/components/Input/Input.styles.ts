import { styled } from "utils/stitches.config";

export const Container = styled("div", {
  position: "relative",
  maxWidth: "100%",
  display: "flex",
  maxHeight: 56,
});

export const Label = styled("label", {
  position: "absolute",
  top: "50%",
  left: "16px",
  transform: "translateY(-50%)",
  transition: "all 0.2s ease",
  color: "$textColorLight",
  fontSize: "$medium",
  pointerEvents: "none",
  zIndex: 1,
  "&.focused": {
    top: "16px",
    left: 16,
    fontSize: "$small",
  },
});

export const InputStyled = styled("input", {
  flex: 1,
  padding: "16px",
  paddingTop: "24px",
  border: "1px solid rgb(204, 204, 204)",
  borderRadius: "12px",
  fontSize: "$medium",
  outline: "none",
  fontWeight: 400,
  lineHeight: "24px",
  "&::placeholder": { opacity: 0 },
});
