import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { logOutUser } from "../../../redux/actionCreators/personActionCreator"


export const LogOut = () => {
  const dispatch = useDispatch()

  const logOutHandler = (e) => {
    dispatch(logOutUser(e.target.value))
  }

  return (
    <Button onClick={logOutHandler}>logout</Button>
  )
}
