export type TotalCategoryItem = {
  category: string;
  onClick: () => void;
};

interface TotalCategoryProps {
  items: TotalCategoryItem[];
}
function TotalCategory(props: TotalCategoryProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-gray-950">
        업사이클링 제품 카테고리
      </h1>
      <div className="flex h-fit w-full flex-wrap justify-between gap-y-2">
        {props?.items?.map((item) => (
          <div className="flex flex-col items-center gap-2">
            <button onClick={item.onClick}>
              <img className="aspect-square h-20 w-20 rounded-2xl bg-white object-fill" />
            </button>
            <p className="text-sm font-semibold text-gray-700">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalCategory;
