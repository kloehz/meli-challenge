import { IGetItems } from "../types/getItems";
import { axiosClient } from "./axiosClient";

export const apiGetItems = (query: string) => {
  return axiosClient.get<IGetItems>(`/items?q=:${query}`);
}
