import axios from "axios"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

export const useRequest = () => {
    const AXIOS = axios.create()
    const apiHost = process.env.VITE_REACT_APP_API_URL

    const { t } = useTranslation()

    // const { csrfToken, authToken } = useSelector((state) => state.user)

  //If useAuth is true, the Authorization header will be added
    const post = async (endpoint, data, useAuth = true, formData = false) => {
        const url = apiHost + endpoint
        try {
        const res = await AXIOS.post(url, data, {
            headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": formData ? "multipart/form-data" : "application/json",
            Authorization: useAuth && authToken && ` Token ${authToken}`,
            },
        })
        const { status, data: dataResponse } = res.data
        const { status: statusCode } = res
        if (status == "success") {
            
            return { status, data: dataResponse, statusCode }
        } else {
            return { error, statusCode, data: dataResponse }
        }
        } catch (error) {
        return handleError({ error, method: "post", endpoint })
        }
    }

  //If useAuth is true, the Authorization header will be added
    const patch = async (endpoint, data, useAuth = true, formData = false) => {
        const url = apiHost + endpoint
        try {
        const res = await AXIOS.patch(url, data, {
            headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": formData ? "multipart/form-data" : "application/json",
            Authorization: useAuth && authToken && ` Token ${authToken}`,
            },
        })
        const { status, data: dataResponse } = res.data
        const { status: statusCode } = res
        if (status == "success") {
            return { status, data: dataResponse, statusCode }
        } else {
            return { error, statusCode, data: dataResponse }
        }
        } catch (error) {
        return handleError({ error, method: "patch", endpoint })
        }
    }

    const deleteElement = async (endpoint, useAuth = true) => {
        const url = apiHost + endpoint
        try {
        const res = await AXIOS.delete(url, {
            headers: {
            "X-CSRFToken": csrfToken,
            Authorization: useAuth && authToken && ` Token ${authToken}`,
            },
        })
        const { status, data: dataResponse } = res.data
        const { status: statusCode } = res
        if (status == "success") {
            return { status, statusCode }
        } else {
            return { error, statusCode, data: dataResponse }
        }
        } catch (error) {
        return handleError({ error, method: "delete", endpoint })
        }
    }

  //If useAuth is true, the Authorization header will be added
    const get = async (endpoint, useAuth = true) => {
        const url = apiHost + endpoint
        try {
        const res = await AXIOS.get(url, {
            headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
            Authorization: useAuth && authToken && ` Token ${authToken}`,
            },
        })
        const { status, data: dataResponse } = res.data
        const { status: statusCode } = res
        if (status == "success") {
            return { status, data: dataResponse, statusCode }
        } else {
            return { error, statusCode, data: dataResponse }
        }
        } catch (error) {
        return handleError({ error, method: "get", endpoint })
        }
    }
    
  const getNoStatus = async (endpoint, useAuth = true) => {
    const url = apiHost + endpoint
    try {
      const res = await AXIOS.get(url, {
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": "application/json",
          Authorization: useAuth && authToken && ` Token ${authToken}`,
        },
      })
      const { data: dataResponse } = res
      const { status: statusCode } = res
      if (statusCode == 200) {
        return { data: dataResponse, statusCode }
      } else {
        return { error, statusCode, data: dataResponse }
      }
    } catch (error) {
      return handleError({ error, method: "get", endpoint })
    }
  }

  const handleError = ({ error, method, endpoint }) => {

    // Check if it's a network error
    if (error.response) {
      // The request was made, but the server responded with a status code
      // outside the range of 2xx
      console.error("Server responded with an error:", error.response.data)
      console.error("Status code:", error.response.status)

      const data = error.response.data
      const statusCode = error.response.status
      switch (statusCode) {
        case 404:
          return {
            data,
            statusCode,
            message: t("errorMessages.notFound"),
          }
        case 400:
          return { data, statusCode, message: t("errorMessages.badRequest") }
        case 500:
          return {
            data,
            statusCode,
            message: t("errorMessages.internalServerError"),
          }
        default:
          return {
            error,
            statusCode,
            message: t("errorMessages.somethingWentWrong"),
          }
      }
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received from the server")
      return { error: error, message: t("errorMessages.somethingWentWrong") }
    } else {
      // Check for network connectivity issues
      if (error.message === "Network Error") {
        console.error("Network Error: Check your internet connection")
        return {
          error: error,
          message: t("errorMemessagessages.somethingWentWrong"),
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message)
        return { error, message: t("errorMessages.somethingWentWrong") }
      }
    }
  }

  const getOpenUrl = async (endpoint) => {
    const url = endpoint
    try {
      const res = await AXIOS.get(url)
      return res
    } catch (error) {
      return handleError({ error, method: "get", endpoint })
    }
  }

  const postNoStatus = async (
    endpoint,
    data,
    useAuth = true,
    formData = false
  ) => {
    const url = apiHost + endpoint
    try {
      const res = await AXIOS.post(url, data, {
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": formData ? "multipart/form-data" : "application/json",
          Authorization: useAuth && authToken && ` Token ${authToken}`,
        },
      })

      const { status: statusCode } = res
      if (statusCode == 200) {
        
        return { data: res.data, statusCode }
      } else {
        return { error, statusCode, data }
      }
    } catch (error) {
      return handleError({ error, method: "post", endpoint })
    }
  }
  const deleteNoStatus = async (
    endpoint,
    data,
    useAuth = true,
    formData = false
  ) => {
    const url = apiHost + endpoint
    (
      "userAuth: ",
      useAuth,
      " csrfToken: ",
      csrfToken,
      " formData: ",

      formData,
      " authToken: ",
      authToken
    )
    try {
      const res = await AXIOS.delete(url, {
        headers: {
          "X-CSRFToken": csrfToken,
          Authorization: useAuth && authToken && ` Token ${authToken}`,
        },
      })

      const { status: statusCode } = res
      if (statusCode == 200) {
        return { data: res.data, statusCode }
      } else if (statusCode === 204) {
        return { statusCode }
      } else {
        return { statusCode, data }
      }
    } catch (error) {
      return error && handleError({ error, method: "delete", endpoint })
    }
  }
  const patchNoStatus = async (endpoint, data, useAuth = true, formData = false) => {
    const url = apiHost + endpoint
    try {
      const res = await AXIOS.patch(url, data, {
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": formData ? "multipart/form-data" : "application/json",
          Authorization: useAuth && authToken && ` Token ${authToken}`,
        },
      })
      const { status: statusCode } = res
      if (statusCode == 200) {
        return { data: res.data, statusCode }
      } else {
        return { error, statusCode, data }
      }
    } catch (error) {
      return handleError({ error, method: "patch", endpoint })
    }
  }
  return {
    post,
    get,
    patch,
    getOpenUrl,
    deleteElement,
    postNoStatus,
    getNoStatus,
    deleteNoStatus,
    patchNoStatus
  }
}
