import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";

const Classes = () => {
    const [approvedClasses, setApprovedClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/approved-classes`)
            .then(res => res.json())
            .then(data => {
                setApprovedClasses(data);
            })
    }, [])


    return (
        <div className="py-[133px]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {approvedClasses.map((classItem) => (
                        <div key={classItem._id} className="card lg:card-side bg-red-50 shadow-xl">
                            
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-serif text-blue-950">
                                    {classItem.name}
                                </h2>
                                <p className="text-2xl font-semibold">Instructor: {classItem.instructor}</p>
                                <p>Available Seats: {classItem.availableSeats}</p>
                                <p>Price: ${classItem.price}</p>
                                <div className="card-actions justify-start">
                                    <button className="button-74" role="button">
                                        Select
                                    </button>
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

