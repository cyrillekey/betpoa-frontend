export interface ApiResponse {
  id?: number;
  success: boolean;
  message: string;
}
export interface AuthResponse {
  id?: number;
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: number;
    phone: string;
    phoneValidated: string;
    profileId: number;
    role: string;
  };
}
