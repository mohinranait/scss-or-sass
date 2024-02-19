import { useContext } from "react"
import useGetSecure from "../../hooks/useGetSecure"
import { UserContext } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom";

const DeliveryStatus = () => {

    const { user } = useContext(UserContext);

    const { data: orders, isPending, refetch } = useGetSecure(["orders", user?.email], `/api/orders?email=${user?.email}`);

    const navigate = useNavigate();



    return (
        <div className="min-h-screen container mx-auto px-5">
            <div className="my-16 flex justify-between items-center">
                <h3 className="font-semibold text-3xl ">Recent Orders</h3>

                <div>
                    <label htmlFor="sort" className="font-medium mr-4">Sort by</label>
                    <select className="py-3 px-5 border-2 rounded-lg cursor-pointer font-semibold">
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                    </select>
                </div>
            </div>

            <div>
                {
                    isPending ? <div className="text-center my-20">
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                    </div> :
                        orders?.length > 0 ?
                            <div className="overflow-x-auto">
                                <table className="table">

                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Placed On</th>
                                            <th>Items</th>
                                            <th>Subtotal</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            orders?.map(order => {
                                                return <tr className="hover:bg-gray-100 py-10" key={order?._id}>
                                                    <td>{order?.transactionId}</td>
                                                    <td>{order?.orderedAt?.split("T")[0]}</td>
                                                    <td className="flex gap-2 items-center">
                                                        {order?.products?.map((product) => <img className="w-12 block h-12 rounded" key={product?._id} src={product?.image} />)}
                                                    </td>
                                                    <td>${order?.subtotal.toFixed(2)}</td>
                                                    <td className="text-green-600 font-semibold">{order?.status}</td>
                                                    <td onClick={() => navigate(`/order/${order?._id}`)} className="uppercase font-semibold text-primary cursor-pointer">Manage</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            :
                            <div >
                                <h3 className="my-20 text-center text-3xl text-gray-400 font-semibold">You don't place any order yet!</h3>
                            </div>
                }
            </div>


        </div>
    )
}

export default DeliveryStatus