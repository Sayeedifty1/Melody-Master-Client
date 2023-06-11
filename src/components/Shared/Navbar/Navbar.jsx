import Container from "../Container";
import Logo from "./Logo";
import NavLinks from "./Navlinks";


const Navbar = () => {
    return (
        <div className='fixed w-full  opacity-60 bg-black z-10 '>
            <div className="text-white">
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <div><Logo></Logo></div>
                       <div><NavLinks></NavLinks></div>
                       
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Navbar;