import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import User from "./User.jsx";
import UserDetails from "./UserDetails/UserDetails.jsx";
import Posts from "./Post/Posts.jsx";
import PostOutput from "./Post/PostOutput.jsx";
import ErrorePage from "./ErrorePage/ErrorePage.jsx";
import Meals from "./MealDb/Meals.jsx";
import MealOutput from "./MealDb/MealOutput.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <ErrorePage></ErrorePage>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },







      {
        path: "/user",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>,
      },
      {
        path: "/userDetails/:userId",
        // loader:({params})=> console.log(params),
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostOutput></PostOutput>,
      },
      {
        path :"/meals",
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=b'),
        element:<Meals></Meals>,
      },
      {
        path:"/meal/:mealId",
        loader: (params)=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <MealOutput></MealOutput>,
      },





      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
