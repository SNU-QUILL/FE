import sharedConfig from "@repo/ui/tailwind.config";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  ...sharedConfig,
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  plugins: [typography],
} satisfies Config;
