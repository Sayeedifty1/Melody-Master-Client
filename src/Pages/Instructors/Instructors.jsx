import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";

import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import Title from "../../components/Title/Title";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/instructors`)
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    console.log(instructors)

    return (
        <div className="py-[113px] bg-red-50 dark:bg-slate-700">
            <Helmet>
                <title>Melody Master | Instructor</title>
            </Helmet>
            <Title heading="Instructors"></Title>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                    instructors.map((instructor) => (
                        <div key={instructor._id}>
                            <div className="card w-80 dark:bg-slate-400 h-[600px] bg-base-100 shadow-xl">
                                <figure style={{ height: '50%' }}><img className="" src={instructor.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {instructor.name}
                                        <div className="badge badge-secondary">Class: {instructor.numberOfClasses}</div>
                                    </h2>
                                    <p className="text-neutral-300">{instructor.email}</p>

                                    <h2>Learn From {instructor.name}</h2>
                                    <ul>
                                       {
                                        instructor.classes.map((cls, index) => (
                                            <li key={index}>{cls}</li>
                                        ))
                                       }
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