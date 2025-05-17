import { ProgressBar } from "./WishList";
import plus from "@/assets/icons/plus.svg";
import { path } from "@/routes/path";
import { formatWithCommas } from "@/utils/formatWithCommas";
import { useNavigate } from "react-router-dom";
function AddWishList() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(path.add);
      }}
      className="flex h-fit flex-col overflow-hidden rounded-[1.25rem] bg-white"
    >
      <div className="flex w-full justify-between bg-[#0DAA80] px-[1.125rem] py-3">
        <h1 className="text-[1.125rem] font-bold text-white">
          나의 위시리스트
        </h1>
        <button className="rounded-xl border border-white px-5 py-0.5 text-xs font-medium text-white">
          삭제
        </button>
      </div>
      <div className="flex w-full gap-3 border-b border-b-[#eaeaea] p-4">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-slate-200 pt-8 pb-9">
          <img src={plus} className="h-8 w-8" />
          <p className="text-[15px] font-semibold text-gray-900">
            위시리스트에 업사이클링 제품을 담아주세요
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-medium text-gray-500">
            <p>내가 모은 재료</p>
            <p>필요한 재료</p>
          </div>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
const ProgressBar = () => {
  return (
    <div className="w-full">
      {/* 바 전체 컨테이너 */}
      <div className="relative h-7 w-full overflow-hidden rounded-full bg-slate-200">
        {/* 채워진 부분 */}
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[#39BF9B]"
          style={{ width: `${0}%` }}
        />
      </div>

      {/* 아래 레이블: min / max */}
      <div className="mt-1 flex justify-between text-xs font-medium text-gray-500">
        <span className="text-[#39BF9B]">0</span>
        <span>{formatWithCommas(1000)}</span>
      </div>
    </div>
  );
};
export default AddWishList;
