import usePopularInstructor from "../../hooks/usePopularInstructor";
import Container from "../Shared/Container";
import Title from "../Title/Title";
import { motion } from "framer-motion"


const PopularInstructor = () => {
    const PreviewAnimation = {
        initial: {
            y: 30,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.8,
            }
        }
    }
    const [instructors] = usePopularInstructor();
    console.log(instructors)
    return (

        <div className="my-[200px]">

            <Title heading="Our Instructors" subHeading="Our Popular Instructors"></Title>
            <Container>
                <motion.div
                    className="flex items-center justify-center -mx-4 lg:pl-8"
                    initial="initial"
                    whileInView="animate"
                    variants={PreviewAnimation}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ">
                        {
                            instructors.map((instructor, index) => (
                                <div key={index} className="card w-[350px] h-[350px] bg-base-100 shadow-xl relative overflow-hidden">
                                    <figure>
                                        <img src={instructor.photoURL} alt="Instructor" className="transition-opacity duration-300 opacity-100 hover:opacity-0 h-[350px] w-[350px]" />
                                    </figure>
                                    <div className="card-body bg-slate-700 text-white transition-opacity duration-300 opacity-0 hover:opacity-50 absolute inset-0 flex flex-col justify-center items-center">
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
                </motion.div>
            </Container>

        </div >

    );
};

export default PopularInstructor;