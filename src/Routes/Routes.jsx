import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../components/ErrorElement";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import About from "../components/About";
import ChefRecipes from "../components/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,//Main layout of the react application
        errorElement: <ErrorElement></ErrorElement>,
        children: ([
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/recipes/:id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`https://assignment-recipes-server-mahdi105.vercel.app/chef/recipes/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            }
        ])
    }
]); 

export default router;