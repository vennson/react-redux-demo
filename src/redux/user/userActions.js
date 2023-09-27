import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes'

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
