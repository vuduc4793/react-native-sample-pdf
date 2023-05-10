import { StoreApi, create } from "zustand"
import { createJSONStorage, persist, StateStorage } from "zustand/middleware"
import { MMKV } from "react-native-mmkv"
import createAppSlice, { AppSlice } from "./app/AppSlice"
import createUserSlice, { UserSlice } from "./user/UserSlice"

const storage = new MMKV()

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value)
  },
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => {
    return storage.delete(name)
  },
}

export type StoreState = AppSlice & UserSlice
export type StoreSlice<T> = (set: StoreApi<StoreState>["setState"], get: StoreApi<StoreState>["getState"]) => T

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAppSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
)

export default useStore
