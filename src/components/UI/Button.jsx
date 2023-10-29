/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Button = function ({ children, disabled, to, type, onClick }) {
  const base = `inline-block rounded-full text-sm bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 
  transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300
  focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-600`;
  const styles = {
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs px-4 py-2 md:px-5 md:py-2.5",
    secondary: `inline-block text-sm rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 
    transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200
    focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`,
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
