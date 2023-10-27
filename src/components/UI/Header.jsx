import { Link } from "react-router-dom";
import { SearchOrder } from "../Order/SearchOrder";
import { User } from "../User/User";

export const Header = function () {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        React Pizza Co
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};
