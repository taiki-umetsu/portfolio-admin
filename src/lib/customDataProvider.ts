import { DataProvider } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1";

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const jwt = localStorage.getItem("jwt_token");
  if (jwt) {
    (options.headers as Headers).set("Authorization", `${jwt}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider: DataProvider = jsonServerProvider(apiUrl, httpClient);

export default dataProvider;
