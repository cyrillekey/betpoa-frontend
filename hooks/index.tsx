import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetLeaguesQuery = ({pageSize = 5,page = 1,country,year}:{pageSize?: number,page?: number,country?: string,year?: number}) => {
    
    return useQuery({
        queryKey: ['getLeagues'],
        queryFn: () => {
            return axios.request({
                method: 'GET',
                url: 'https://walrus-app-24qv2.ondigitalocean.app/leagues',                
                params:{
                    pageSize,
                    country,
                    page,year
                }
            }).then((resp)=>{                
                return resp?.data?.data as []
            }).catch((err)=>{                
                return err?.response?.data?.data ?? []
            })
        }
    })
}