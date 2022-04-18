import { API_TOKEN } from "../../tokens"
import { DELETE_LIKE_POST, SET_LIKE_POST } from "../types/likesTypes"

export const setLikePost = (_id) => ({
    type: SET_LIKE_POST,
    payload: _id,
  })
  
export const setLikePostQuery = (_id) => async (dispatch) => {
  const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    }
  })
  const postsFromApi = await response.json()
  dispatch(setLikePost(postsFromApi))
}

export const deleteLikePost = (_id) => ({
  type: DELETE_LIKE_POST,
  payload: _id,
})

export const deleteLikePostQuery = (_id) => async (dispatch) => {
  const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
  }})
  const postsFromApi = await response.json()
  dispatch(deleteLikePost(postsFromApi))
}
