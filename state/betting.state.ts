import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
interface BetMarket {
    fixtureId: number
    oddId: number
}
interface BetStore {
    odds: BetMarket []
    addOdd:(bet: BetMarket) => void
    removeOdd: (bet:BetMarket) => void
    resetStore: () => void
}
export const useBettingStore = create(persist<BetStore>((set, get) => ({
    odds: [],
    addOdd(bet) {
        set((state)=>{
            const odds = state.odds
            const location = odds.findIndex((a) => a?.fixtureId == bet?.fixtureId)
            if (location > -1) {
                const odd = odds[location]
                if (odd?.oddId == bet?.oddId) {
                    odds.splice(location,1)
                } else {
                odds.splice(location,1,bet)
                }
            } else {
                odds.push(bet)
            }
            return ({ ...state,odds })
        })
    },
    removeOdd(bet) {
        set((state)=>({...state}))
    },
    resetStore() {
        set((state)=>({...state,odds: []}))
    },
 }), { name: 'bet-storage', storage: createJSONStorage(() => localStorage) }))