import next from "@/assets/icons/next.svg";
import { formatWithCommas } from "@/utils/formatWithCommas";
import { Category } from "../common/Category";
import { ProgressBarBox } from "../common/ProgressBar";
export interface WishListProps {
  category: string[];
  company: string;
  title: string;
  price: number;
  min: number;
  max: number;
}
function WishList(props: WishListProps) {
  const percent = (props?.min / props?.max) * 100;
  return (
    <div className="flex h-fit flex-col overflow-hidden rounded-[1.25rem] bg-white">
      <div className="flex w-full justify-between bg-[#0DAA80] px-[1.125rem] py-3">
        <h1 className="text-[1.125rem] font-bold text-white">
          나의 위시리스트
        </h1>
        <button className="rounded-xl border border-white px-5 py-0.5 text-xs font-medium text-white">
          삭제
        </button>
      </div>
      <div className="flex w-full gap-3 border-b border-b-[#eaeaea] p-4">
        <img className="aspect-square h-34 w-34 rounded-2xl object-fill" />
        <div className="flex flex-col">
          <div className="flex h-fit w-full flex-wrap gap-1">
            <Category
              content="플라스틱"
              className="bg-slate-100 text-gray-500"
            />
            <Category
              content="공예제품"
              className="bg-slate-100 text-gray-500"
            />
          </div>
          <h3 className="mt-2 text-xs font-medium text-gray-500">
            No plastic sunday
          </h3>
          <div className="flex gap-0.5">
            <h2 className="text-xl font-bold text-gray-900">럭키 키링</h2>
            <button>
              <img src={next} className="h-6 w-6 text-slate-200" />
            </button>
          </div>
          <h3 className="text-[1.125rem] font-semibold text-gray-900">
            {formatWithCommas(13000)}원
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <ProgressBarBox min={props.min} max={props.max} />

        <div className="flex">
          <button>
            <img src={next} className="h-4 w-4 text-gray-500" />
          </button>
          <h2 className="text-sm font-semibold text-gray-900">
            지금까지{" "}
            {formatWithCommas(((props?.price * percent) / 100).toFixed(0))}원
            할인받을 수 있어요.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WishList;
