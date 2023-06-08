import { useState } from "react";
import { Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../Shared/Navbar/Logo";
import AdminOptions from "./AdminOptions";
import InstructorOptions from "./InstructorOptions";
import UserOptions from "./UserOptions";


const Sidebar = () => {
    const {user} = useAuth();
    const [isActive, setActive] = useState('false')
    return (
        <div>
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div className='w-full hidden md:flex py-2 justify-center items-center  mx-auto'>
                        <Logo />
                    </div>
                    <div className='flex flex-col items-center mt-6 -mx-2'>
                        <Link to='/dashboard'>
                            <img
                                className='object-cover w-24 h-24 mx-2 rounded-full'
                                src={user?.photoURL}
                                alt='avatar'
                                referrerPolicy='no-referrer'
                            />
                        </Link>
                        <Link to='/dashboard'>
                            <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                {user?.displayName}
                            </h4>
                        </Link>
                        <Link to='/dashboard'>
                            <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                {user?.email}
                            </p>
                        </Link>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <AdminOptions></AdminOptions>
                        <InstructorOptions></InstructorOptions>
                        <UserOptions></UserOptions>
                    </div>
                </div>
                
            </div>
        </div>
            );
};

            export default Sidebar;