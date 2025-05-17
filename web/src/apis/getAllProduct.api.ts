import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getAllProduct = () => {
  const response = baseAPI.get(API_DOMAINS.GET_ALL_PRODUCT);
  return response;
};
