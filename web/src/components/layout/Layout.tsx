import { NavLink, Outlet } from "react-router-dom";
import { path } from "@/routes/path";
import SearchIcon from "@/assets/icons/search";
export function Layout() {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="flex min-h-screen w-full max-w-[768px] flex-col bg-white shadow-lg">
        <header className="bg-white shadow-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <NavLink
              to={path.base}
              className={({ isActive }) =>
                isActive ? "text-primary-600" : "text-gray-600"
              }
              end
            >
              <h1 className="text-primary-600 text-lg font-bold">MyStore</h1>
            </NavLink>

            <SearchIcon />
          </div>
        </header>

        <main className="flex-1 px-4 py-6">
          <Outlet />
        </main>

        <footer className="bg-white py-4 shadow-inner">
          <div className="px-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
