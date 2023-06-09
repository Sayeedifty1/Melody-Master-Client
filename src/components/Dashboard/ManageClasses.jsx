import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UserTable from "./Table/userTable";




const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] , refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    });
    console.log(classes)


    return (
        <div>
            <h2>haha now i will decline</h2>
            <UserTable classes={classes} 
            refetch={refetch}
            />
        </div>
    );
};

export default ManageClasses;