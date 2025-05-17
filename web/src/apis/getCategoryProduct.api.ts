import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";
import { generateApiPath } from "@/utils/generateApiPath";

export const getCategoryProduct = ({ categoryId }) => {
  const response = baseAPI.get(
    generateApiPath(API_DOMAINS.GET_CATEGORY_PRODUCT, { categoryId }),
  );
  return response;
};
