// src/hooks/useDebounce.ts
import { useEffect, useState } from "react";

/**
 * 값이 변한 뒤 delay(밀리초) 동안 추가 변화가 없을 때
 * 최종값을 반환하는 디바운스 훅
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler); // 값이 바뀌면 타이머 리셋
  }, [value, delay]);

  return debounced;
}
