// src/apis/imageSearch.ts
import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";
import { generateApiPath } from "@/utils/generateApiPath";

/** 사진으로 상품 검색 */
export const postSearchByImage = (formData: FormData) => {
  // 예: /v1/search/image
  const url = generateApiPath(API_DOMAINS.POST_SEARCH_BY_IMAGE, {});
  return baseAPI.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
