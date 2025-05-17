import WishList, { type WishListProps } from "@/components/home/WIshList";
import PushTrash, { type PushTrashProps } from "@/components/home/PushTrash";
import TotalCategory, {
  type TotalCategoryItem,
} from "@/components/home/TotalCategory";
import MainHeader from "@/components/layout/MainHeader";
import PhotoIcon from "@/assets/icons/photo";
import { useRef } from "react";

function Home() {
  const dummy: WishListProps = {
    category: ["플라스틱", "유리병"],
    company: "No plastic sunday",
    title: "럭키 키링",
    price: 13000,
    min: 100,
    max: 1980,
  };

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

  const pushDummy: PushTrashProps = {
    onClick: () => console.log(12),
    category: "플라스틱",
  };
  const totalDummy: TotalCategoryItem[] = [
    {
      onClick: () => console.log("가방 카테고리 클릭"),
      category: "가방",
    },
    {
      onClick: () => console.log("의류 카테고리 클릭"),
      category: "의류",
    },
    {
      onClick: () => console.log("가구 카테고리 클릭"),
      category: "가구",
    },
    {
      onClick: () => console.log("악세사리 카테고리 클릭"),
      category: "악세사리",
    },
    {
      onClick: () => console.log("신발 카테고리 클릭"),
      category: "신발",
    },
    {
      onClick: () => console.log("주방용품 카테고리 클릭"),
      category: "주방용품",
    },
    {
      onClick: () => console.log("문구류 카테고리 클릭"),
      category: "문구류",
    },
    {
      onClick: () => console.log("장난감 카테고리 클릭"),
      category: "장난감",
    },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-slate-100 px-[18px]">
      <MainHeader />
      <WishList {...dummy} />
      <PushTrash {...pushDummy} />
      <TotalCategory items={totalDummy} />
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
export default Home;
