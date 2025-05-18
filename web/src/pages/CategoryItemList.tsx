import BackHeader from "@/components/layout/BackHeader";
import ItemBox, { type ItemBoxProps } from "@/components/common/ItemBox";
import { getCategoryProduct } from "@/apis/getCategoryProduct.api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface RawProduct {
  product: {
    id: number;
    name: string;
    detail: string;
    image: string;
    price: number;
    company: { id: number; name: string };
    category: { id: number; name: string };
  };
}
function parseProducts(rawList: any): ItemBoxProps[] {
  return rawList.data.map(({ product }: any) => ({
    img: product.image,
    category: [product.category.name], // 필요하다면 여러 개로 확장 가능
    company: product.company.name,
    title: product.name,
    price: product.price,
    onClick: () => (window.location.href = `/detail/${product.id}`),
  }));
}
function CatrgoryItemList() {
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ItemBoxProps[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const rawList = await getCategoryProduct(categoryId as any); // RawProduct[]
        const items = parseProducts(rawList as any); // ItemBoxProps[]
        setProducts(items);
      } catch (error) {
        console.error("상품 불러오기 실패", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []); // 빈 배열: 마운트 시 한 번만 실행

  return (
    <div className="flex h-full w-full flex-col">
      <BackHeader
        title={"카테고리 제품"}
        className="gap-2 border-b border-b-gray-200 p-[0.875rem] text-[1.125rem] font-bold"
      />
      <div className="flex w-full justify-center py-6 text-[15px] font-medium text-gray-900">
        카테고리 제품을 위시리스트에 추가해보세요!
      </div>
      <div className="grid h-fit w-full grid-cols-2 justify-items-center">
        {!isLoading &&
          products.map((item, index) => (
            <ItemBox
              key={`${item.title}-${index}`}
              {...item}
              isLoading={isLoading}
            />
          ))}
        {isLoading &&
          Array.from({ length: 4 }).map((_, idx) => (
            <ItemBox
              key={idx}
              isLoading
              img={""}
              category={[]}
              company={""}
              title={""}
              price={0}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
      </div>
    </div>
  );
}
export default CatrgoryItemList;
