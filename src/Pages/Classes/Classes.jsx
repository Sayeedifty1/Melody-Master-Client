import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postSelectedClasses } from "../../API/class";
import Container from "../../components/Shared/Container";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    const {user} = useAuth();


    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/approved-classes`)
            .then((res) => res.json())
            .then((data) => {
                setApprovedClasses(data);
            });
    }, []);


    const handleSelected = (classItem) => {
        const userEmail = user.email;
        classItem.userEmail = userEmail;
        classItem.userName = user.displayName;
        classItem.classId = classItem._id;
        delete classItem._id;
        console.log(classItem)
        postSelectedClasses(classItem)
            
            .then((data) => {
                if(data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Class selected ",
                    });
                }
                        
            });

    }

    return (
        <div className="py-[133px]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {approvedClasses.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`card lg:card-side ${classItem.availableSeats === 0 ? "bg-red-400" : "bg-red-50"
                                } shadow-xl`}
                        >
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-serif text-blue-950">
                                    {classItem.name}
                                </h2>
                                <p className="text-2xl font-semibold">Instructor: {classItem.instructor}</p>
                                <p>Available Seats: {classItem.availableSeats}</p>
                                <p>Price: ${classItem.price}</p>
                                <div className="card-actions justify-start">
                                    {classItem.availableSeats === 0 ? (
                                        <button className="btn" disabled>
                                            Select
                                        </button>
                                    ) : (
                                        <button onClick={()=>handleSelected(classItem)} className="button-74">Select</button>
                                    )}
                                </div>
                            </div>
                            <figure>
                                <img
                                    className="w-[400px] h-[400px]"
                                    src={classItem.image}
                                    alt="Class"
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Classes;
