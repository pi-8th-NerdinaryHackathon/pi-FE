import PhotoIcon from "@/assets/icons/photo";
import MainHeader from "@/components/layout/MainHeader";

function DefaultPage() {
  return (
    <div>
      <MainHeader />

      <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-[30px] bg-black px-[28px] py-[14px] hover:cursor-pointer">
        <PhotoIcon />
        <p className="text-white">사진으로 검색하기</p>
        <input
          className="hidden h-20 w-20 rounded-2xl bg-amber-300"
          type="file"
          accept="image/*"
          capture="environment"
        />
      </div>
    </div>
  );
}

export default DefaultPage;
