import { axiosInstance } from "../../components/config/axios";
import { GET_USER_ID, LOGOUT, SIGN_IN, SIGN_UP } from "../types/personTypes";

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery = ({ email, password, cb }) => async (dispatch) => {
  const response = await axiosInstance.post("signin", {
    email,
    password,
  });
  const person = response.data;
  dispatch(
    signIn({
      ...person.data,
      token: person.token,
    })
  );
  typeof cb === 'function' && cb();
};

export const signUp = (person) => ({
  type: SIGN_UP,
  payload: person,
});

export const signUpQuery = ({ email, password, name, cb }) => async (dispatch) => {
  const response = await axiosInstance.post("signup", {
    name,
    email,
    password,
  });
  const person = response.data;
  dispatch(
    signUp({
      ...person.data,
      token: person.token,
    })
  );
  typeof cb === 'function' && cb();
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

export const getUserId = (person) => ({
  type: GET_USER_ID,
  payload: person,
})

export const getUserIdQuery = ({ _id }) => async (dispatch) => {
  const response = await axiosInstance.get("users/me", {
    _id,
  });
  const person = response.data;
  dispatch(
    getUserId({
      ...person.data,
      token: person.token,
    })
  );
}
