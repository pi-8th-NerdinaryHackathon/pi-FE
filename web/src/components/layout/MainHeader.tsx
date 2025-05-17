import SearchIcon from "@/assets/icons/search";
import { path } from "@/routes/path";
import { NavLink } from "react-router-dom";
import BN from "@/assets/icons/BN.svg";

function MainHeader() {
  return (
    <header>
      <div className="flex h-15 items-center justify-between px-4 py-2">
        <NavLink
          to={path.base}
          className={({ isActive }) =>
            isActive ? "text-primary-600" : "text-gray-600"
          }
          end
        >
          <img src={BN} />
        </NavLink>

        <NavLink to={path.search}>
          <SearchIcon />
        </NavLink>
      </div>
    </header>
  );
}

export default MainHeader;
