import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getCategoriesApi = () => {
  const response = baseAPI.get(API_DOMAINS.GET_CATEGORIES);
  return response;
};
