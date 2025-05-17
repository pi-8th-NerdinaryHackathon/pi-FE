// src/hooks/useCategories.ts
import { getCategoriesApi } from "@/apis/getAllCategories.api";
import { useEffect, useState } from "react";

export interface CategoryProps {
  id: number;
  name: string;
}

export function useCategories() {
  const [data, setData] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategoriesApi();
      setData(res.data?.categories);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { data, loading, error, refetch: fetchCategories };
}
