import axios from "axios"

import { requestLog } from "./logger"

const headers = {
  "Content-Type": "application/json",
  "Authorization": ""
}

const BASE_URL = "https://api.pexels.com/v1/"

const Request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers,
})

Request.interceptors.request.use(
  (config) => {

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

Request.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config

    return Promise.reject(err)
  },
)

Request.interceptors.request.use(
  (req) => {
    requestLog(req.method, req.data.fn, req, "req")

    return req
  },
  (error) => {
    return error
  },
)

Request.interceptors.response.use(
  (res) => {
    requestLog(res.config.method, res.config.data, res, "res")

    return res
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default Request
