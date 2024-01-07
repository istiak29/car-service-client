import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";

const UserMainLayout = () => {
    return (
        <div>
            <UserNav></UserNav>
            <Outlet></Outlet>
        </div>
    );
};

export default UserMainLayout;