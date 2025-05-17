export interface PushTrashProps {
  onClick: () => void;
  category: string;
}
function PushTrash(props: PushTrashProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className="flex w-full items-center justify-center gap-2.5 rounded-[1.875rem] bg-white py-3 shadow-[1px_3px_17px_rgba(17,24,39,0.08)]"
    >
      <img className="aspect-square h-9 w-9 object-fill" />
      <p>모은 {props.category} 보내러가기</p>
    </button>
  );
}

export default PushTrash;
