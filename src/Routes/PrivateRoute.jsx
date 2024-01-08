import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-2/3"></progress>
    }

    if (user?.email) {
        return children
    }


    return (
        <Navigate to={'/login'} replace></Navigate>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}