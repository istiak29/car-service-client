import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Root/Main";
import UserLogIn from "../Pages/User/UserLogIn";
import UserSignUp from "../Pages/User/UserSignUp";
import UserMainLayout from "../Pages/User/UserMainLayout";
import ErrorPage from "./ErrorPage";
import ServiceDetail from "../Pages/Details/ServiceDetail";
import CheckOut from "../Pages/CheckOut/CheckOut";
// import ManageCheckOut from "../Pages/Checkout/ManageCheckOut";
import PrivateRoute from "./PrivateRoute";
import UserCheckOut from "../Pages/Checkout/UserCheckOut";

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
            },

            {
                path: '/chcekout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            // {
            //     path: '/managecheckout',
            //     element: <PrivateRoute>
            //         <ManageCheckOut></ManageCheckOut>
            //     </PrivateRoute>
            // },

            {
                path: '/usercheckout',
                element: <PrivateRoute>
                    <UserCheckOut></UserCheckOut>
                </PrivateRoute>
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