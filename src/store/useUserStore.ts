import { IUserData } from "@/types/users";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user: IUserData;
  authUser: boolean;
}

interface Action {
  setAccessToken: (access_token: string) => void;
  setExpiresIn: (expires_in: number) => void;
  setRefreshToken: (refresh_token: string) => void;
  setUser: (user: IUserData) => void;
  setAuthUser: (authUser: boolean) => void;
}

export const useUserStore = create<Store & Action>(
  persist(
    devtools((set) => ({
      token_type: "",
      access_token: "",
      expires_in: 0,
      refresh_token: "",
      user: {
        id: 0,
        full_name: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        address: "",
        dob: "",
        email: "",
        email_verified_at: 0,
        gender: "",
        img_url: "",
        marital_status: "",
        phone: "",
        role: "",
        role_id: 0,
        status: 0,
        created_at: "",
      },
      authUser: false,
      setAccessToken: (access_token) => set({ access_token }),
      setExpiresIn: (expires_in) => set({ expires_in }),
      setRefreshToken: (refresh_token) => set({ refresh_token }),
      setUser: (user) => set({ user }),
      setAuthUser: (authUser) => set({ authUser }),
    })),
    {
      name: "CD-User",
    },
  ) as StateCreator<Store & Action, [], []>,
);
