import { formatWithCommas } from "@/utils/formatWithCommas";
import { Ticket } from "lucide-react";

interface ProgressBarProps {
  min: number;
  max: number;
  price: number;
}

export function ProgressBarBox(props: ProgressBarProps) {
  const { min, max, price } = props;
  const percent = min === 0 ? 0 : Math.max(15, (min / max) * 100).toFixed(0);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-xs font-medium text-gray-500">
        <p className="text-[13px]">내가 모은 플라스틱</p>
        <p className="text[13px]">필요한 플라스틱</p>
      </div>

      <div className="w-full">
        <div className="relative h-7 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-[#39BF9B]"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-1 mb-3 flex justify-between text-sm font-semibold text-gray-600">
          <span className="text-[#39BF9B]">{formatWithCommas(min)}</span>
          <span>{formatWithCommas(max)}</span>
        </div>
        {min !== 0 && (
          <div className="flex items-center gap-1">
            <Ticket width={20} height={20} />
            <p className="text-[15px] font-semibold">
              지금까지 {formatWithCommas(((min / max) * price).toFixed(0))}원
              할인받을 수 있어요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
