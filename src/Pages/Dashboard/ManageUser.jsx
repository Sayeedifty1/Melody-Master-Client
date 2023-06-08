import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    
    const handleMakeAdmin = (user) => {
        console.log(user._id)
        fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    Swal.fire(
                        'Success!',
                        `${user.name} is now an admin`,
                        'success'
                    )
                    refetch();
                }
            })
    }

    const handleMakeInstructor = (user) => {
        fetch(`${import.meta.env.VITE_BASE_URL}users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    Swal.fire(
                        'Success!',
                        `${user.name} is now an instructor`,
                        'success'
                    )
                    refetch();
                }
            })
    }

    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold my-6">Total Users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Set Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> <button onClick={() => handleMakeAdmin(user)} className="btn w-[55px] h-[50px]  bg-[#D1A054] text-xl"><FaUserShield></FaUserShield></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleMakeInstructor(user)} className="btn w-[55px] h-[50px] bg-red-600 text-xl"><HiOutlineTrash></HiOutlineTrash></button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;