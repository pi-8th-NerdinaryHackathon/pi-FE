interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CommonButton(props: ButtonProps) {
  const { children, className, onClick } = props;
  return (
    <button
      className={`w-full flex-1 rounded-[30px] py-[19px] hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
