import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editPostQuery } from '../../redux/actionCreators/detailPostActionCreator'

const usePostsDetail = (closeModal) => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  
  useLayoutEffect(() => {
    
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(editPostQuery(postId, formData, closeModal))
  }

  return {
    submitHandler,
  }
}

export default usePostsDetail
