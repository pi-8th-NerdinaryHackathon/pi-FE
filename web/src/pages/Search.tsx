// src/pages/SearchPage.tsx
import { useEffect, useState } from "react";
import BackHeader from "@/components/layout/BackHeader";
import { SearchIcon } from "lucide-react";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { useDebounce } from "@/utils/useDebounce";
import ItemBox from "@/components/common/ItemBox";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const { state } = useLocation();

  console.log(state);
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 300);
  const { data, loading, error, fetch } = useSearchProducts();

  useEffect(() => {
    if (debouncedKeyword.trim() !== "") {
      fetch(debouncedKeyword.trim());
    }
  }, [debouncedKeyword, fetch]);

  return (
    <div className="bg-white-100 h-full w-full pt-4">
      <BackHeader
        title={
          <div className="flex h-[52px] flex-1 items-center gap-2 rounded-2xl bg-slate-100 px-3 py-[10px]">
            <SearchIcon color="rgba(156, 163, 175, 1)" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 bg-transparent text-[16px] leading-[22px] focus:outline-none"
              placeholder="재활용할 물건을 입력하세요 (예시: 물통)"
            />
          </div>
        }
      />

      <div className="px-4 py-6">
        {loading && <p className="text-center">불러오는 중...</p>}
        {error !== null && error !== undefined && (
          <p className="text-center text-red-500">문제가 발생했어요 🥲</p>
        )}
        {!loading && !error && data.length === 0 && keyword !== "" && (
          <p className="text-center text-gray-400">검색 결과가 없습니다.</p>
        )}
        <div className="space-y-2">
          {data.map((item) => (
            <li key={item.id} className="rounded-lg bg-white p-4 shadow-sm">
              <ItemBox
                img={""}
                category={[]}
                company={""}
                title={""}
                price={0}
                onClick={() => {}}
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
