import Modal from '../Modal/Modal'
import PostForm from '../PostForm/PostForm'
import { usePostsDetailContext } from '../PostsDetail/PostsDetail'

const PostsDetailModal = () => {
  const {
    viewModal, closeModal, post, submitHandler,
  } = usePostsDetailContext()
  return (
    <Modal
      state={viewModal}
      onClose={closeModal}
    >
      <PostForm
        onSubmit={submitHandler}
        {...post}
      />
    </Modal>
  )
}

export default PostsDetailModal
