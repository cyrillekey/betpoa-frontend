import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AuthResponse } from "./schema";

export const useSignInMutation = () =>
  useMutation({
    mutationKey: ["signIn"],
    mutationFn: async ({
      password,
      email,
    }: {
      password: string;
      email: string;
    }): Promise<AuthResponse> => {
      try {
        const config: AxiosRequestConfig = {
          method: "POST",
          url: "/user/login",
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          data: {
            password,
            phone: email,
          },
        };
        const response = await axios
          .request(config)
          .then((resp) => resp.data)
          .catch((err: AxiosError) => err.response?.data);
        return response;
      } catch (error) {
        return {
          success: false,
          id: 0,
          message: "Failed! Something went wrong please try again",
        };
      }
    },
  });
