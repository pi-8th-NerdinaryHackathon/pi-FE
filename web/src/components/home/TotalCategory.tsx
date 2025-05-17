// TotalCategory.tsx
import type { CategoryProps } from "@/hooks/useCategories";
import { useNavigate } from "react-router-dom";

// ── 1. 아이콘 import (Vite/Webpack이 실제 URL로 바꿔줌) ──
import bagIcon from "@/assets/icons/bag.svg";
import furnitureIcon from "@/assets/icons/furniture.svg";
import craftIcon from "@/assets/icons/craft.svg";
import clothIcon from "@/assets/icons/cloth.svg";

interface TotalCategoryProps {
  items: CategoryProps[];
}

const categoryImageMap: Record<string, string> = {
  가방: bagIcon,
  가구: furnitureIcon,
  공예: craftIcon,
  의류: clothIcon,
};

function TotalCategory({ items }: TotalCategoryProps) {
  const navigate = useNavigate();

  return (
    <div className="mt-12 flex flex-col gap-5">
      <h1 className="text-xl font-bold text-gray-950">
        업사이클링 제품 카테고리
      </h1>

      <div className="flex h-fit w-full flex-wrap justify-between gap-y-2">
        {items?.map((item) => (
          <div
            key={item.id ?? item.name} // ← key 추가
            className="flex flex-col items-center gap-2"
          >
            <button onClick={() => navigate(`/category/${item.name}`)}>
              <img
                src={getCategoryImage(item.name)}
                alt={item.name}
                className="aspect-square h-20 w-20 rounded-2xl bg-white object-fill sm:h-30 sm:w-30"
              />
            </button>
            <p className="text-sm font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCategoryImage(name: string) {
  return categoryImageMap[name] ?? craftIcon;
}

export default TotalCategory;
