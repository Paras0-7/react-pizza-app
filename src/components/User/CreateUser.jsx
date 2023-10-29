import { useState } from "react";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";

export function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userActions.setName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="md: mb-4 text-base text-sm text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="input mb-8 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}
