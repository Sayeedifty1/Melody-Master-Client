
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyClassTable from "./MyClassTable";

const SelectedClasses = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["selected"], async () => {
        const res = await axiosSecure.get(`/classes/selected/${user?.email}`);
        return res.data;
    });
    console.log(classes)

    // delete a class by id
    const deleteClass = (id) => {
        axiosSecure.delete(`/classes/selected/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        text: "Class deleted successfully",

                    })
                    refetch();
                }
            });
    }

   const  handlePay = () => {
        console.log("pay")
    }
    return (
        <div>
       <MyClassTable 
       refetch={refetch}
       classes={classes}
       deleteClass={deleteClass}
       handlePay={handlePay}
        />
        </div>
    );
};

export default SelectedClasses;