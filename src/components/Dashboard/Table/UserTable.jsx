/* eslint-disable react/prop-types */


const UserTable = ({ classes }) => {


    return (
        <div className="w-full">

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>ClassImage</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classItem, index) => <tr key={classItem._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={classItem.image} alt="Class image" />
                                    </div>
                                </td>
                                <td>{classItem.name}</td>
                                <td>
                                    {classItem.instructor}
                                </td>
                                <td>
                                    {classItem.instructorEmail}
                                </td>
                                <td className="text-center">
                                    {classItem.availableSeats}
                                </td>
                                <td className="">${classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-ghost bg-green-600  text-white">Approve</button>

                                        <button className="btn btn-ghost bg-red-600  text-white">deny</button>
                                        <button className="btn btn-ghost bg-yellow-500  text-white">Feedback</button>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;