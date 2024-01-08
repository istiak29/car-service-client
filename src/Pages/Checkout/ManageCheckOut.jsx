import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const ManageCheckOut = () => {

    const { user } = useContext(AuthContext);

    const [userCheckOut, setUserCheckOut] = useState([])

    const url = `http://localhost:5000/checkouts?email=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(result => {
                console.log(result.data);
                setUserCheckOut(result.data);
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h2 className="font-bold text-3xl">You have: { userCheckOut.length} services.</h2>
        </div>
    );
};

export default ManageCheckOut;