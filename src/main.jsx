import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookProvider from "./context/BookContext";
import { BrowserRouter } from "react-router-dom";

// import axios from 'axios'

//Axios Interceptors
// axios.defaults.baseURL = 'http://localhost:5000/books'
// axios.defaults.headers.common['Authorization'] = 'Bearer Token' //Axios headers Auth

// axios.interceptors.request.use((request)=>{  //Interceptor Request
//   return request;
// })
// axios.interceptors.response.use((response)=>{ //Interceptor Response
//   return response;
// })


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <App />
      </BookProvider>
    </BrowserRouter>
  </StrictMode>,
)
