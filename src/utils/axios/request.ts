import _i from "./axiosInstance";

interface IHttpRequest {
    get(url: string, query?: Record<string, any>): Promise<any>
    post(): void
    delete(): void
}

class HttpRequest implements IHttpRequest {
    async get(url: string, query?: Record<string, any>) {
        return _i.get(url, {
            params: query || {}
        })
    }

    post() { }

    delete() { }
}

export const request = new HttpRequest;