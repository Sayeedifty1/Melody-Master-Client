import useClasses from "../../hooks/useClasses";
import Container from "../Shared/Container";
import Title from "../Title/Title";


const PopularClass = () => {

    const [classes] = useClasses();
    console.log(classes)

    return (
        <Container>
            <Title subHeading="Our Classes" heading="Most Popular Classes" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {classes.map((classItem) => (
                    <div
                        key={classItem._id}
                        className={`card lg:card-side shadow-xl ${classItem.availableSeats === 0 ? 'bg-red-400' : 'bg-red-50'
                            }`}
                    >
                        <figure>
                            <img className="w-[400px] h-[400px]" src={classItem.image} alt="Class" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-serif text-blue-950">{classItem.name}</h2>
                            <p className="text-2xl font-semibold">Instructor: {classItem.instructor}</p>
                            <p>Enrolled Students: {classItem.numberOfStudents}</p>
                            <p>Available Seats: {classItem.availableSeats}</p>
                            <p>Price: {classItem.price}</p>
                            <div className="card-actions justify-end">
                                <button className="button-74" role="button">
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>

    );
};

export default PopularClass;

{/* <button className="btn btn-primary" disabled={classItem.availableSeats === 0 || classItem.status !== 'approved'}>
                                    {classItem.availableSeats === 0 ? 'Sold Out' : 'Select'}
                                </button> */}



