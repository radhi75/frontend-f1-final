import axios from "axios"
import { GET_BLOGS } from "../ActionTypes/BlogTypes"
export const Get_Blog=()=>async(dispatch)=>{
try {
    const res=await axios.get("/blog/all")
    dispatch({type:GET_BLOGS,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const Post_Blog=(data)=>async(dispatch)=>{
    try {
        await axios.post("/blog/add",data)
        dispatch(Get_Blog())
    } catch (error) {
        console.log(error)
    }
 }
export const Delete_Blog=(id)=>async(dispatch)=>{
        try {
            await axios.delete("/blog/delete/"+id)
            dispatch(Get_Blog())
        } catch (error) {
            console.log(error)
     }
 }
export const Edit_Blog=(id,data)=>async(dispatch)=>{
            try {
                await axios.put(`/blog/edit/${id}`,data)
                dispatch(Get_Blog())
            } catch (error) {
                console.log(error)
     }
 }