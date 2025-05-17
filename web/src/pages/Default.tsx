import { useRef } from "react";

import PhotoIcon from "@/assets/icons/photo";
import MainHeader from "@/components/layout/MainHeader";

function DefaultPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // TODO: 검색 결과 처리
      // const { data } = await postSearchByImage(formData);
      // console.log("search result 🔍", data);
    } catch (err) {
      console.error("이미지 업로드 실패 ❌", err);
    } finally {
      e.target.value = "";
    }
  };

  return (
    <div>
      <MainHeader />

      <div
        className="fixed bottom-6 left-1/2 flex w-fit -translate-x-1/2 items-center gap-2 rounded-[30px] bg-black px-[28px] py-[14px] hover:cursor-pointer"
        onClick={handleDivClick}
      >
        <PhotoIcon width="24" height="24" />
        <p className="text-[15px] font-semibold text-white">
          사진으로 검색하기
        </p>

        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default DefaultPage;
