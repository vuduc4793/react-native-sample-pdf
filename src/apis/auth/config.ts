import { FN, M } from "../Const"
import { BaseUrl } from "../types"

export const LOGIN: BaseUrl = {
  m: M.MEMBER,
  fn: FN.LOGIN,
}

export const REGISTER: BaseUrl = {
  m: M.MEMBER,
  fn: FN.REGISTER,
}

export const GET_ME: BaseUrl = {
  m: M.MEMBER,
  fn: FN.CURRENT_MEMBER_DETAIL,
}

export const INIT: BaseUrl = {
  m: M.SYSTEM,
  fn: FN.INIT,
}
