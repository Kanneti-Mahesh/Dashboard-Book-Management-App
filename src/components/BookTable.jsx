import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Toaster } from 'react-hot-toast';

//Context
import { BookContext } from "../context/BookContext";



//List of Books Data...
const BookTable = ({ onEdit, onDelete }) => {
    const { bookData } = useContext(BookContext);

    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [page, setPage] = useState(1);
    const pageSize = 10;


    const genres = useMemo(() => {
        const g = new Set((bookData).map((b) => b.genre).filter(Boolean));
        return ["All", ...Array.from(g)];
    }, [bookData]);


    const statuses = ["All", "Available", "Issued"];


    const filteredBooks = useMemo(() => {
        return (bookData).filter((b) => {
            const matchesSearch =
                b.title.toLowerCase().includes(search.toLowerCase()) ||
                b.author.toLowerCase().includes(search.toLowerCase());
            const matchesGenre = selectedGenre === "All" || b.genre === selectedGenre;
            const matchesStatus = selectedStatus === "All" || b.status === selectedStatus;
            return matchesSearch && matchesGenre && matchesStatus;
        });
    }, [bookData, search, selectedGenre, selectedStatus]);


    const totalPages = Math.ceil(filteredBooks.length / pageSize);
    const currentBooks = filteredBooks.slice((page - 1) * pageSize, page * pageSize);

    return (
        <>
            <Toaster />

            <div>
                {/* Search + Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <input
                        className="border p-2 rounded w-full sm:w-1/3"
                        placeholder="Search by title or author..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />
                    <div className="flex gap-3">
                        <select
                            className="border p-2 rounded"
                            value={selectedGenre}
                            onChange={(e) => {
                                setSelectedGenre(e.target.value);
                                setPage(1);
                            }}
                        >
                            {genres.map((g, index) => (
                                <option key={index}>{g}</option>
                            ))}
                        </select>
                        <select
                            className="border p-2 rounded"
                            value={selectedStatus}
                            onChange={(e) => {
                                setSelectedStatus(e.target.value);
                                setPage(1);
                            }}
                        >
                            {statuses.map((s, index) => (
                                <option key={index}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Author</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">Year</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.length > 0 ? (
                            currentBooks.map((book, index) => (
                                <tr key={book.id}>
                                    <td className="border p-2">{book.title}</td>
                                    <td className="border p-2">{book.author}</td>
                                    <td className="border p-2">{book.genre}</td>
                                    <td className="border p-2">{book.year}</td>
                                    <td className="border p-2">{book.status}</td>
                                    <td className="border p-2 space-x-2">
                                        <button className="text-blue-600 cursor-pointer" onClick={() => { onEdit(book) }}>Edit</button>
                                        <button className="text-red-600 cursor-pointer" onClick={() => onDelete(book)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center p-4">No books found</td>
                            </tr>
                        )}
                    </tbody>
                </table>


                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                        <button
                            className="px-3 py-1 border rounded disabled:opacity-50"
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                        >
                            Prev
                        </button>
                        <span className="px-3 py-1">Page {page} of {totalPages}</span>
                        <button
                            className="px-3 py-1 border rounded disabled:opacity-50"
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

        </>
    );
};

export default BookTable;
