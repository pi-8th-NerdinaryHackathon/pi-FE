import PushTrashDrawer from "@/components/home/PushTrash";
import TotalCategory from "@/components/home/TotalCategory";
import MainHeader from "@/components/layout/MainHeader";
import PhotoIcon from "@/assets/icons/photo";
import { useEffect, useRef, useState } from "react";
import AddWishList from "@/components/home/AddWishList";
import type { WishListProps } from "@/components/home/WIshList";
import WishList from "@/components/home/WIshList";

//헤이든
import { useCategories } from "@/hooks/useCategories";
import { postSearchByImage } from "@/apis/postSearchByImage";
import { useNavigate } from "react-router-dom";

//글렌
import { getAllCategory } from "@/apis/getAllCategory.api";
export interface Category {
  id: number;
  name: string;
}

export interface RawCategoryList {
  categories: Category[];
}


function parseCategories(raw: RawCategoryList): TotalCategoryItem[] {
  return raw.categories.map(({ id, name }) => ({
    category: name,
    // 클릭 핸들러는 여기서 정의
    onClick: () => (window.location.href = `category/${id}`),
  }));
}
function Home() {
// 헤이든
  const { data, loading, error } = useCategories();
  const navigate = useNavigate();

// 글렌
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

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
      const { data } = await postSearchByImage(formData);
      navigate("/search", { state: { data } });
    } catch (err) {
      console.error("이미지 업로드 실패 ❌", err);
    } finally {
      e.target.value = "";
    }
  };

  const pushDummy: PushTrashProps = {
    onClick: () => {},
    category: "플라스틱",
  };

<!-- //글렌 -->
  useEffect(() => {
    async function fetchCategory() {
      setIsCategoryLoading(true);
      try {
        const rawList = await getAllCategory();
        setCategoryList(parseCategories(rawList.data));
      } catch (error) {
        console.error("카테고리 불러오기 실패", error);
      } finally {
        setIsCategoryLoading(false);
      }
    }

    fetchCategory();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 bg-slate-100 px-[18px]">
      <MainHeader />
      {dummy.min !== null ? (
        <>
          <WishList {...dummy} />
          <PushTrashDrawer {...pushDummy} />
        </>
      ) : (
        <AddWishList />
      )}

<!-- //헤이든 -->
      {!error && !loading && <TotalCategory items={data} />}
<!-- //글렌 -->
      <TotalCategory items={categoryList} />


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
