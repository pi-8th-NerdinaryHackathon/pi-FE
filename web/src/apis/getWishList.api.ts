import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const getWishList = () => {
  const response = baseAPI.get(API_DOMAINS.WISH_LIST);
  return response;
};
