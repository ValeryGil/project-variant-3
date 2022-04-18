import { DETAIL_POST } from "../types/detailPostTypes";

export const detailPostReducer = (store = [], action) => {
  switch (action.type) {
      case DETAIL_POST:
        return store.filter((post) => post._id !== action.payload._id)
        
      default:
        return store
  }
}
