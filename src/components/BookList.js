import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { isLigthTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLigthTheme ? light : dark;
  return books.length ? (
    <div className="book-list" style={{ color: theme.syntax }}>
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read, Hello free time</div>
  );
};

export default BookList;
