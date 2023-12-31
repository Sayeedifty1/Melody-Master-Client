import { motion } from "framer-motion"

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postSelectedClasses } from "../../API/class";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import Container from "../Shared/Container";
import Title from "../Title/Title";


const PopularClass = () => {
    const navigate = useNavigate();
    const { user, role } = useAuth();
    const [classes] = useClasses();
    console.log(classes)

    const handleSelected = (classItem) => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "You need to login first",
                text: "Please login first",

            });
            navigate('/login')
            return;
        }
        const userEmail = user.email;
        classItem.userEmail = userEmail;
        classItem.userName = user.displayName;
        classItem.classId = classItem._id;
        delete classItem._id;
        postSelectedClasses(classItem)

            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Class selected ",
                    });
                }

            });

    }
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
    return (
        <Container>
            <Title subHeading="Our Classes" heading="Most Popular Classes" />
            <motion.div
                className="flex items-center justify-center -mx-4 lg:pl-8"
                initial="initial"
                whileInView="animate"
                variants={PreviewAnimation}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up" >
                    {classes.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`card lg:card-side shadow-xl  ${classItem.availableSeats === 0 ? 'bg-red-400 dark:bg-red-400' : 'bg-red-50 dark:bg-zinc-400'
                                }`}
                        >
                            <figure>
                                <img className="w-[400px] h-[400px]" src={classItem.image} alt="Class" />
                            </figure>
                            <div className="card-body">
                                <h2 className="cnard-title text-3xl font-serif text-blue-950">{classItem.name}</h2>
                                <p className="text-2xl font-semibold">Instructor: {classItem.instructor}</p>
                                <p>Enrolled Students: {classItem.numberOfStudents}</p>
                                <p>Available Seats: {classItem.availableSeats}</p>
                                <p>Price: ${classItem.price}</p>
                                <div className="card-actions justify-end">
                                    {classItem.availableSeats === 0 || role === "instructor" || role === "admin" ? (
                                        <button className="btn" disabled>
                                            Select
                                        </button>
                                    ) : (
                                        <button onClick={() => handleSelected(classItem)} className="button-74">Select</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Container>

    );
};

export default PopularClass;

{/* <button className="btn btn-primary" disabled={classItem.availableSeats === 0 || classItem.status !== 'approved'}>
                                    {classItem.availableSeats === 0 ? 'Sold Out' : 'Select'}
                                </button> */}



