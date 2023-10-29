import { CreateUser } from "../User/CreateUser";

import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";
export const Home = function () {
  const dispatch = useDispatch();

  dispatch(userActions.setName(""));

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};
