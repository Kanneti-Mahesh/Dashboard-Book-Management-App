import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import BookTable from "../components/BookTable";
import AddBookModal from "../components/AddBookModal";
import EditBookModal from "../components/EditBookModal";
import DeleteBookModal from "../components/DeleteBookModal";

//Spinner
import Spinner from "../components/Spinner";
import { BookContext } from '../context/BookContext'


export default function Home() {
    const [isAddOpen, setAddOpen] = useState(false);
    const [editBook, setEditBook] = useState(null);
    const [deleteBook, setDeleteBook] = useState(null);

    const { loading } = useContext(BookContext);

    return (
        <div className="p-4">
            {loading ? <Spinner /> : (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold"> Books Management Dashboard Application </h1>
                        <Link to='/add'><button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setAddOpen(true)}>+ Add Book</button></Link>
                    </div>

                    <BookTable onEdit={(b) => setEditBook(b)} onDelete={(b) => setDeleteBook(b)} />


                    {isAddOpen && <AddBookModal onClose={() => setAddOpen(false)} />}
                    {editBook && <EditBookModal book={editBook} onClose={() => setEditBook(null)} />}
                    {deleteBook && <DeleteBookModal book={deleteBook} onClose={() => setDeleteBook(null)} />}
                </>
            )}
        </div>

    );
}