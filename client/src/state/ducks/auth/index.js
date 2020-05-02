import axios from "axios"
import axiosWithAuth from 'state/interceptor'

const profileAxios = axios.create();
profileAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("PROTONEKOT");
    config.headers.Authorization = `${token}`;
    return config;
})

const initAuth = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('PROTONEKOT') ? true : false,
    errorMessage: '', 
    username: localStorage.getItem('PROTONEKOT') ? localStorage.getItem('PROTOUSERNAME') : '',
    worth: localStorage.getItem('PROTONEKOT') ? localStorage.getItem('PROTOWORTH') : 0
}


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const DISMISS_ERROR = 'DISMISS_ERROR'
export const LOGOUT = 'LOGOUT'
export const UPDATE_WORTH = 'UPDATE_WORTH'

export function auth(state = initAuth, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false }
    case LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, username: action.username, worth: action.worth }
    case LOGIN_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, username: '', errorMessage: action.errorMessage}
    case DISMISS_ERROR:
      return {...state, errorMessage: ''}
    case UPDATE_WORTH:
      return {...state, worth: action.worth}
    case LOGOUT:
      return {...state, isFetching: false, isAuthenticated: false, username: '', worth: 0}
    default:
      return state
    }
}

function requestLogin() {
  return { type: LOGIN_REQUEST }
}

function receiveLogin(username, worth) {
  return { type: LOGIN_SUCCESS, username, worth }
}

function loginError(errorMessage) {
  return { type: LOGIN_FAILURE, errorMessage }
}

export function updateWorth(worth) {
  localStorage.PROTOWORTH = worth
  return { type: UPDATE_WORTH, worth }
}

export function dismissError() {
  return { type: DISMISS_ERROR }
}

export function logout() {
  delete localStorage.PROTONEKOT;
  delete localStorage.PROTOUSERNAME;
  delete localStorage.PROTOWORTH;
  return { type: LOGOUT }
}

export function signup(credentials) {
    return dispatch => {
        dispatch(requestLogin(credentials))
        axios.post("/api/user/create", credentials)
            .then(response => {
                const { token, user } = response.data
                localStorage.PROTONEKOT = token
                localStorage.PROTOUSERNAME = user.username
                localStorage.PROTOWORTH = user.worth
                dispatch(receiveLogin(user.username, user.worth))
            })
            .catch((err) => {
              dispatch(loginError(err.message))
            })
    }
}

export function login(credentials) {
    return dispatch => {
        dispatch(requestLogin(credentials))
        axios.post("/api/user/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.PROTONEKOT = token
                localStorage.PROTOUSERNAME = user.username
                localStorage.PROTOWORTH = user.worth
                dispatch(receiveLogin(user.username, user.worth))
            })
            .catch((err) => {
                dispatch(loginError(err.message))
            })
    }
}

export function getWorth() {
  return dispatch => {
    axiosWithAuth.get("/api/bet/worth")
      .then(response => {
        dispatch(updateWorth(response.data.worth))
      })
  }
}