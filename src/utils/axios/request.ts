/**
 * @author jalontsui
 * @createTime 2024/02/09
 * @editTime 2024/02/09
 * @editor jalontsui
 */
import _i from "./axiosInstance";
import { AxiosResponse } from "axios";

type Iobj = Record<string, any>;

interface IHttpRequest {
    /**
     * 封装的get方法
     * @param url 访问的路径
     * @param query 路径参数
     * @returns promise
     */
    get<T = any>(url: string, query?: Iobj): Promise<AxiosResponse<T>>

    /**
     * 封装的post方法
     * @param url 访问路径
     * @param params body参数
     * @returns promise
     */
    post<T = any>(url: string, params: Iobj): Promise<AxiosResponse<T>>

    /**
     * 封装的delete方法
     * @param url 访问路径
     * @param params body参数
     * @returns promise
     */
    delete<T = any>(url: string, params: Iobj): Promise<AxiosResponse<T>>

    /**
     * 封装的put方法
     * @param url 访问路径
     * @param params body参数
     * @returns promise
     */
    put<T = any>(url: string, params: Iobj): Promise<AxiosResponse<T>>
}

class HttpRequest implements IHttpRequest {
    async get<T = any>(url: string, query?: Iobj) {
        return _i.get<T>(url, {
            params: query || {}
        })
    }

    async post<T = any>(url: string, params?: Iobj) {
        return _i.post<T>(url, params || {});
    }

    async delete<T = any>(url: string, params?: Iobj) {
        return _i.delete<T>(url, params || {});
    }

    async put<T = any>(url: string, params?: Iobj) {
        return _i.put<T>(url, params || {});
    }
}

export const request = new HttpRequest;