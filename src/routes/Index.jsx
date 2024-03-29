import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import { Navbar } from "../layout/Navbar";
import ShowBook from "../fetaures/books/ShowBook";
import AddBook from "../fetaures/books/AddBook";
import EditBook from "../fetaures/books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="show-book" element={<ShowBook />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="edit-book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
