import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

interface IAuthStore {
  accessToken?: string;
  refreshToken?: string;
  setAccessToken: (accessToken?: string) => void;
  setRefreshToken: (refreshToken?: string) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
  getName: () => string;
  getRole: () => string;
  getId: () => number;
}

interface ITokenPayload {
  name: string;
  role: string;
  id: number;
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
      getName: () => {
        const token = get().accessToken;
        const decoded = jwtDecode<ITokenPayload>(token!);
        return decoded.name;
      },
      getRole: () => {
        const token = get().accessToken;
        const decoded = jwtDecode<ITokenPayload>(token!);
        return decoded.role;
      },
      getId: () => {
        const token = get().accessToken;
        const decoded = jwtDecode<ITokenPayload>(token!);
        return decoded.id;
      },
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) },
  ),
);
