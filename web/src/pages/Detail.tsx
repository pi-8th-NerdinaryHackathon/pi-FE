import { CommonButton } from "@/components/common/CommonButton";
import { Category } from "@/components/common/Category";
import { PostModal } from "@/components/common/PostModal";
import { ProgressBarBox } from "@/components/common/ProgressBarBox";
import BackHeader from "@/components/layout/BackHeader";
import { REQUIRED_TRASH } from "@/constants/required-trash";
import { formatWithCommas } from "@/utils/formatWithCommas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
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
        <RequiredTrash trash={"iron"} count={1000} />

        <div className="flex w-full gap-[12px] py-[10px]">
          <CommonButton className="bg-black text-white">
            위시리스트 담기
          </CommonButton>
          <CommonButton
            className="bg-[#0DAA80] text-white"
            onClick={() => setShowModal(true)}
          >
            구매하기
          </CommonButton>
        </div>
      </div>

      {showModal && (
        <PostModal
          onClose={() => {
            setShowModal(false);
            navigate("/");
          }}
        />
      )}
    </div>
  );
}

interface RequiredTrashProps {
  trash: string;
  count: number;
}

function RequiredTrash(props: RequiredTrashProps) {
  const { trash = "iron", count } = props;

  const trashData = REQUIRED_TRASH.find((item) => item.key === trash) ?? null;

  return (
    <div className="mt-4 flex flex-col items-center gap-3 rounded-[12px] bg-slate-200 px-4 py-5">
      <img width={36} height={36} />
      <div className="mb-1 flex gap-1 text-[18px] font-semibold">
        <p className="">재활용할</p>
        <Category
          content={trashData?.name ?? ""}
          className="bg-slate-700 px-[9px] text-white"
        />
        <p>{formatWithCommas(count)}개가 필요해요.</p>
      </div>

      <div className="flex w-full flex-col items-center gap-[10px] rounded-[12px] bg-white py-4">
        <p className="text-[15px] font-medium">깨끗한 철 제품을 모아주세요!</p>

        <ul className="list-inside list-disc text-center text-[#6B7280]">
          {trashData?.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
