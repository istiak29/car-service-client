import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
// import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    
    // const navigate = useNavigate()

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location)
    // this will show the location where we was trying to navigate. location.pathname show the actual location.

    if (loading) {
        return <progress className="progress w-2/3"></progress>
    }

    if (user?.email) {
        return children
    }
    

    return(
        <Navigate state={{path: location.pathname}}  to={'/login'} replace></Navigate>
        // <Navigate state={location.pathname}  to={'/login'} replace></Navigate>
    )
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}

//<div>
//
// {
//     Swal.fire({
//         title: "You have to log in first.",
//         text: "Redirect to log in page",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // <Navigate to={'/login'} replace></Navigate>
//             navigate('/login')

//             // Swal.fire({
//             //     title: "Deleted!",
//             //     text: "Your file has been deleted.",
//             //     icon: "success"
//             // });
//         }
//     })
// }
// 
//</div >