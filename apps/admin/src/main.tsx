import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { setupWorker } from "msw/browser";
import { handlers } from "@/shared/mocks/handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalConfirm from "@/app/modal/GlobalConfirm";
import GlobalDialog from "@/app/modal/GlobalDialog";
import { Toaster } from "@repo/ui";
import AppRouter from "@/app/routes/AppRouter";

const worker = setupWorker();
if (import.meta.env.MODE === "development") {
  // worker.use(...handlers);
  // worker.start({ onUnhandledRequest: "bypass" });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <AppRouter />
      <GlobalConfirm />
      <GlobalDialog />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
);
