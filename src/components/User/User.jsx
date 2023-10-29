import { useSelector } from "react-redux";

export const User = function () {
  const userName = useSelector((state) => state.user.userName);

  if (userName === "") return null;
  return (
    <div className="hidden text-sm font-semibold tracking-wide md:block">
      {userName}
    </div>
  );
};
