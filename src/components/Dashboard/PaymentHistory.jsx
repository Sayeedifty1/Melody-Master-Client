import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const PaymentHistory = () => {
    // fetch payment history from database
    const { user } = useAuth();
    const [paymentHistory, setPaymentHistory] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/enrolled/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPaymentHistory(data);
            })
    }, [user?.email])
    console.log(paymentHistory)

    const sortedTransactions = paymentHistory.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div>
            {/* <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.transactionId}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
            <div className="w-full">

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                sortedTransactions.map((tranx, index) => <tr key={tranx._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={tranx.enrolledClass.image} alt="Class image" />
                                        </div>
                                    </td>
                                    <td>{tranx.enrolledClass.name}</td>
                                    <td>
                                        {tranx.transactionId}
                                    </td>
                                    <td className="">${tranx.price}</td>
                                    <td className="text-center">
                                        {tranx.date}
                                    </td>
                                   
                                   
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;