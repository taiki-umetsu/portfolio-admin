import { AuthProvider } from "react-admin";
import { User } from "@/interfaces";

type SuccessResponse = {
  message: string;
};

type ErrorResponse = {
  error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

const signInUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/users/sign_in";

const authProvider: AuthProvider = {
  login: async (user: User) => {
    const request = new Request(signInUrl, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const response = await fetch(request);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }

    const data: ApiResponse = await response.json();
    if ("message" in data) {
      const jwt = response.headers.get("Authorization");
      if (jwt) {
        localStorage.setItem("jwt_token", jwt);
      } else {
        throw new Error("JWT token not found in the response headers");
      }
    } else {
      throw new Error(data.error);
    }
  },
  logout: () => {
    localStorage.removeItem("jwt_token");
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error.status === 401) {
      localStorage.removeItem("jwt_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("jwt_token") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
