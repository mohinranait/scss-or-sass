import admin from "../../../public/image/admin.png"
import hello from "../../../public/image/delete.png"


const PaymentHistory = () => {
    return (
        <div className="px-10 pt-10 w-full">
            <div className="">
                <h1 className="text-2xl font-bold text-blue-600 pb-2">Paymenth managment</h1>
                <h1 className="w-full bg-blue-600 py-2 pl-3 text-white font-medium text-xl">All Users paymenthhistory (0000)</h1>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>How much money did he pay?</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">user name</div>
                                    </div>
                                </div>
                            </td>
                            <td>user Email</td>
                            <td>39.00</td>
                            <td>when he did sing up date</td>
                        </tr>
                        {/* row 2 */}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default PaymentHistory