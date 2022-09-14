import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class Request {
  private instance
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT
    })

    // 请求拦截器
    this.instance.interceptors.request.use(config => {
      return config
    })

    // 响应拦截器
    this.instance.interceptors.response.use(response => {
      return response.data
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
					default:
						err.message = "其他错误信息"
				}
      }
      return err;
    })
  }
  get(options: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance({...options, method: 'GET'}).then(res => resolve(res)).catch(err => reject(err))
    })
  }

  post(options: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance({...options, method: 'Post'}).then(res => resolve(res)).catch(err => reject(err))
    })
  }
}

export default new Request();