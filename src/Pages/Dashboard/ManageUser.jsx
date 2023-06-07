import { FaUserShield } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";

const ManageUser = () => {
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
                            <th>Role</th>
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
                                    <td>{user.role === 'admin' ? "admin" : <button onClick={() => handleMakeAdmin(user)} className="btn w-[55px] h-[50px]  bg-[#D1A054] text-xl"><FaUserShield></FaUserShield></button>}
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