import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getAllCategory = () => {
  const response = baseAPI.get(API_DOMAINS.GET_CATEGORY);
  return response;
};
