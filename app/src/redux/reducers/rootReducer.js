import { combineReducers } from 'redux'
import { detailPostReducer } from './detailPostReducer'
import { likesReducer } from './likesReducer'
import { personReducer } from './personReducer'
import postsReducer from './postsReducer'
import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  search: searchReducer,
  person: personReducer,
  likes: likesReducer,
  detailPost: detailPostReducer,
})

export default rootReducer
