import BackHeader from "@/components/layout/BackHeader";
import ItemBox, { type ItemBoxProps } from "@/components/common/ItemBox";
function AddWish() {
  const dummyItems: ItemBoxProps[] = [
    {
      img: "",
      category: ["플라스틱", "업사이클링"],
      company: "GreenCycle",
      title: "린넨 보틀백",
      price: 25000,
      onClick: () => console.log("린넨 보틀백 클릭"),
    },
    {
      img: "",
      category: ["유리병", "인테리어"],
      company: "GlassArt",
      title: "리사이클 글라스 캔들 홀더",
      price: 18000,
      onClick: () => console.log("캔들 홀더 클릭"),
    },
    {
      img: "",
      category: ["타이어", "가구"],
      company: "TireUp",
      title: "업사이클 타이어 의자",
      price: 42000,
      onClick: () => console.log("타이어 의자 클릭"),
    },
    {
      img: "",
      category: ["천", "패션"],
      company: "DenimStudio",
      title: "데님 패치워크 토트백",
      price: 32000,
      onClick: () => console.log("패치워크 토트백 클릭"),
    },
    {
      img: "",
      category: ["목재", "가구"],
      company: "WoodCraft",
      title: "우드 팔레트 커피 테이블",
      price: 68000,
      onClick: () => console.log("커피 테이블 클릭"),
    },
    {
      img: "",
      category: ["금속", "아트"],
      company: "MetalMaker",
      title: "업사이클 드럼통 플랜터",
      price: 29000,
      onClick: () => console.log("플랜터 클릭"),
    },
    {
      img: "",
      category: ["종이", "데코"],
      company: "PaperReborn",
      title: "페이퍼 모빌 장식",
      price: 15000,
      onClick: () => console.log("모빌 장식 클릭"),
    },
    {
      img: "",
      category: ["플라스틱", "키친"],
      company: "EcoKitchen",
      title: "리사이클 키친툴 세트",
      price: 23000,
      onClick: () => console.log("키친툴 세트 클릭"),
    },
    {
      img: "",
      category: ["천", "패션"],
      company: "UpcycleWear",
      title: "빈티지 티셔츠 업사이클",
      price: 21000,
      onClick: () => console.log("업사이클 티셔츠 클릭"),
    },
  ];
  return (
    <div className="flex h-full w-full flex-col">
      <BackHeader
        title={"위시리스트 추가"}
        className="gap-2 border-b border-b-gray-200 p-[0.875rem] text-[1.125rem] font-bold"
      />
      <div className="flex w-full justify-center py-6 text-[15px] font-medium text-gray-900">
        제품을 선택해 위시리스트에 추가해보세요!
      </div>
      <div className="grid h-fit w-full grid-cols-2 justify-items-center">
        {dummyItems.map((item) => (
          <ItemBox {...item} />
        ))}
      </div>
    </div>
  );
}
export default AddWish;
