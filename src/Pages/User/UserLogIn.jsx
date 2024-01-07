import login from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import  { AuthContext } from '../../Providers/AuthProvider';


const UserLogIn = () => {

    const { signInWithEmailPass } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailPass(email, password)
            .then(result => { console.log(result) })
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
                            <input type="email" name='name' placeholder="your email" className="input input-bordered caret-blue-500 focus:caret-indigo-500" required />
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
                        <p className='text-lg mt-12 mb-16'>Have an account? <Link to={'/signup'} className='font-semibold text-rose-600 '>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogIn;