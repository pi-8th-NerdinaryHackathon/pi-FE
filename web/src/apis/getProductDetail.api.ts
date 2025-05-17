import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";
import { generateApiPath } from "@/utils/generateApiPath";

export const getProductDetail = (id: string) => {
  const response = baseAPI.get(
    generateApiPath(API_DOMAINS.GET_PRODUCT_DETAIL, { id }),
  );
  return response;
};
