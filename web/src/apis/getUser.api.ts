import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getUser = () => {
  const response = baseAPI.get(API_DOMAINS.GET_USER);
  return response;
};
