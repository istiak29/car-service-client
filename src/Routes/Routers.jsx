import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Root/Main";
import UserLogIn from "../Pages/User/UserLogIn";
import UserSignUp from "../Pages/User/UserSignUp";
import UserMainLayout from "../Pages/User/UserMainLayout";
import ErrorPage from "./ErrorPage";
import ServiceDetail from "../Pages/Details/ServiceDetail";

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
                
            },

            {
                path: '/servicedetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
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