import {normalize} from 'normalizr';
import axios, {AxiosRequestHeaders, AxiosResponse} from 'axios';
import qs from 'qs';
import Config from 'react-native-config';
import {middlewareReturnProps} from './Types';

const defaultHeaders: AxiosRequestHeaders = {
   'Content-Type': 'application/json',
};

// Base Urls Fetched From .Env
const BASE_URL = Config.BASE_URL;

export const callApi = async ({
   endpoint,
   schema,
   method,
   headers = {},
   body,
   params = {},
   config = {},
   path,
   userToken,
   externalCall,
}: Props): Promise<middlewareReturnProps> => {
   const options = {
      baseURL: externalCall ? '' : BASE_URL,
      headers: {
         ...defaultHeaders,
         ...headers,
         ...headers(userToken ? {Authorization: `Bearer ${userToken}`} : {}),
      },
   };

   const axiosInstance: Record<string, any> = axios.create(options);

   let query = '';

   if (body) {
      Object.keys(body).forEach((key) => {
         if (body[key] === undefined) delete body[key];
      });
   }

   let configParams = [{...config}];

   if (path) {
      query += '/' + path.join('/');
   }

   if (params) {
      query += qs.stringify(params, {addQueryPrefix: true});
   }

   if (['post', 'patch', 'put', 'delete'].includes(method)) {
      configParams = [body, {...params, ...config}];
   }
};
