import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import fg from "fast-glob";

// const entryPoints = [
//   "src/components/*/index.ts",
//   "src/hooks/*/index.ts",
//   "src/lib/*/index.ts",
//   "src/index.ts",
// ];

// const files = fg.sync(entryPoints, { absolute: true });

// const entities = files.map(file => {
//   const [key] = file.match(/(?<=src\/).*$/) || [];
//   const keyWithoutExt = key!.replace(/\.[^.]*&/, "");

//   return [keyWithoutExt, file];
// });

// const entries = Object.fromEntries(entities);

export default defineConfig({
  plugins: [react()],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // lib: {
    //   entry: entries,
    // },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
