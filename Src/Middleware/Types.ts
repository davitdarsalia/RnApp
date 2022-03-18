import {Schema} from 'normalizr';
import {
   AxiosRequestConfig,
   AxiosRequestHeaders,
   AxiosResponse,
   Method,
} from 'axios';
import {Dispatch} from 'react';
import {Action} from 'redux';

interface requestTypesModel {
   request: string;
   success: string;
   failure: string;
}

interface payloadModel {
   code: string;
   entity: AxiosResponse | null;
   cachadParams?: Record<string, any>;
}

export interface Props {
   endpoint: string;
   schema: Schema;
   method: Method;
   headers: AxiosRequestHeaders;
   body: Record<string, any>;
   params: Record<string, any>;
   config: AxiosRequestConfig;
   path: Array<string>;
   userToken: string;
   withQuery?: boolean;
   withoutParams?: boolean;
   externalCall: boolean;
}

export interface middlewareMetaModel {
   onBeforeSuccess?: (
      payload: payloadModel | {payload: AxiosResponse},
      dispatch: Dispatch<Action<any>>,
   ) => void;
   onSuccess?: (
      payload: payloadModel | {payload: AxiosResponse},
      dispatch: Dispatch<Action<any>>,
   ) => void;
   onFailure?: (
      error: customErrorType,
      dispatch: Dispatch<Action<any>>,
   ) => void;
   callback?: (dispatch: Dispatch<Action<any>>) => void;
}

export interface MiddlewareProps extends Props {
   token?: string;
   types: requestTypesModel;
   meta?: middlewareMetaModel;
   cache?: {
      key: string;
      store: string;
   };
   additionalData?: Record<string, any>;
   refresh?: boolean;
}

export interface apiMiddlewareArgs extends middlewareMetaModel {
   endpoint?: string;
   schema?: Schema;
   method: Method;
   headers?: AxiosRequestHeaders;
   body?: Record<string, any>;
   params?: AxiosRequestConfig;
   path?: Array<string>;
   userToken?: string;
   withQuery?: boolean;
   withoutParams?: boolean;
   externalCall?: boolean;
   token?: string;
   types?: requestTypesModel;
   meta?: middlewareMetaModel;
   cache?: {
      key: string;
      store: string;
   };
   additionalData?: Record<string, any>;
   refresh?: boolean;
   [x: string]: any;
}

export interface customErrorType {
   message: string;
   status?: number;
}

export interface nextActionParams {
   type: string;
   payload: Record<string, any>;
   error?: customErrorType;
   additionalData?: Record<string, any>;
}

export interface finalActionProps {
   getState: () => Record<string, any>;
   dispatch: Dispatch<Action>;
}
