interface LeftIconProps {
  width?: string;
  height?: string;
}

function LeftIcon(props: LeftIconProps) {
  const { width = "32", height = "32" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 24L12 16L20 8"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L12 16L20 8"
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LeftIcon;
