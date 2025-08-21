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

export interface Blog {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: null;
  name: string;
}
