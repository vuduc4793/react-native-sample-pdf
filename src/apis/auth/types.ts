import { SelectOption } from "/components/Select/types"

export interface LoginParams {
  email: string
  password: string
  token: string
}

export interface RegisterParams {
  fullName: string
  email: string
  password: string
}

export interface ForgotPassword {
  email: string
}
export interface InitSystem {
  national: SelectOption
  currency: ListCurrency
  timeZone: ListTimeZone
}
export interface LangLearnResponse {
  languageCode: string
  nameByLang: string
  languageCodeByLang: string
  check?: boolean
  flag?: string
  flagIcon?: string
  id: number
  priority: number
  status: number
}
export interface Update {
  languageCode: string
}

export interface UpdateNationAndLanguage {
  languageLearnList: Array<string>
  languageNativeList: Array<string>
  locateCode: string
}

export interface UpdateInformation {
  birthDay?: string
  currencyCode?: string
  description?: string
  fullName?: string
  isContact?: string
  isInvite?: string
  skype?: string
  timeZone?: string
}
export interface ListCurrency {
  name: string
  code: string
  check?: boolean
}
export interface ListTimeZone {
  id: number
  value: string
  offset: number
  text: string
  utc: string
  check?: boolean
}

export interface UpdateTimeZone {
  value: string
}

export interface UpdateCurrency {
  currencyCode: string
}

export interface ChangePassword {
  newPassword: string
  oldPassword: string
}

export interface ResetPassword {
  email: string
  newPassword1: string
  newPassword2: string
  token: string
}

export interface UpdateAvatar {
  avatar: string
}

export interface UpdateSendContactAndInvite {
  isContact: boolean
  isInvite: boolean
}

export interface ReceiverSuccess {
  id: number
  avatar: string
  nameMemberNew: string
  timeReceivedMoney: string
  moneyReceived: number
  currencyCode: string
}

export interface ResponseReceiverGifts {
  referralCode: string
  referralUrl: string
  listReferralSuccess: Array<ReceiverSuccess>
  totalPriceReferral: number
  currencyCode: string
}

export interface PramsLoginOpenId {
  logintype?: string
  token?: string | null
  email?: string
  avatar?: string
  givenName?: string | null
  familyName?: string | null
  tokenFcm: string
}

export interface SaveStatic {
  keyLanguage: string
}

export interface CheckVersion {
  code: string
  os: string
}
