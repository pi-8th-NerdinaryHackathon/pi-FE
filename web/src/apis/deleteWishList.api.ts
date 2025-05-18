import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const deleteWishList = () => {
  const response = baseAPI.delete(API_DOMAINS.WISH_LIST);
  return response;
};
