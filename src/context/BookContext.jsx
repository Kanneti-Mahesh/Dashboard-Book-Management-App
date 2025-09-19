import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast' //Toaster to notify

import axios from 'axios'

export const BookContext = createContext(); //Create Context


function BookContextProvider({ children }) {
    const [loading, setLoading] = useState(true); //<-- Loader/Spinner Bonus

    const baseURL = "http://localhost:5000/books";  //<-- JSON-Server API

    const [bookData, setBookData] = useState([
        // { id:1, title:'Demo Title', author:'Demo Author', genre:'Demo Genre', year:2023,status:"Available" } -> offline we can test
    ])


    // 1. Add Book
    const addBook = async (book) => {
        try {
            setLoading(true);
            const res = await axios.post(baseURL, book);
            setBookData((prev) => [...prev, res.data]);
            toast.success("Book Added Successfully");  //-> Toaster
        } catch (error) {
            console.error("Error adding book:", error);
            toast.error("Failed to add book!");
        } finally {
            setLoading(false);
        }
    };

    // 2. Delete Book
    const deleteBook = async (id) => {
        try {
            setLoading(true);
            console.log(id, ":ID")
            await axios.delete(`${baseURL}/${id}`);
            setBookData((prev) => prev.filter((item) => item.id !== id));
            toast.success("Deleted Book Successfully");  //-> Toaster
        } catch (error) {
            console.error("Error deleting book:", error);
            toast.error("Failed to delete book!");
        } finally {
            setLoading(false);
        }
    };

    // 3. Update Book
    const updateBook = async (id, updatedBook) => {
        try {
            setLoading(true);
            const res = await axios.put(`${baseURL}/${id}`, updatedBook);
            setBookData((prev) =>
                prev.map((item) => (item.id === id ? res.data : item))
            );
            toast.success("Book Updated Successfully");  //-> Toaster
        } catch (error) {
            console.error("Error updating book:", error);
            toast.error("Failed to update book!");
        } finally {
            setLoading(false);
        }
    };

    //4. GET/Fetch Book list
    const fetchBooks = async () => {
        try {
            setLoading(true);
            const res = await axios.get(baseURL);
            setBookData(res.data);
        } catch (error) {
            console.error("Error fetching books:", error);
            toast.error("Failed to load books!");  //-> Toaster
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <div>
            <BookContext.Provider value={{ bookData, loading, addBook, updateBook, deleteBook }}>
                {children}
            </BookContext.Provider>
        </div>
    )
}

export default BookContextProvider;
