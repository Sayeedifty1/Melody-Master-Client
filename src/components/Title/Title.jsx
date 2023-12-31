
const Title = ({heading , subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-8 ">
            <h4 className="text-2xl font-bold text-red-800 mb-2 dark:text-red-500">{subHeading}</h4>
            <h3 className="text-3xl font-bold text-blue-950 border-y-4 py-4 dark:text-orange-600">{heading}</h3>
            <p className="dark:text-white">Bring your children to a trial lesson to find out how much they enjoy doing music or singing</p>
            
        </div>
    );
};

export default Title;