import axios from "axios";
import type { CreateAxiosDefaults, AxiosInstance } from "axios";

const axiosConfig: CreateAxiosDefaults = {
    baseURL: "/api",
    timeout: 5000
};

class Instance {
    static INSTANCE: AxiosInstance;

    static {
        this.INSTANCE = axios.create(axiosConfig);
        this.#initRequestInterceptors();
        this.#initResponseInterceptors();
    }

    constructor() {

    }

    /**
     * 初始化请求拦截器
     */
    static #initRequestInterceptors() {
        this.INSTANCE.interceptors.request.use((req) => {
            return req;
        }, (err) => {
            console.log("axios request interceptors error");
            console.log(err);
        });
    }

    /**
     * 初始化响应拦截器
     */
    static #initResponseInterceptors() {
        this.INSTANCE.interceptors.response.use((res) => {
            return res;
        }, (err) => {
            console.log("axios response interceptors error");
            console.log(err);
        });
    }
}

new Instance();

export default Instance.INSTANCE;