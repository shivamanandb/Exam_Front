import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { categoryEndPoints } from "../api"

const {GET_ALL_CATEGORY_API, ADD_CATEGORY_API, GET_CATEGORY_API} = categoryEndPoints;
export async function getAllCategories(token) {

    let result = []
    try {
        
        const response = await apiConnector("GET", GET_ALL_CATEGORY_API, null, {Authorization: `Bearer ${token}`})
        console.log("FETCH ALL CATEGORIES API RESPONSE..........", response)
        result = response?.data

    } catch(error) {
        console.log("FETCH ALL CATEGORIES API ERROR..........", error)
    }
    return result
}

export async function addCategory(data, token) {

    const toastId = toast.loading("loading...")

    try {

        const response = await apiConnector("POST", ADD_CATEGORY_API, data,
        {
            Authorization: `Bearer ${token}`
        })

        console.log("ADD CATEGORY API RESPONSE.........", response)
        
        toast.success("Category Added Successfully")

    }catch(error) {
        console.log("ADD CATEGORY API ERROR...........", error)
        toast.error("Something went wrong")
    }
    toast.dismiss(toastId)
}

export async function getCategory(cid, token) {
    console.log("cid ", cid)
    let result = []
    try {
        
        const response = await apiConnector("GET", GET_CATEGORY_API + cid, null, {Authorization: `Bearer ${token}`})
        console.log("FETCH CATEGORY API RESPONSE..........", response)
        result = response?.data

    } catch(error) {
        console.log("FETCH CATEGORY API ERROR..........", error)
    }
    return result
}
