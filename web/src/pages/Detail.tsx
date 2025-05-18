// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { CommonButton } from "@/components/common/CommonButton";
import { Category } from "@/components/common/Category";
import { PostModal } from "@/components/common/PostModal";
import { ProgressBarBox } from "@/components/common/ProgressBarBox";
import BackHeader from "@/components/layout/BackHeader";
import { REQUIRED_TRASH } from "@/constants/required-trash";
import { formatWithCommas } from "@/utils/formatWithCommas";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "@/apis/getProductDetail.api";
import { postWishList } from "@/apis/postWishList.api";
import { path } from "@/routes/path";
import iron from "@/assets/icons/iron.svg";
import glass from "@/assets/icons/glass.svg";
import plastic from "@/assets/icons/plastic.svg";
import wood from "@/assets/icons/wood.svg";
import febric from "@/assets/icons/febric.svg";

const keys = ["iron", "glass", "plactic", "wood", "febric"];

function Detail() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState();
  const handlePost = () => {
    postWishList({ productId: parseInt(id), count: 0 }).then(() => {
      navigate(path.base);
    });
  };
  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const rawList = await getProductDetail(id); // RawProduct[]
        setProducts(rawList.data.product);
      } catch (error) {
        console.error("상품 불러오기 실패", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []); // 빈 배열: 마운트 시 한 번만 실행
  return (
    <div>
      <BackHeader
        title={
          <p className="py-[19px] text-[18px] font-bold">{products?.name}</p>
        }
      />

      <div className="flex flex-col gap-5 px-[18px]">
        <img
          src={products?.image}
          className="mb-1 aspect-square w-full rounded-2xl"
        />

        <div>
          <div className="mb-2 flex gap-1">
            <Category
              content={products?.category?.name}
              className="bg-slate-100 text-gray-500"
            />
            <Category
              content={products?.material}
              className="bg-slate-100 text-gray-500"
            />
          </div>

          <div className="ml-1">
            <p className="mb-1 text-[13px] font-medium text-[#6B7280]">
              {products?.company?.name}
            </p>
            <p className="mb-5 text-[20px] font-bold">{products?.name}</p>
            <p className="text-[24px] font-semibold">
              {formatWithCommas(products?.price)}원
            </p>
          </div>
        </div>

        <hr />

        <ProgressBarBox min={0} max={1300} price={0} />
        <RequiredTrash trash={products?.material} count={1000} />

        <div className="flex w-full gap-[12px] py-[10px]">
          <CommonButton
            onClick={() => handlePost()}
            className="bg-black text-white"
          >
            위시리스트 담기
          </CommonButton>
          <CommonButton
            className="bg-[#0DAA80] text-white"
            onClick={() => setShowModal(true)}
          >
            구매하기
          </CommonButton>
        </div>
      </div>

      {showModal && (
        <PostModal
          onClose={() => {
            setShowModal(false);
            navigate("/");
          }}
        />
      )}
    </div>
  );
}

interface RequiredTrashProps {
  trash: string;
  count: number;
}

function RequiredTrash(props: RequiredTrashProps) {
  const { trash = "iron", count } = props;

  const trashData = REQUIRED_TRASH.find((item) => item.name === trash) ?? null;

  return (
    <div className="mt-4 flex flex-col items-center gap-3 rounded-[12px] bg-slate-200 px-4 py-5">
      <img src={febric} width={36} height={36} />
      <div className="mb-1 flex gap-1 text-[18px] font-semibold">
        <p className="">재활용할</p>
        <Category
          content={trashData?.name ?? ""}
          className="bg-slate-700 px-[9px] text-white"
        />
        <p>{formatWithCommas(count)}개가 필요해요.</p>
      </div>

      <div className="flex w-full flex-col items-center gap-[10px] rounded-[12px] bg-white py-4">
        <p className="text-[15px] font-medium">
          깨끗한 재활용 제품을 모아주세요!
        </p>

        <ul className="list-inside list-disc text-center text-[#6B7280]">
          {trashData?.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
