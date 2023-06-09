import { useState } from "react";
import { toast } from "react-hot-toast";
import { addClass } from "../../API/class";
import { uploadImage } from "../../API/uploadimage";
import useAuth from "../../hooks/useAuth";
import AddClassFrom from "../Form/AddClassForm";


const AddClass = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Class Image');
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.class.value;
        const instructor = e.target.instructor.value;
        const instructorEmail = e.target.email.value;
        const price = e.target.price.value;
        const availableSeats = e.target.seats.value;
        const image = e.target.image.files[0];
        setUploadButtonText("uploading...");

        // image upload to imgbb
        uploadImage(image)
            .then((data) => {
                const classData = {
                    name,
                    instructor,
                    instructorEmail,
                    price,
                    availableSeats,
                    image: data.display_url,
                    status: 'pending',
                }

                // posting the room to the db
                addClass(classData)
                    .then(data=> {
                        console.log(data)
                        setUploadButtonText("Uploaded");
                        setLoading(false);
                        toast.success('Class added successfully')
                        // navigate('/dashboard/my-classroom')
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false);
                    }).catch(err => {
                        console.log(err)
                        setLoading(false);
                    })
            })
            

    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }
    return (
        <div>

            <AddClassFrom
                user = {user}
                loading={loading}
                handleSubmit={handleSubmit}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            ></AddClassFrom>
        </div>
    );
};

export default AddClass;