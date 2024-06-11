import { createSlice } from "@reduxjs/toolkit"

const initialStae = {
  userId: "",
  userEmail: "",
  type: "",
  userName: "",
  authToken: false,
  csrfToken: false,
  userInfoPrivate: [],
  userInfoPublic: [],
  prevUserId: "",
  userComunitats:[]
}

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialStae,

  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },

    setCsrfToken: (state, action) => {
      state.csrfToken = action.payload
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    },

    login: (state, action) => {
      const { email, token, userName, id, type } = action.payload
      state.authToken = token
      state.userEmail = email
      state.userId = id
      state.type = type
      state.userName = userName
    },

    logout: (state, action) => {
      const newState = { csrfToken: state.csrfToken, ...initialStae }
      return newState
    },
    setUserInfoPrivate: (state, action) => {
      state.userInfoPrivate = action.payload
    },
    setUserInfoPublic: (state, action) => {
      state.userInfoPublic = action.payload
    },
    setPrevUserId: (state, action) => {
      state.prevUserId = action.payload
    },
    setUserComunitats: (state, action) => {
      state.userComunitats = action.payload
    },
    addUserComunitat: (state, action) => {
      state.userComunitats.push(action.payload)
    }
  },
})

export const {
  login,
  logout,
  setUserInfoPrivate,
  setUserInfoPublic,
  setAuthToken,
  setCsrfToken,
  setUserEmail,
  setUserId,
  setUserName,
  setPrevUserId,
  setUserComunitats,
  addUserComunitat
} = userSlice.actions
