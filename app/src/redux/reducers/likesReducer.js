import { DELETE_LIKE_POST, SET_LIKE_POST } from "../types/likesTypes";

export const likesReducer = (store = [], action) => {
  switch (action.type) {
    case SET_LIKE_POST:
      return [
        ...store,
        action.payload
      ]
    
    case DELETE_LIKE_POST:
      return store.filter((like) => like._id !== action.payload)
  
      default:
        return store
  }
}
