import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { URL_API } from '../constants/config';
import { STAGING } from '../constants/env';

export class ApiService {
  private static apiInstance = null

  public static getInstance() {
    if (!ApiService.apiInstance) {
      ApiService.apiInstance = new ApiService()
    }
    return ApiService.apiInstance
  }

  private instance: AxiosInstance = axios.create({
    baseURL: URL_API,
    timeout: 10000,
    withCredentials: !STAGING
  })

  async request(config: AxiosRequestConfig): Promise<any> {
    try {
      const response = await this.instance.request(config)
      return response.data
    } catch (error) {
      const e = error.response ? error.response.data : error.message
      console.error(e)
      throw e
    }
  }
}
