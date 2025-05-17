import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getServerHelath = () => {
  const response = baseAPI.get(API_DOMAINS.GET_HELATH);
  return response;
};
