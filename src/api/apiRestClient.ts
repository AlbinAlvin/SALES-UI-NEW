import { isEmpty, reject } from "lodash";
// import store from '../redux/store';
// import { delay } from 'redux-saga/effects';
// import { resolve } from "path";


// const getUrlWithParams = (config: any) => {
//     const url = config.url;
//     let queryParams = null;
//     if (config.queryParams) {
//         queryParams = config.queryParams;
//     }

//     return queryParams ? `${url}?${queryParams}`;
// }

// const getValidErrors = (error: any, apiUrl: any, status = 500) => {
//     const errObj = {
//         error: true,
//         statusText: `${'Message'} ${apiUrl}`,
//         status,
//         name: 'ApiError',
//         problemId: 500,
//         message: error.message || 'Server Problem'
//     }

//     const errorDetails = error.response;
//     if (errorDetails) {
//         const { message, status, error: statusText } = errorDetails.data || [];
//         return { error: true, statusText, status, message };
//     }

//     return errObj;
// }

// export default class APIRestClient {
//     static subscribe(response: any) {
//         return response.then((data: any) => {
//             if (data || !isEmpty(data)) {

//             }
//         });
//     }

//     static get = (config: any) => {
//         let apiUrl = getUrlWithParams(config);
//         apiUrl = config.apiUrl;
//         return fetch(apiUrl, {
//             method: 'GET',
//             headers: config.headers
//         }).then((response) => {
//             if (response.status === 404) {
//                 getValidErrors({ message: `${response.status + '-' + apiUrl}` }, apiUrl);
//             }

//             return this.subscribe(response);
//         })
//             .catch((error) => getValidErrors(error, apiUrl));
//     }

//     static post = (config: any) => {
//         let apiUrl = getUrlWithParams(config);
//         apiUrl = config.apiUrl;
//         return fetch(apiUrl, {
//             method: 'POST',
//             headers: config.headers,
//             body: JSON.stringify(config.data)
//         }).then((response) => {
//             if (response.status === 404) {
//                 getValidErrors({ message: `${response.status + '-' + apiUrl}` }, apiUrl);
//             }

//             return this.subscribe(response);
//         })
//             .catch((error) => getValidErrors(error, apiUrl));
//     }

//     static put = (config: any) => {
//         let apiUrl = getUrlWithParams(config);
//         apiUrl = config.apiUrl;
//         return fetch(apiUrl, {
//             method: 'PUT',
//             headers: config.headers,
//             body: JSON.stringify(config.data)
//         }).then((response) => {
//             if (response.status === 404) {
//                 getValidErrors({ message: `${response.status + '-' + apiUrl}` }, apiUrl);
//             }

//             return this.subscribe(response);
//         })
//             .catch((error) => getValidErrors(error, apiUrl));
//     }
    
//     static put = (config: any) => {
//         let apiUrl = getUrlWithParams(config);
//         apiUrl = config.apiUrl;
//         return fetch(apiUrl, {
//             method: 'PUT',
//             headers: config.headers,
//             body: JSON.stringify(config.data)
//         }).then((response) => {
//             if (response.status === 404) {
//                 getValidErrors({ message: `${response.status + '-' + apiUrl}` }, apiUrl);
//             }

//             return this.subscribe(response);
//         })
//             .catch((error) => getValidErrors(error, apiUrl));
//     }
// }

