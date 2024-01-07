import UserNav from '../Pages/User/UserNav';
import error from '../assets/images/Error/error.svg'

const ErrorPage = () => {
    return (
        <div>
            <UserNav></UserNav>
            <div className='flex justify-center '>
                <img src={error} alt="" />
            </div>
            
        </div>
    );
};

export default ErrorPage;