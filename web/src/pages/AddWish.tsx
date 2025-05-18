import BackHeader from "@/components/layout/BackHeader";
import ItemBox, { type ItemBoxProps } from "@/components/common/ItemBox";
import { getAllProduct } from "@/apis/getAllProduct.api";
import { useEffect, useState } from "react";

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
function AddWish() {
  const [, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ItemBoxProps[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const rawList = await getAllProduct(); // RawProduct[]
        const items = parseProducts(rawList); // ItemBoxProps[]
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
        title={"위시리스트 추가"}
        className="gap-2 border-b border-b-gray-200 p-[0.875rem] text-[1.125rem] font-bold"
      />
      <div className="flex w-full justify-center py-6 text-[15px] font-medium text-gray-900">
        제품을 선택해 위시리스트에 추가해보세요!
      </div>
      <div className="grid h-fit w-full grid-cols-2 justify-items-center">
        {products.map((item, index) => (
          <ItemBox key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
export default AddWish;
