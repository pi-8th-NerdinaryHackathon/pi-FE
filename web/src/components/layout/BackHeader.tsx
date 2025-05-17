import LeftIcon from "@/assets/icons/left";
import { path } from "@/routes/path";
import type React from "react";

import { Link } from "react-router-dom";

interface BackHeaderProps {
  title?: string | React.ReactNode;
  linkPath?: string;
  className?: string;
}

function BackHeader(props: BackHeaderProps) {
  const { title, linkPath = path.base } = props;

  return (
    <div className={`flex w-full items-center gap-2 px-4 ${props.className}`}>
      <Link to={linkPath}>
        <LeftIcon />
      </Link>

      {title}
    </div>
  );
}

export default BackHeader;
