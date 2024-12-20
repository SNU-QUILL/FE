import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AppRouter from "./router/AppRouter.tsx";
import "./index.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const isMockingEnabled = import.meta.env.VITE_MSW_MOCKING === "true";

const queryClient = new QueryClient();

async function enableMocking() {
  if (!isMockingEnabled) return;

  const { worker } = await import("./mocks/browser");
  return worker.start({
    onUnhandledRequest: "bypass", // 모킹되지 않은 요청은 그대로 통과
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </HelmetProvider>
    </StrictMode>,
  );
});
