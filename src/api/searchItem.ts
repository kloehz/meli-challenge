import { IGetItems } from "../types/getItems";
import { axiosConfig } from "./axiosConfig";

export const apiGetItems = (query: string) => {
  return axiosConfig.get<IGetItems>(`/items?q=:${query}`);
}
