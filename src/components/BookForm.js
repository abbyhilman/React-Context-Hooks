import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const { isLigthTheme, light, dark } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const theme = isLigthTheme ? light : dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ background: theme.form }}
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={{ background: theme.form }}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
