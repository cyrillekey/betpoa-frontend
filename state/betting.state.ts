import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
interface BetMarket {
    fixtureId: number
    oddId: number
    homeTeam: string
    awayTeam: string
    odd: number
    market: string
    pick: string
}
interface RemoveBetItem {
    fixtureId: number
    oddId: number
}
interface BetStore {
    odds: BetMarket[]
    addOdd: (bet: BetMarket) => void
    removeOdd: (bet: RemoveBetItem) => void
    resetStore: () => void
}
export const useBettingStore = create(persist<BetStore>((set, get) => ({
    odds: [],
    addOdd(bet) {
        set((state) => {
            const odds = state.odds
            const location = odds.findIndex((a) => a?.fixtureId == bet?.fixtureId)
            if (location > -1) {
                const odd = odds[location]
                if (odd?.oddId == bet?.oddId) {
                    odds.splice(location, 1)
                } else {
                    odds.splice(location, 1, bet)
                }
            } else {
                odds.push(bet)
            }
            return ({ ...state, odds })
        })
    },
    removeOdd(bet) {
        set((state) => {
            const odds = state.odds
            const location = odds.findIndex((a) => a?.fixtureId == bet?.fixtureId)
            if (location > -1) {

                odds.splice(location, 1)

            }
            return ({ ...state, })
        })
    },
    resetStore() {
        set((state) => ({ ...state, odds: [] }))
    },
}), { name: 'bet-storage', storage: createJSONStorage(() => localStorage) }))