import { baseAPI } from "@/apis/instance";
import { API_DOMAINS } from "@/constants/api";

export const postWishList = ({
  productId,
  count,
}: {
  productId: number;
  count: number;
}) => {
  const response = baseAPI.post(API_DOMAINS.WISH_LIST, {
    productId: productId,
    count: count,
  });
  return response;
};
