
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const MySlider = () => {
    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set the duration (in milliseconds) for auto slide
        arrows: false // Hide arrow buttons
    };


    return (
        <div className="header mb-20">
            <Slider {...sliderSettings}>
                <div className="relative">
                    <img className='md:w-full max-h-screen mx-auto ' src='https://i.ibb.co/Xj2pJXH/6849398-3425171.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className=" text-4xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="hidden md:block text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                        <button className="button-74" role="button">Explore More</button>
                            
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img className='md:w-full max-h-screen mx-auto' src='https://i.ibb.co/1Q6HCXj/SL-123119-26540-04.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="hidden md:block text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                        <button className="button-74" role="button">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img className='md:w-full max-h-screen mx-auto' src='https://i.ibb.co/YDCL4jn/SL-123119-26540-03.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="hidden md:block text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                        <button className="button-74" role="button">Explore More</button>
                        </Link>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default MySlider;