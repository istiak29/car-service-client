import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CheckOut = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    const checkOut = useLoaderData();
    const { title, price, _id, img } = checkOut;
    // console.log("checkout", checkOut);

    const handleCheckOut = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            service_id: _id,
            img,
            customerName: name,
            phone,
            orderDate: date,
            serviceTitle: title,
            price,
            email,
            message,
        }

        console.log(order)

        axios.post('http://localhost:5000/checkouts', order, { withCredentials: true })
            .then(result => {
                console.log(result.data)
                Swal.fire({
                    title: "Your Order is Successfully Placed.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                        rgba(0,0,123,0.4)
                        url("")
                        left top
                        no-repeat
                        `
                });

                form.reset();

            })
            .catch(error => console.error(error))
    };

    return (
        <div>
            This is checkout Form: {title}, Price: {price}
            <div className="  bg-base-200">

                <form onSubmit={handleCheckOut} className="card-body">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="first name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Booking Date</span>
                            </label>
                            <input type="date" placeholder="last name" name="date" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" placeholder="your phone" name="phone" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="your email" className="input input-bordered" required />
                        </div>


                    </div>

                    <div>
                        <textarea name="message" placeholder="your message" id="" cols="50" rows="10" className="p-5 w-full rounded-lg  caret-orange-600">

                        </textarea>
                    </div>



                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-orange-500 hover:bg-orange-600">Order Confirm</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default CheckOut;