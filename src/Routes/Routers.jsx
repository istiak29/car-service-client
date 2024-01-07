import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Root/Main";
import About from "../Pages/About";
import UserLogIn from "../Pages/User/UserLogIn";
import UserSignUp from "../Pages/User/UserSignUp";
import UserMainLayout from "../Pages/User/UserMainLayout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/about',
                element: <About></About>
            },

            
        ],
    },

    {
        path: '/',
        element: <UserMainLayout></UserMainLayout>,
        children: [
            {
                path: '/login',
                element: <UserLogIn></UserLogIn>
            },

            {
                path: '/signup',
                element: <UserSignUp></UserSignUp>
            }
        ]
    }
]);

export default router;