import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { isLigthTheme, light, dark } = useContext(ThemeContext);
  const theme = isLigthTheme ? light : dark;
  return (
    <li
      key={book.id}
      style={{ background: theme.ui }}
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
