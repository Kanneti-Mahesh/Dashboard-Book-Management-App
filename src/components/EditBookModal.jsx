import { Formik, Form, Field } from "formik";
import React,{ useEffect } from "react";
import { useContext } from "react";
import * as Yup from "yup";
import { BookContext } from "../context/BookContext";



export default function EditBookModal({ book, onClose }) {
    const { updateBook } = useContext(BookContext);

    const validationSchema = Yup.object({
        title: Yup.string().required("Required"),
        author: Yup.string().required("Required"),
        genre: Yup.string().required("Required"),
        year: Yup.number().required("Required"),
        status: Yup.string().required("Required"),
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">Edit Book</h2>
                <Formik
                    initialValues={{
                        title: book?.title || "",
                        author: book?.author || "",
                        genre: book?.genre || "",
                        year: book?.year || "",
                        status: book?.status || "Available",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        updateBook(book.id, { ...values });
                        onClose();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col gap-3">
                            <Field name="title" placeholder="Title" className="border p-2 rounded" />
                            {errors.title && touched.title && (
                                <div className="text-red-500 text-sm">{errors.title}</div>
                            )}

                            <Field name="author" placeholder="Author" className="border p-2 rounded" />
                            {errors.author && touched.author && (
                                <div className="text-red-500 text-sm">{errors.author}</div>
                            )}

                            <Field name="genre" placeholder="Genre" className="border p-2 rounded" />
                            {errors.genre && touched.genre && (
                                <div className="text-red-500 text-sm">{errors.genre}</div>
                            )}

                            <Field
                                name="year"
                                placeholder="Year"
                                type="number"
                                className="border p-2 rounded"
                            />
                            {errors.year && touched.year && (
                                <div className="text-red-500 text-sm">{errors.year}</div>
                            )}

                            <Field as="select" name="status" className="border p-2 rounded">
                                <option value="Available">Available</option>
                                <option value="Issued">Issued</option>
                            </Field>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    className="px-3 py-1 border rounded cursor-pointer"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-1 bg-green-600 text-white rounded cursor-pointer"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
