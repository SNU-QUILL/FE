import sharedConfig from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  ...sharedConfig,
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;
