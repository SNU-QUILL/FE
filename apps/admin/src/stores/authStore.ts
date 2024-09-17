import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
  accessToken?: string;
  refreshToken?: string;
  setAccessToken: (accessToken?: string) => void;
  setRefreshToken: (refreshToken?: string) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
  getName: () => string;
  getRole: () => string;
}

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      accessToken: undefined,
      refreshToken: undefined,
      setAccessToken: (token?: string) => set({ accessToken: token }),
      setRefreshToken: (token?: string) => set({ refreshToken: token }),
      isLoggedIn: () => !!get().refreshToken,
      logout: () => {
        set({ accessToken: undefined, refreshToken: undefined });
      },
      /** TODO: JWT에서 name, role 뽑아오기 */
      getName: () => "name",
      getRole: () => "role",
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) }
  )
);
