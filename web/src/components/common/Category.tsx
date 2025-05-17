export interface CategroyProps {
  content: string;
  className?: string;
}
export const Category = ({ content, className }: CategroyProps) => {
  return (
    <div
      className={`flex items-center rounded-xl px-[9px] py-[1px] text-xs font-semibold ${className}`}
    >
      {content}
    </div>
  );
};
