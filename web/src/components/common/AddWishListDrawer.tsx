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
import { CommonButton } from "./CommonButton";

interface QuantityDrawerProps {
  /* 드로어 버튼 라벨 (예: '장바구니 담기') */
  triggerLabel?: string;
  title?: string;
  description?: string;
  defaultQty?: number;
  onSubmit?: (qty: number) => void;
}

export default function QuantityDrawer({
  triggerLabel = "열기",
  title = "타이틀",
  description = "설명을 여기에 넣으세요.",
  defaultQty = 1,
  onSubmit,
}: QuantityDrawerProps) {
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
        <CommonButton>{triggerLabel}</CommonButton>
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
          <CommonButton onClick={handleSubmit}>보내기</CommonButton>
          <DrawerClose asChild>
            <CommonButton>취소</CommonButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
