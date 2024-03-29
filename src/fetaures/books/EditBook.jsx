import { useDispatch } from "react-redux";
import styles from "./booksCSS/editBooks.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateBook } from "./SliceBook";

const EditBook = () => {
  const location = useLocation();

  const id = location.state.id;
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateBookSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-book", { replace: true });
  };
  return (
    <div>
      <h2 className={styles.h2}>Edit Book</h2>
      <form onSubmit={updateBookSubmitHandle} className={styles.form}>
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
        <button type="submit">Update book</button>
      </form>
    </div>
  );
};

export default EditBook;
