import next from "@/assets/icons/next.svg";
import { formatWithCommas } from "@/utils/formatWithCommas";
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
            <Category content="플라스틱" />
            <Category content="공예제품" />
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
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-medium text-gray-500">
            <p>내가 모은 플라스틱</p>
            <p>필요한 플라스틱</p>
          </div>
          <ProgressBar min={props.min} max={props.max} />
        </div>
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
const Category = ({ content }: { content: string }) => {
  return (
    <div className="rounded-xl bg-slate-100 px-2 py-1 text-xs font-semibold text-gray-500">
      {content}
    </div>
  );
};
interface ProgressBarProps {
  min: number;
  max: number;
}

const ProgressBar = ({ min, max }: ProgressBarProps) => {
  // 0~100 사이로 클램프
  const percent = Math.max(15, (min / max) * 100).toFixed(0);
  return (
    <div className="w-full">
      {/* 바 전체 컨테이너 */}
      <div className="relative h-7 w-full overflow-hidden rounded-full bg-slate-200">
        {/* 채워진 부분 */}
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[#39BF9B]"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* 아래 레이블: min / max */}
      <div className="mt-1 flex justify-between text-sm font-semibold text-gray-600">
        <span className="text-[#39BF9B]">{min.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default WishList;
