import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setupWorker } from "msw/browser";
import { handlers } from "@/mocks/handler.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalConfirm from "@/components/global/GlobalConfirm.tsx";
import GlobalDialog from "@/components/global/GlobalDialog.tsx";

const worker = setupWorker();
if (import.meta.env.MODE === "development") {
  worker.use(...handlers);
  worker.start({ onUnhandledRequest: "bypass" });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
      <GlobalConfirm />
      <GlobalDialog />
    </QueryClientProvider>
  </React.StrictMode>
);
