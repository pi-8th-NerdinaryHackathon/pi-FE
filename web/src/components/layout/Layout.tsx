import type { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <div className="layout">{children}</div>;
};
