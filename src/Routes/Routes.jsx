import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../components/ErrorElement";
import Home from "../components/Home";
import ChefRecipes from "../components/ChefRecipes";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,//Main layout of the react application
        errorElement: <ErrorElement></ErrorElement>,
        children: ([
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-recipes-server-mahdi105.vercel.app/chefs')
            },
            {
                path: '/chef_recipes/:id',
                element: <ChefRecipes></ChefRecipes>
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
            }
        ])
    }
]); 

export default router;