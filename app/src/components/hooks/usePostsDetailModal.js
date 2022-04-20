import { useState } from "react"

export const usePostsDetailModal = () => {
  const [viewModal, setViewModal] = useState(false)

  const openModal = () => {
    setViewModal(true)
  }

  const closeModal = () => {
    setViewModal(false)
  }

  return {
    viewModal,
    openModal,
    closeModal,
  }
}
