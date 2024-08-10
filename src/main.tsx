import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils/global.styles.css";
import Page from "components/Page/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
