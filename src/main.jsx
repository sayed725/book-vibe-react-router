import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBord from './components/DashBord/DashBord.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ListedBooks from './ListtedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PagesChart from './components/PagesChart/PagesChart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path:'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path:'/pagesRead',
        element:<PagesChart></PagesChart>,
      },
      {
        path:'dashbord',
        element:<DashBord></DashBord>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
