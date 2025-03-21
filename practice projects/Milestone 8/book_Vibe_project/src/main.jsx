import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import './app.css';
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import ListedBook from './Components/ListedBook';
import PageToRead from './Components/PageToRead';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path :"listed-book",
        element: <ListedBook></ListedBook> ,
      },
      {
        path :"pageto-read",
        element:<PageToRead></PageToRead> ,
      },
      {
        path :"dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
