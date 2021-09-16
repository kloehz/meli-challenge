import { Products } from "../types/getItems";
import { axiosConfig } from "./axiosConfig";

export const apiGetItems = (query: string) => {
  return axiosConfig.get<Products>(`/sites/MLA/search?q=:${query}`);
}
