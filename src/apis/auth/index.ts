import Request from "/apis/request"
import { API_DEFAULT } from "/apis/urls"

import { BaseResponse } from "../types"
import { GET_ME, INIT, LOGIN, REGISTER } from "./config"

import { InitSystem, LoginParams, RegisterParams } from "./types"
import { User } from "/models/User"
import { UseToken } from "/models/Token"

export const getUser = async (): Promise<User> => {
  try {
    const res = await Request.post<BaseResponse<User>>(API_DEFAULT, {
      ...GET_ME,
    })

    if (!res || !res.data.success) {
      throw new Error(res.data.message)
    }

    return res.data.data
  } catch (error) {
    throw error
  }
}

export const login = async (params: LoginParams): Promise<UseToken> => {
  try {
    const res = await Request.post<BaseResponse<string>>(API_DEFAULT, {
      ...LOGIN,
      ...params,
    })

    if (!res || !res.data.success) {
      throw new Error(res.data.message)
    }

    return { token: res.data.data } as UseToken
  } catch (error) {
    throw error
  }
}

export const register = async (params: RegisterParams): Promise<undefined> => {
  try {
    const res = await Request.post<BaseResponse<undefined>>(API_DEFAULT, {
      ...REGISTER,
      ...params,
    })

    if (!res || !res.data.success) {
      throw new Error(res.data.message)
    }

    return res.data.data
  } catch (error) {
    throw error
  }
}

export const getSystem = async (): Promise<InitSystem> => {
  try {
    const res = await Request.post<BaseResponse<InitSystem>>(API_DEFAULT, {
      ...INIT,
    })

    if (!res || !res.data.success) {
      throw new Error(res.data.message)
    }

    return res.data.data
  } catch (error) {
    throw error
  }
}
