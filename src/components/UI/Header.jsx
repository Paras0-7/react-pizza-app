import { Link } from "react-router-dom";
import { SearchOrder } from "../Order/SearchOrder";

export const Header = function () {
  return (
    <header>
      <Link to="/">Pizza</Link>
      <SearchOrder />
      <p>Paras</p>
    </header>
  );
};
