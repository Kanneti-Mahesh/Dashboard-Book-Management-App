import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AddBookModal from "./components/AddBookModal"
// import EditBookModal from "./components/EditBookModal"
// import DeleteBookModal from "./components/DeleteBookModal"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {


  return (
    <>

      <div>
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBookModal />} />
          {/* <Route path='/edit/:id' element={<EditBookModal />} />
          <Route path='/delete/:id' element={<DeleteBookModal />} /> */}
        </Routes>
      </div>

    </>
  )
}

export default App
