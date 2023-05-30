import axios from "axios"
import { DELETE, EDIT_USER, FAIL, GET_CURRENT, REGISTER } from "../ActionTypes/UserTypes"
import { alert_error } from "./ErrorAction"

export const register=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post("/user/register",data)
        dispatch({type:REGISTER,payload:res.data})
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
    }

export const login=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post("/user/login",data)
        dispatch({type:REGISTER,payload:res.data})
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
}

export const get_current=()=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem("token")
        }
    }
    try {
        const res=await axios.get("/user/current",config)
        dispatch({type:GET_CURRENT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const edit_user=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put("/user/edit/"+id,data)
        dispatch({type:EDIT_USER,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const delete_user=(id,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/user/${id}`)
        dispatch({type:DELETE,payload:res.data})
        navigate("/login")
    } catch (error) {
        console.log(error)
    }
}