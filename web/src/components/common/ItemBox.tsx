import { formatWithCommas } from "@/utils/formatWithCommas";
import { Category } from "./Category";

export interface ItemBoxProps {
  img: string;
  category: string[];
  company: string;
  title: string;
  price: number;
  onClick: () => void;
}
function ItemBox(props: ItemBoxProps) {
  return (
    <div onClick={props.onClick} className="flex cursor-pointer flex-col gap-3">
      <img
        src={props.img}
        className="aspect-square h-44 w-44 rounded-2xl object-fill"
      />
      <div className="flex h-fit w-full flex-wrap gap-1">
        {props.category.map((item) => (
          <Category content={item} className="bg-slate-100 text-gray-500" />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xs font-medium text-gray-500">{props.company}</h3>
        <h2 className="text-[1.125rem] font-bold text-gray-900">
          {props.title}
        </h2>
        <h2 className="mt-2 text-base font-semibold text-gray-900">
          {formatWithCommas(props.price)}원
        </h2>
      </div>
    </div>
  );
}
export default ItemBox;
