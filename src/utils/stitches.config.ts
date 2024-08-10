import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    background: {},
    colors: {
      backgroundSecundary: "rgb(242, 242, 242)",
      backgroundPrimary: "rgb(15, 174, 121)",
      textColorDisabled: "rgb(178, 178, 178)",
      textColorLight: "rgba(153, 153, 153, 1)",
      white: "rgb(255,255,255)",
    },
    fontSizes: {
      large: "18px",
      medium: "16px",
      small: "12px",
    },
  },
});
