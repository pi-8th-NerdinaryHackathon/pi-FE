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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 24L12 16L20 8"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LeftIcon;
