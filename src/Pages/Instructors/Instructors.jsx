import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";

import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/instructors`)
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])

    return (
        <div className="py-[113px] bg-red-50">
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    {instructors.map((instructor) => (
                        <div key={instructor._id}>
                            <div className="card w-80 h-[600px] bg-base-100 shadow-xl">
                                <figure><img className="" src={instructor.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {instructor.name}
                                        <div className="badge badge-secondary">Class: {instructor.numberOfClasses}</div>
                                    </h2>
                                    <p className="text-neutral-300">{instructor.email}</p>

                                    <h2>Learn From {instructor.name}</h2>
                                    <ul>
                                        {Object.entries(instructor.classesTaken).map(([classKey, classItem],) => (
                                            <li key={classKey}>
                                                {'*'} {classItem.name}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="card-actions justify-end">

                                        <div className="badge badge-outline">See Classes</div>
                                    </div>
                                    <hr/>
                                    <div className="flex justify-center gap-8">
                                        <FaFacebook></FaFacebook>
                                        <CiTwitter></CiTwitter>
                                        <BsInstagram></BsInstagram>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </Container>

        </div>
    );
};

export default Instructors;