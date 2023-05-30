import { DELETE, EDIT_USER, GET_CURRENT, LOGIN, REGISTER } from "../ActionTypes/UserTypes";

const initialState = {
user:{}
}

const userReducer= (state = initialState, { type, payload }) => {
switch (type) {
  case REGISTER:
    localStorage.setItem("token",payload.token)
    return({...state,user:payload.user})
    case LOGIN:
      localStorage.setItem("token",payload.token)
      return({...state,user:payload.user})
      case GET_CURRENT:
        return({...state,user:payload.user})
        case EDIT_USER:
          return({...state,user:payload.user})
          case DELETE:
            localStorage.removeItem("token")
            return({...state,user:payload})
  default:
   return state
}
}
export default userReducer