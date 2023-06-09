import useInstructor from "../../hooks/useInstructor";
import Container from "../Shared/Container";
import Title from "../Title/Title";


const PopularInstructor = () => {
    const [instructors] = useInstructor();
    console.log(instructors)
    return (
        <Container>
            <div className="my-[200px]">

                <Title heading="Our Instructors" subHeading="Our Popular Instructors"></Title>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ">
                    {
                        instructors.map((instructor) => (
                            <div key={instructor._id} className="card w-[350px] h-[350px] bg-base-100 shadow-xl relative overflow-hidden">
                                <figure>
                                    <img  src={instructor.photoURL} alt="Instructor" className="transition-opacity duration-300 opacity-100 hover:opacity-0 h-[350px] w-[350px]" />
                                </figure>
                                <div className="card-body bg-black text-white transition-opacity duration-300 opacity-0 hover:opacity-50 absolute inset-0 flex flex-col justify-center items-center">
                                    <h2 className="card-title text-2xl">{instructor.name}</h2>
                                    <h2 className="card-title text-xl">Total class: {instructor.numberOfClasses}</h2>
                                    <hr />
                                    <h2 className="card-title text-xl">Classes Taken:</h2>
                                    <ul>
                                       <li>*{instructor.classes}</li>
                                    </ul> 
                                    <div className="card-actions justify-end">
                                        <button className="button-74">See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div >
        </Container>
    );
};

export default PopularInstructor;