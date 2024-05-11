import { IAuth } from "@/interfaces/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
  auth: IAuth;
  setAuth: (auth: IAuth) => void;
}

export const AuthStore = create<IAuthStore>()(
  persist(
    set => ({
      auth: { name: "", role: "", token: "" },
      setAuth: (auth: IAuth) => set({ auth }),
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) }
  )
);
