import login from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';


const UserLogIn = () => {

    const { signInWithEmailPass } = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    const navigate = useNavigate()

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailPass(email, password)
            .then(result => {
                console.log("This is from log in 29:", result.user);
                const userEmail = result.user.email
                const user = { userEmail };

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                    .then(result => {
                        console.log(result.data)
                        
                        if (result.data.successToken) {
                            navigate(location?.state ? location.state.path : '/')
                        }
                })


                

                // if i send state as an object then I should use state.path or if I send location directly in the state then I can use like bellow
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => { console.error(error) });
    };

    return (
        <div>


            <div className="flex items-center justify-evenly flex-col lg:flex-row ">
                <div className=" w-1/4">
                    <img src={login} alt="" />
                </div>


                <div className="rounded-md w-2/4  border px-5">
                    <form onSubmit={handleLogIn} className="card-body">
                        <h1 className="text-4xl font-bold text-center mt-14 mb-8">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="your email" className="input input-bordered caret-blue-500 focus:caret-indigo-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-orange-500 hover:bg-[#FF3811]">Sign In</button>
                        </div>

                    </form>

                    <div className='text-center mt-7'>
                        <p className='font-medium text-sm '>Or sign in with</p>
                        <div className='flex gap-4 items-center justify-center text-4xl mt-7'>
                            <div className='text-blue-600'><FaFacebook></FaFacebook></div>
                            <FcGoogle></FcGoogle>
                            <FaGithub></FaGithub>
                        </div>
                        <p className='text-lg mt-12 mb-16'>Have an account? <Link state={{ path: location.state?.path }}  to={'/signup'} className='font-semibold text-rose-600 '>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogIn;