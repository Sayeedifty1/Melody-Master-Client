import { Link } from "react-router-dom";


const NavLinks = () => {
    return (

        <div className='flex flex-row items-center justify-between'>
            <Link><div className='dark font-semibold px-6'>Home</div></Link>
            <Link><div className='font-semibold px-6'>Instructor</div></Link>
            <Link><div className=' font-semibold px-6'>Classes</div></Link>
            <Link><div className=' font-semibold px-6'>Dashboard</div></Link>
            
        </div>


    );
};

export default NavLinks;