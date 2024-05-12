import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
  token?: string;
  setToken: (token: string) => void;
  isLoggedIn: () => boolean;
  getName: () => string;
  getRole: () => string;
}

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      token: undefined,
      setToken: (token: string) => set({ token }),
      isLoggedIn: () => !!get().token,
      /** JWT에서 name, role 뽑아오기 */
      getName: () => "name",
      getRole: () => "role",
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) }
  )
);
