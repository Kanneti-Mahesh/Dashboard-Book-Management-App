import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { BookContext } from "../context/BookContext";
import { useNavigate } from 'react-router-dom'


function AddBookModal({ onClose }) {
  const { addBook } = useContext(BookContext);
  const navigate = useNavigate()

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
        <h2 className="text-lg font-bold mb-4">Add Book</h2>
        <Formik
          initialValues={{ title: "", author: "", genre: "", year: "", status: "Available" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            addBook(values);
            // onClose();
            navigate('/')
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-3">
              <Field name="title" placeholder="Title" className="border p-2 rounded" />
              {errors.title && touched.title && <div className="text-red-500 text-sm">{errors.title}</div>}


              <Field name="author" placeholder="Author" className="border p-2 rounded" />
              {errors.author && touched.author && <div className="text-red-500 text-sm">{errors.author}</div>}


              <Field name="genre" placeholder="Genre" className="border p-2 rounded" />
              {errors.genre && touched.genre && <div className="text-red-500 text-sm">{errors.genre}</div>}


              <Field name="year" placeholder="Year" type="number" className="border p-2 rounded" />
              {errors.year && touched.year && <div className="text-red-500 text-sm">{errors.year}</div>}


              <Field as="select" name="status" className="border p-2 rounded">
                <option value="Available">Available</option>
                <option value="Issued">Issued</option>
              </Field>


              <div className="flex justify-end gap-3">
                <Link to="/"> <button type="button" className="px-3 py-1 border rounded cursor-pointer">Cancel</button> </Link>
                <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer">Add</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}


export default AddBookModal;