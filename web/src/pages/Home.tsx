import WishList, { type WishListProps } from "@/components/home/WIshList";
import PushTrash, { type PushTrashProps } from "@/components/home/PushTrash";
import TotalCategory, {
  type TotalCategoryItem,
} from "@/components/home/TotalCategory";

function Home() {
  const dummy: WishListProps = {
    category: ["플라스틱", "유리병"],
    company: "No plastic sunday",
    title: "럭키 키링",
    price: 13000,
    min: 100,
    max: 1980,
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
    <div className="flex h-full w-full flex-col gap-4">
      <WishList {...dummy} />
      <PushTrash {...pushDummy} />
      <TotalCategory items={totalDummy} />
    </div>
  );
}
export default Home;
