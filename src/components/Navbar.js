import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLigthTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext);
  const theme = isLigthTheme ? light : dark;
  return (
    <div
      style={{ background: theme.ui, color: theme.syntax }}
      className="navbar"
    >
      <h1>Reading List</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      {/* <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}
      <p>Currenly you have {books.length} books to geth thought...</p>
    </div>
  );
};

export default Navbar;
