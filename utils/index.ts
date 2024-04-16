import dayjs from "dayjs"
import CryptoJS from "crypto-js"
interface ISetCookieOpts {
    key?: string
    value?: string
    path?: string
    secure?: boolean
    samesite?: boolean
    /**
     * Time in hours for the cookie to expire
     */
    expires?: number
  }
export const currencyFormat = ({amount,currency}:{amount: number,currency: 'KES' | 'USD' | 'EUR'}) => {
    return new Intl.NumberFormat('en-KE',{currency,style:'currency',}).format(amount)
}
export const setCookie = ({samesite = true,secure = true,expires = 24 ,key,path,value}:ISetCookieOpts) => {
    if (typeof window === undefined) {
        return false
    }
    const date = dayjs().add(expires,'hours').toDate().toUTCString()
    let cookieString = `${key}=${CryptoJS.AES.encrypt(value!,process.env.NEXT_PUBLIC_CIPHER_KEY!).toString()};path=${path ?? '/'};expires=${date}`
    if (secure) cookieString += 'secure;'
    if (samesite) cookieString += 'samesite;'
    document.cookie = cookieString
    return true
}
export const decriptCookie = (value: string) => {
    try {
      const content = CryptoJS.AES.decrypt(value || '', process.env.NEXT_PUBLIC_CIPHER_KEY!).toString(CryptoJS.enc.Utf8)
      return JSON.parse(content)
    } catch (error) {
      return null
    }
  }