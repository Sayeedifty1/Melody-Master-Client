
import Instructor from '../components/Home/Instructor';
import Offer from '../components/Home/Offer';
import PopularClass from '../components/Home/PopularClass';
import MySlider from '../components/Home/Slider';

const HomeLayout = () => {
  return (
    <>
      <div className="relative max-h-screen">
        <MySlider />

        <div className="absolute bottom-[-300px] left-0 w-full">
          <Offer />
        </div>
      </div>

      <div className="mt-[400px]">
        <PopularClass />
      </div>
      <Instructor></Instructor>
    </>
  );
};

export default HomeLayout;
