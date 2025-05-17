export function formatWithCommas(value: number | string): string {
  // 1) 문자열이면 우선 내부에 이미 있는 콤마 제거 후 숫자로 변환
  const num =
    typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;

  // 2) NaN 방어
  if (isNaN(num)) return "";

  // 3) Intl API 활용 (현대 브라우저/환경 권장)
  return num.toLocaleString("en-US");
}
