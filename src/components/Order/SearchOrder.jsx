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
      <input
        type="text"
        placeholder="Search order #"
        ref={queryRef}
        className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300
        placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};
