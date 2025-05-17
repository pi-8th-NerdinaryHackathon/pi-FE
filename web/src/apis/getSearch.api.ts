import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";
import { generateApiPath } from "@/utils/generateApiPath";

export const getSearchProduct = (search: string) => {
  const response = baseAPI.get(
    generateApiPath(API_DOMAINS.GET_SEARCH_BY_TEXT, { search }),
  );
  return response;
};
