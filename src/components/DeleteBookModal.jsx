import { useContext } from "react";
import { Link } from 'react-router-dom'
import { BookContext } from "../context/BookContext";


export default function DeleteBookModal({ book, onClose }) {
  const { deleteBook } = useContext(BookContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-full max-w-sm text-center">
        <p>Are you sure you want to delete <b>{book?.title}</b>?</p>
        <div className="flex justify-center gap-3 mt-4">
          <Link to="/"><button className="px-3 py-1 border rounded cursor-pointer" onClick={onClose}>Cancel</button> </Link>
          <button onClick={() => { deleteBook(book.id); onClose(); }} className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}