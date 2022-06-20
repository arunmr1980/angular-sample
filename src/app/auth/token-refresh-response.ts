export interface TokenRefreshResponse {

  response_code: string
  message: string
  access_token: string
  refresh_token: string
  device_key: string
  expires: number

}
