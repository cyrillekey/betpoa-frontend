import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface IAppState {
    sideBarColapsed: boolean
    betSlipColapsed: boolean
    toggleBetSlip: () => void
    toggleSideBar: () => void
    
}
export const useAppStateStore = create(persist<IAppState>((set)=>({
    betSlipColapsed: false,
    sideBarColapsed: false,
    toggleBetSlip () {
        return set((state)=>({...state,betSlipColapsed: !state.betSlipColapsed }))
    },
    toggleSideBar() {
        return set((state)=>({...state,sideBarColapsed: !state.sideBarColapsed}))
    },
}),{name:'app-state',storage: createJSONStorage(()=>localStorage)}))