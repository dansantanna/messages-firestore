import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
  resolve: {
    alias: [
      { find: "hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "utils", replacement: path.resolve(__dirname, "src/utils") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "services",
        replacement: path.resolve(__dirname, "src/services"),
      },
    ],
  },
});
