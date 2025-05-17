// src/hooks/useSearchProducts.ts
import { getSearchProduct } from "@/apis/getSearch.api";
import { useCallback, useState } from "react";

export function useSearchProducts() {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  /** 검색 실행 */
  const fetch = useCallback(async (keyword: string) => {
    try {
      setLoading(true);
      const res = await getSearchProduct(keyword);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetch };
}
