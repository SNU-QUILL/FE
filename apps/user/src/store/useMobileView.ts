import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MobileViewState {
  isMobileView: boolean;
  setIsMobileView: (isMobile: boolean) => void;
}

const useMobileView = create<MobileViewState>()(
  persist(
    set => ({
      isMobileView: window.innerWidth <= 1280,
      setIsMobileView: (isMobile: boolean) => set({ isMobileView: isMobile }),
    }),
    {
      name: "mobile-view-storage",
    },
  ),
);

export default useMobileView;
