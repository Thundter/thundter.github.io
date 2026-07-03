---
layout: "../../../../layouts/Blog.astro"
title: "Axios"
date: "2026-07-02"
tags: ["development", "javascript", "axios" ]
---

## links

https://github.com/axios/axios

[How do I create configuration for axios for default request headers in every http call?](https://stackoverflow.com/questions/51794553/how-do-i-create-configuration-for-axios-for-default-request-headers-in-every-htt)

https://profy.dev/article/react-architecture-business-logic-and-dependency-injection

``` TS
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { appConfig } from "../appConfig";
import { useStore } from '../stores/useStore';
import { Buffer } from "buffer";
import { handleRequestError, handleResponseError } from "../services/error-service";

export interface CustomAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> { addAuth?: boolean; }

const getAuthString = (valueForAuthentication: string) => {
	const hostUserToken = sessionStorage.getItem("access");
	let authString = `identifier ${Buffer.from(valueForAuthentication).toString("base64")}`;
	if (hostUserToken) {
		authString = `Bearer ${atob(hostUserToken)}`;
	}
	return authString;
};

// request interceptor
axios.interceptors.request.use(
	(config) => {
		const valueForAuthentication = useStore.getState().valueForAuthentication;

		const authString = getAuthString(valueForAuthentication);
		const refreshToken = sessionStorage.getItem("refresh");
		config.headers.Authorization = authString;

		if (refreshToken) {
			config.headers.Refresh = atob(refreshToken);
		}

		config.baseURL = appConfig.apiHost;

		return config;
	}, handleRequestError);

const updateTokens = (response: AxiosResponse<any, any> | undefined) => {
	if (response !== undefined && response.headers !== undefined && response.headers.access !== undefined) {
		sessionStorage.setItem("access", btoa(response.headers.access));
		sessionStorage.setItem("refresh", btoa(response.headers.refresh));
	}
	return response;
};

// response interceptor
axios.interceptors.response.use(response => {
	// potentially update access token (if expiring)
	updateTokens(response);
	return response;
}, handleResponseError);

const get = <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R> => axios.get<T,R,D>(url, config);
const deleteCall = <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CustomAxiosRequestConfig<D>): Promise<R> => axios.delete<T,R,D>(url, config);

export default {
	get,
	delete: deleteCall,
	post: axios.post,
	put: axios.put,
	patch: axios.patch
};
```