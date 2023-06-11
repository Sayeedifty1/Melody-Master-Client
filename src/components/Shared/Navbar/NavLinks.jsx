import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dropdown from "./DropDown";


const NavLinks = () => {
    const {user} = useAuth();

    return (

        <div className='flex flex-row items-center justify-center md:justify-between text-white  dark:text-yellow-600'>
            <Link><div className='hidden md:block dark font-semibold px-0 md:px-6'>Home</div></Link>
            <Link to="/instructors"><div className='font-semibold  px-0 md:px-6'>Instructor</div></Link>
            <Link to="/classes"><div className=' font-semibold px-6'>Classes</div></Link>
            {user &&
                <Link to={"/dashboard"}><div className=' font-semibold px-6'>Dashboard</div></Link>
                }
            <Dropdown></Dropdown>
        </div>


    );
};

export default NavLinks;