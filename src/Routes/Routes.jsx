import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";  
import RecipeDetail from "../Layouts/RecipeDetail";
import Recipe from "../Pages/Recipe/Recipe/Recipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }            
        ]
    }, 
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Register></Register>
    },
    {
        path: '/about-us',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/recipe',
        element:  <RecipeDetail></RecipeDetail>,
        children: [
            {
                path: ':id',
                element: <Recipe></Recipe>
            }
        ]

    }  
    
])

export default router;