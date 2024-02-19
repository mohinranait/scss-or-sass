import { useContext } from "react"
import useGetSecure from "./useGetSecure"
import { UserContext } from "../context/AuthProvider"

const useCartItems = () => {

    const { user } = useContext(UserContext);

    const { data: cartItems, refetch, isPending } = useGetSecure(["cart-item", user?.email], `/api/cart?user=${user?.email}`)

    return { cartItems, refetch, isPending };
}

export default useCartItems