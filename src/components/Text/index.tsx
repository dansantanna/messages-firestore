import { styled } from "utils/stitches.config";

const Text = styled("p", {
  fontSize: "$medium",
  fontWeight: 400,
  lineHeight: "24px",
  margin: 0,
  variants: {
    isSmallText: {
      true: {
        fontSize: "$small",
        color: "$textColorLight",
      },
    },
  },
});

export default Text;
