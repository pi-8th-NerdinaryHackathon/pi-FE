// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// src/pages/SearchPage.tsx
import { useEffect, useState } from "react";
import BackHeader from "@/components/layout/BackHeader";
import { SearchIcon } from "lucide-react";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { useDebounce } from "@/utils/useDebounce";
import ItemBox from "@/components/common/ItemBox";
import { useLocation, useNavigate } from "react-router-dom";
import { Category } from "@/components/common/Category";

function SearchPage() {
  const { state } = useLocation();

  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 300);
  const { data, loading, error, fetch } = useSearchProducts();

  useEffect(() => {
    if (debouncedKeyword.trim() !== "") {
      fetch(debouncedKeyword.trim());
    }
  }, [debouncedKeyword, fetch]);

  const navigate = useNavigate();

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
              placeholder="재활용할 물건을 입력하세요 (예시: 양말)"
            />
          </div>
        }
      />

      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-6">
        {state?.data?.label && (
          <Category
            className="bg-slate-700 text-white"
            content={state.data.label}
          />
        )}

        {data && data.length > 0 ? (
          <p>{`재활용 제품 총 ${data.length}개가 검색되었어요.`}</p>
        ) : state?.data?.products && state.data.products.length > 0 ? (
          <p>{`재활용 제품 총 ${state.data.products.length}개가 검색되었어요.`}</p>
        ) : (
          <p>재활용 제품이 검색되지 않았어요.</p>
        )}
      </div>

      <div className="px-4 py-6">
        {loading && <p className="text-center">불러오는 중...</p>}
        {error !== null && error !== undefined && (
          <p className="text-center text-red-500">문제가 발생했어요 🥲</p>
        )}
        {!loading && !error && data.length === 0 && keyword !== "" && (
          <p className="text-center text-gray-400">검색 결과가 없습니다.</p>
        )}
        <div className="grid h-fit w-full grid-cols-2 justify-items-center">
          {Array.isArray(state?.data?.products) &&
          state.data.products.length > 0 &&
          (!Array.isArray(data) || data.length === 0) ? (
            state.data.products.map((item) => (
              <ItemBox
                key={item.id}
                img={item.image}
                category={[item.category?.name ?? "기타"]}
                company={item.company?.name ?? "알 수 없음"}
                title={item.name}
                price={item.price}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
            ))
          ) : Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <ItemBox
                key={item.id}
                img={item.image}
                category={[item.category?.name ?? "기타"]}
                company={item.company?.name ?? "알 수 없음"}
                title={item.name}
                price={item.price}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
            ))
          ) : (
            <p className="col-span-2 text-gray-500">
              표시할 재활용 제품이 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
