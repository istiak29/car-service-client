import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import CheckOutTable from "./CheckOutTable";
import Swal from "sweetalert2";

const UserCheckOut = () => {

    const { user } = useContext(AuthContext);

    const [checkOuts, setCheckOuts] = useState([]);

    const url = `http://localhost:5000/checkouts?email=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(result => {
                console.log(result.data);
                setCheckOuts(result.data);
            })
            .catch(error => console.error(error))
    }, []);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/checkouts/${id}`)
                    .then(result => {
                        console.log(result.data)
                        
                        if (result.data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainings = checkOuts.filter(remaining => remaining._id !== id);
                            setCheckOuts(remainings)
                        }
                    })
                    .catch(error => console.error(error));

                
            }
        });
    }

    return (
        <div>
            <h2 className="font-bold text-3xl">You have: {checkOuts.length} services.</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>


                    {
                        checkOuts.map(checkOut =>
                            <CheckOutTable
                                key={checkOut._id}
                                checkOut={checkOut}
                                handleDelete={handleDelete}
                            ></CheckOutTable>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default UserCheckOut;