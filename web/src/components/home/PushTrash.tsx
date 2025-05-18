// src/components/drawer/QuantityDrawer.tsx
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Minus, Plus } from "lucide-react";
import { CommonButton } from "../common/CommonButton";
import febric from "@/assets/icons/febric.svg";

interface PushTrashDrawerProps {
  triggerLabel?: string;
  title?: string;
  description?: string;
  defaultQty?: number;
  onSubmit?: (qty: number) => void;
  onClick: () => void;
  category: string;
}

function PushTrashDrawer(props: PushTrashDrawerProps) {
  const {
    title = "제품 보내기",
    description = "보내고 싶은 제품의 수량을 선택해주세요.",
    defaultQty = 1,
    onSubmit,
    // onClick,
    // category,
  } = props;

  const [qty, setQty] = useState(defaultQty);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => Math.max(1, q - 1));

  const handleSubmit = () => {
    onSubmit?.(qty);
  };

  return (
    <Drawer>
      {/* --- Drawer 열기 버튼 --- */}
      <DrawerTrigger asChild>
        <button
          onClick={() => props.onClick()}
          className="flex w-full items-center justify-center gap-2.5 rounded-[1.875rem] bg-white py-3 shadow-[1px_3px_17px_rgba(17,24,39,0.08)]"
        >
          <img src={febric} className="aspect-square h-9 w-9 object-fill" />
          <p className="text-[18px] font-semibold">
            모은 {props.category} 보내러가기
          </p>
        </button>
      </DrawerTrigger>

      {/* --- Drawer 본문 --- */}
      <DrawerContent className="flex flex-col gap-4 rounded-t-3xl pb-6">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        {/* 수량 선택 컨트롤 */}
        <div className="mx-auto flex items-center gap-6">
          <CommonButton onClick={decrease}>
            <Minus className="size-4" />
          </CommonButton>

          <span className="w-10 text-center text-lg font-semibold">{qty}</span>

          <CommonButton onClick={increase}>
            <Plus className="size-4" />
          </CommonButton>
        </div>

        {/* 보내기 / 취소 */}
        <DrawerFooter>
          <DrawerClose asChild>
            <CommonButton>취소</CommonButton>
          </DrawerClose>
          <CommonButton
            className="bg-[#0DAA80] text-white"
            onClick={handleSubmit}
          >
            보내기
          </CommonButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default PushTrashDrawer;
