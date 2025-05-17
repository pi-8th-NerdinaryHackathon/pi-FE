import BackHeader from "@/components/layout/BackHeader";
import { SearchIcon } from "lucide-react";

function SearchPage() {
  return (
    <div className="h-full w-full bg-slate-100 pt-4">
      <BackHeader
        title={
          <div className="flex h-[60px] flex-1 items-center gap-2 rounded-2xl bg-white px-3 py-[10px]">
            <SearchIcon color="rgba(156, 163, 175, 1)" />
            <input
              className="flex-1 text-[15px] leading-[22px] focus:outline-none"
              placeholder={`재활용할 물건을 입력하세요 (예시: 물통)`}
            />
          </div>
        }
      />

      <div />
    </div>
  );
}

export default SearchPage;
