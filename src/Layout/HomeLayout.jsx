

import { Helmet } from 'react-helmet-async';
import Offer from '../components/Home/Offer';
import PopularClass from '../components/Home/PopularClass';
import PopularInstructor from '../components/Home/PopularInstructor';
import Show from '../components/Home/Show';
import MySlider from '../components/Home/Slider';

const HomeLayout = () => {
  return (
    <div className="dark:bg-slate-700">
      <Helmet>
                <title>Melody Master | Home</title>
            </Helmet>
      <div className="relative max-h-screen " >
        <MySlider />

        <div className="md:absolute bottom-[-300px] left-0 w-full ">
          <Offer />
        </div>
      </div>

      <div className="mt-[400px]" >
        <PopularClass />
      </div>
      <PopularInstructor></PopularInstructor>
      <Show></Show>
    </div>
  );
};

export default HomeLayout;
