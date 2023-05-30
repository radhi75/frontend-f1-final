import { GET_BLOGS } from "../ActionTypes/BlogTypes";

const initialState = {
  blogs:[]
}
    
    const Blogreducer= (state = initialState, { type, payload }) => {
      switch (type) {
        case GET_BLOGS:
          
         return{...state,blogs:payload.blog}
      
        default:
         return state
      }
    }
    export default Blogreducer