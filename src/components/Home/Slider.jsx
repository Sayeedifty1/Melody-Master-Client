
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
                    <img className='md:w-full max-h-screen mx-auto ' src='https://img.freepik.com/free-photo/music-background-with-headphones-female-hands-recorder-laptop-guitar_169016-16392.jpg?w=1380&t=st=1686078935~exp=1686079535~hmac=f0b4b7849828d53e6cb1fc76dca06315ba7166a911415051c26f4600efbe056a' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                        <button className="button-74" role="button">Explore More</button>
                            
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img className='md:w-full max-h-screen mx-auto' src='https://img.freepik.com/free-photo/full-shot-man-playing-guitar_23-2149849410.jpg?w=1380&t=st=1686079534~exp=1686080134~hmac=e04e21e383ac62f6f1cb1fcb3cde1def0b28d73409d1ab32d654ba5012275bfb' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                        <button className="button-74" role="button">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img className='md:w-full max-h-screen mx-auto' src='https://img.freepik.com/free-photo/table-musician_23-2147670596.jpg?w=1380&t=st=1686079567~exp=1686080167~hmac=aa9d139da0121277cc57609f574fff4b33c92424d8af29e442563d90124edd4f' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl md:text-4xl font-bold mb-4 font-outline-2 ">Music For All</h1>
                        <p className="text-lg mb-4 font-outline-1">Music is everybody’s possession. It’s only publishers who think that people own it.</p>
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