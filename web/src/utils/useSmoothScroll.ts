// useSmoothScroll.ts
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useSmoothScroll = (
  options: ScrollToOptions = { top: 0, behavior: "smooth" },
) => {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // 경로 변경시에만 작동
    if (prevPath.current !== pathname) {
      requestAnimationFrame(() => {
        window.scrollTo(options);
        prevPath.current = pathname;
      });
    }
  }, [pathname, options]);
};

export default useSmoothScroll;
