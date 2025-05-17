import SearchIcon from "@/assets/icons/search";
import { path } from "@/routes/path";
import { NavLink } from "react-router-dom";

function MainHeader() {
  return (
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

        <NavLink to={path.search}>
          <SearchIcon />
        </NavLink>
      </div>
    </header>
  );
}

export default MainHeader;
