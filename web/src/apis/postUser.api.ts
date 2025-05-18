// src/apis/imageSearch.ts
import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const postUser = (uuid: string) => {
  const response = baseAPI.post(API_DOMAINS.POST_USER_LOGIN);
  return response;
};
