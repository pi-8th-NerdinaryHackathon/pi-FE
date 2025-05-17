import type { ReactNode } from "react";
import ReactDom from "react-dom";
export const ModalPortal = ({ children }: { children: ReactNode }) => {
  const root = document.getElementById("modal-root") as HTMLElement;
  return ReactDom.createPortal(children, root);
};
