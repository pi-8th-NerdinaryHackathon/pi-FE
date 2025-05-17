import { useEffect } from "react";
import { ModalPortal } from "./ModalPortal";
import close from "@/assets/icons/x.svg";
import check from "@/assets/icons/check.svg";

export const PostModal = ({ onClose }: { onClose: () => void }) => {
  const content = "당신만의 업사이클링 제품이\n 배송될거에요!";
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalPortal>
      <div className="fixed top-0 left-0 z-[100] flex h-full min-h-dvh min-w-dvw items-center justify-center bg-[rgba(0,0,0,0.6)] px-6">
        <div className="relative h-fit w-full rounded-[0.75rem] bg-white px-5 py-[2.625rem]">
          <button onClick={() => onClose()} className="absolute top-5 right-5">
            <img src={close} className="h-6 w-6" />
          </button>
          <div className="mt-7 flex w-full flex-col items-center gap-5 border-b border-b-gray-200">
            <img src={check} className="h-9 w-9" />
            <h1 className="mb-8 text-xl font-bold text-gray-900">
              구매가 완료되었습니다.
            </h1>
          </div>
          <div className="relative mt-5 flex h-43 w-full flex-col items-center rounded-[.75rem] bg-slate-100 pt-8 pb-7">
            <div className="w-full px-10">
              <div className="relative flex h-5 w-full">
                {/* 1) 기본 가로 라인 */}
                <div className="absolute top-1/2 right-0 left-0 h-[2px] -translate-y-1/2 bg-slate-300" />
                <div className="absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#0DAA80] bg-white">
                  <p className="absolute top-1/2 left-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 truncate text-[13px] font-medium text-[#0DAA80]">
                    배송준비중
                  </p>
                </div>
                <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300">
                  <p className="absolute top-1/2 left-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 truncate text-[13px] font-semibold text-[#94A3B8]">
                    주문완료
                  </p>
                </div>
                <div className="absolute top-1/2 right-0 h-4 w-4 translate-y-1/2 rounded-full bg-slate-300">
                  <p className="absolute top-1/2 left-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 truncate text-[13px] font-medium text-[#94A3B8]">
                    배송완료
                  </p>
                </div>
              </div>
            </div>
            <h2 className="absolute bottom-0 left-1/2 line-clamp-2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[15px] font-semibold whitespace-pre-line text-gray-900">
              {content}
            </h2>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
