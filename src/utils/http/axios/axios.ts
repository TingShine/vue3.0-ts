import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import axios from 'axios'
import { CreateAxiosOptions } from './types'

/**
 * @description: axios模块
 */
export class VAxios {
    private axiosInstance: AxiosInstance;
    private readonly options: CreateAxiosOptions;

    // 初始化配置 
    constructor(options: CreateAxiosOptions) {
        this.options = options;
        this.axiosInstance = axios.create(options);
    }

    private getTransform() {
        const { transform } = this.options;
        return transform;
      }

    // 设置拦截器
    private setupInterceptors() {
        const transform = this.getTransform();
        if(!transform) {
            return;
        }
        const { requestInterceptors, requestInterceptorsCatch } = transform;

        this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        }, undefined)
    }
}
