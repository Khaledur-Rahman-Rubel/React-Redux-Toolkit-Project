import { useState } from "react";
import styles from "./booksCSS/addBook.module.css";
import { useDispatch } from "react-redux";
import { addBook } from "./SliceBook";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addBookSubmitHandle = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-book", { replace: true });
  };

  return (
    <div>
      <h2 className={styles.h2}>Add Book</h2>
      <form onSubmit={addBookSubmitHandle} className={styles.form}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author :</label>
          <input
            type="text"
            id="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
