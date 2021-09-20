import { IGetItemDetail } from "../types/getItemDetail";
import { axiosConfig } from "./axiosConfig";

export const apiGetItemDetails = (id: string) => {
  return axiosConfig.get<IGetItemDetail>(`/items/${id}`);
}
