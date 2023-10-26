/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchOrder = function () {
  // const [query, setQuery] = useState();
  const queryRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    const query = queryRef.current.value;
    if (!query) return;

    navigate(`/order/${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search order" ref={queryRef} />
    </form>
  );
};
