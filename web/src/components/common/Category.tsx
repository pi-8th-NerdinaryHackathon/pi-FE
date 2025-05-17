export interface CategroyProps {
  content: string;
  className: string;
}
export const Category = ({ content, className }: CategroyProps) => {
  return (
    <div className={`rounded-xl px-2 py-1 text-xs font-semibold ${className}`}>
      {content}
    </div>
  );
};
