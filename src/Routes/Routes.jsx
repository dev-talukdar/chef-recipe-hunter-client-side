import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";  
import RecipeDetail from "../Layouts/RecipeDetail";
import Recipe from "../Pages/Recipe/Recipe/Recipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side-dev-talukdar.vercel.app/chefD/${params.id}`)
            }           
        ]
    }, 
    {
        path: '/recipe',
        element:  <RecipeDetail></RecipeDetail>,
        children: [
            {
                path: '/recipe/:id',
                element:  <Recipe></Recipe>
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
    }
      
    
])

export default router;