import toast from "react-hot-toast";
import { profileEndPoints } from "../api";
import { setLoading, setUser } from "../../slices/profileSlice";
import { logout } from "./authAPI";
import { apiConnector } from "../apiConnector";
import { ACCOUNT_TYPE } from "../../utils/Constants";

const {GET_USER_DETAILS_API} = profileEndPoints;

export function getUserDetails(token, navigate) {
    return async(dispatch) => {
        const toastId = toast.loading("loading...")
        dispatch(setLoading(true)) 
        try {
            const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
                Authorization: `Bearer ${token}`
            })

            console.log("GET USER DETAILS API RESPONSE..........", response)
            localStorage.setItem("user", JSON.stringify(response.data))
            dispatch(setUser(response.data))

            if(!response.data) {
                throw new Error(response.data.message)
            }

            if(response.data.authorities[0].authority === ACCOUNT_TYPE.NORMAL)
                navigate("/user/home")
            else if(response.data.authorities[0].authority === ACCOUNT_TYPE.ADMIN)
                navigate("/admin/home")
                
            
        } catch (error) {
            dispatch(logout(navigate))
            console.log("GET USER DETAILS API ERROR..............", error)
            toast.error("Could Not Get User Details")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}