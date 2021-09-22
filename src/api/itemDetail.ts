import { IGetItemDetail } from "../types/getItemDetail";
import { axiosClient } from "./axiosClient";

export const apiGetItemDetails = (id: string) => {
  return axiosClient.get<IGetItemDetail>(`/items/${id}`);
}
