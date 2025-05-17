import { Category } from "@/components/common/Category";
import { ProgressBarBox } from "@/components/common/ProgressBarBox";
import BackHeader from "@/components/layout/BackHeader";
import { formatWithCommas } from "@/utils/formatWithCommas";

function Detail() {
  return (
    <div>
      <BackHeader
        title={<p className="py-[19px] text-[18px] font-bold">제품 상세</p>}
      />

      <div className="flex flex-col gap-5 px-[18px]">
        <img src="" className="mb-1 aspect-square w-full rounded-2xl" />

        <div>
          <div className="mb-2 flex gap-1">
            <Category
              content={"제품 상세"}
              className="bg-slate-100 text-gray-500"
            />
            <Category
              content={"제품 상세"}
              className="bg-slate-100 text-gray-500"
            />
          </div>

          <div className="ml-1">
            <p className="mb-1 text-[13px] font-medium text-[#6B7280]">
              No plastic sunday
            </p>
            <p className="mb-5 text-[20px] font-bold">럭키 키링</p>
            <p className="text-[24px] font-semibold">
              {formatWithCommas(10000)}원
            </p>
          </div>
        </div>

        <hr />

        <ProgressBarBox min={0} max={1300} price={0} />

        <div className="mt-4 flex flex-col items-center gap-3 rounded-[12px] bg-slate-200 px-4 py-5">
          <img width={36} height={36} />
          <div className="mb-1 flex gap-1 text-[18px] font-semibold">
            <p className="">재활용할</p>
            <Category
              content={"플라스틱"}
              className="bg-slate-700 text-white"
            />
            <p>{formatWithCommas(1000)}개가 필요해요.</p>
          </div>

          <div className="flex w-full flex-col items-center gap-[10px] rounded-[12px] bg-white py-4">
            <p className="text-[15px] font-medium">
              깨끗한 철 제품을 모아주세요!
            </p>

            <ul className="list-inside list-disc text-[#6B7280]">
              <li>페트병</li>
              <li>페트병</li>
              <li>페트병</li>
              <li>페트병</li>
              <li>페트병</li>
            </ul>
          </div>
        </div>

        <div className="flex w-full gap-[12px] py-[10px]">
          <Button text="위시리스트 담기" color="black" />
          <Button text="구매하기" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { text, color = "[#0DAA80]", onClick } = props;
  return (
    <button
      className={`flex-1 rounded-[30px] bg-${color} py-[19px] text-white hover:cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Detail;
