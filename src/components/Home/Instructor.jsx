import Container from "../Shared/Container";
import Title from "../Title/Title";


const Instructor = () => {
    return (
        <Container>
            <div className="my-[200px]">

                <Title heading="Our Instructors" subHeading="Our Popular Instructors"></Title>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ">
                    <div className="card w-[350px] h-[350px] bg-base-100 shadow-xl relative overflow-hidden">
                        <figure>
                            <img  src="https://img.freepik.com/free-photo/young-african-american-jazz-musician-playing-saxophone_155003-26233.jpg?w=740&t=st=1688084864~exp=1688085464~hmac=777cf717ef51879227159385d0773b80b4277194680c1f2e2c875d84b3f2c071" alt="Instructor" className="transition-opacity duration-300 opacity-100 hover:opacity-0" />
                        </figure>
                        <div className="card-body bg-black text-white transition-opacity duration-300 opacity-0 hover:opacity-50 absolute inset-0 flex flex-col justify-center items-center">
                            <h2 className="card-title text-xl">Shoes!</h2>
                            <p className="t mb-4">If a dog chews shoes, whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[350px] h-[350px] bg-base-100 shadow-xl relative overflow-hidden">
                        <figure>
                            <img  src="https://img.freepik.com/free-photo/young-african-american-jazz-musician-playing-saxophone_155003-26233.jpg?w=740&t=st=1688084864~exp=1688085464~hmac=777cf717ef51879227159385d0773b80b4277194680c1f2e2c875d84b3f2c071" alt="Instructor" className="transition-opacity duration-300 opacity-100 hover:opacity-0" />
                        </figure>
                        <div className="card-body bg-black text-white transition-opacity duration-300 opacity-0 hover:opacity-50 absolute inset-0 flex flex-col justify-center items-center">
                            <h2 className="card-title text-xl">Shoes!</h2>
                            <p className="t mb-4">If a dog chews shoes, whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[350px] h-[350px] bg-base-100 shadow-xl relative overflow-hidden">
                        <figure>
                            <img  src="https://img.freepik.com/free-photo/young-african-american-jazz-musician-playing-saxophone_155003-26233.jpg?w=740&t=st=1688084864~exp=1688085464~hmac=777cf717ef51879227159385d0773b80b4277194680c1f2e2c875d84b3f2c071" alt="Instructor" className="transition-opacity duration-300 opacity-100 hover:opacity-0" />
                        </figure>
                        <div className="card-body bg-black text-white transition-opacity duration-300 opacity-0 hover:opacity-50 absolute inset-0 flex flex-col justify-center items-center">
                            <h2 className="card-title text-xl">Shoes!</h2>
                            <p className="t mb-4">If a dog chews shoes, whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div >
        </Container>
    );
};

export default Instructor;