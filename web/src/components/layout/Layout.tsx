import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="flex min-h-screen w-full max-w-[768px] flex-col bg-white shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}
