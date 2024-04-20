import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!
console.log(process.env)
export const useGetLeaguesQuery = ({
  pageSize = 5,
  page = 1,
  country,
  year,
}: {
  pageSize?: number;
  page?: number;
  country?: string;
  year?: number;
}) => {
  return useQuery({
    queryKey: ["getLeagues"],
    queryFn: () =>
      axios
        .request({
          method: "GET",
          url: "/leagues",
          params: {
            pageSize,
            country,
            page,
            year,
          },
        })
        .then((resp) => {
          return resp?.data?.data as [];
        })
        .catch((err) => {
          return err?.response?.data?.data ?? [];
        }),
  });
};
export const useGetFixturesQuery = ({
  pageSize = 5,
  country,
  status,
  fromDate,
  toDate,
}: {
  pageSize?: number;
  country?: string;
  status?: string;
  fromDate?: string;
  toDate?: string;
}) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    getNextPageParam: (lastPage: any[], pages) =>
      {
        
        return lastPage.length > 0 ? (pages.length - 1) + 1 : undefined;
      },
    queryKey: ["getFixtures",{status,country,fromDate,toDate}],
    queryFn: ({ pageParam }) =>
      {       
        return axios
          .request({
            method: "GET",
            url: "/fixtures",
            params: {
              pageSize,
              page: pageParam,
              country,
              status,
              fromDate,
              toDate,
            },
          })
          .then((resp) => resp?.data?.data as [])
          .catch((err) => {
            console.log(err?.response);
            return err?.response?.data?.data ?? [];
          });
      },
  });
};
