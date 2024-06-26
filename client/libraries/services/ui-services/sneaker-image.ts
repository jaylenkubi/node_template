/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  GetByQuerySneakerImageParams,
  SneakerImage,
  SneakerImageEntity
} from './models'
import { customInstance } from './custom-instance-ui';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Get all sneakerImages
 */
export const getAllSneakerImage = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<SneakerImageEntity[]>(
      {url: `/v1/entities/sneakerImage`, method: 'GET', signal
    },
      options);
    }
  

export const getGetAllSneakerImageQueryKey = () => {
    return [`/v1/entities/sneakerImage`] as const;
    }

    
export const getGetAllSneakerImageQueryOptions = <TData = Awaited<ReturnType<typeof getAllSneakerImage>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAllSneakerImageQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllSneakerImage>>> = ({ signal }) => getAllSneakerImage(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAllSneakerImage>>, TError, TData> & { queryKey: QueryKey }
}

export type GetAllSneakerImageQueryResult = NonNullable<Awaited<ReturnType<typeof getAllSneakerImage>>>
export type GetAllSneakerImageQueryError = unknown

/**
 * @summary Get all sneakerImages
 */
export const useGetAllSneakerImage = <TData = Awaited<ReturnType<typeof getAllSneakerImage>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetAllSneakerImageQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Create a sneakerImage
 */
export const createOneSneakerImage = (
    sneakerImage?: SneakerImage,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<SneakerImageEntity>(
      {url: `/v1/entities/sneakerImage`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: sneakerImage
    },
      options);
    }
  


export const getCreateOneSneakerImageMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createOneSneakerImage>>, TError,{data: SneakerImage}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createOneSneakerImage>>, TError,{data: SneakerImage}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createOneSneakerImage>>, {data: SneakerImage}> = (props) => {
          const {data} = props ?? {};

          return  createOneSneakerImage(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateOneSneakerImageMutationResult = NonNullable<Awaited<ReturnType<typeof createOneSneakerImage>>>
    export type CreateOneSneakerImageMutationBody = SneakerImage
    export type CreateOneSneakerImageMutationError = unknown

    /**
 * @summary Create a sneakerImage
 */
export const useCreateOneSneakerImage = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createOneSneakerImage>>, TError,{data: SneakerImage}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createOneSneakerImage>>,
        TError,
        {data: SneakerImage},
        TContext
      > => {

      const mutationOptions = getCreateOneSneakerImageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Get sneakerImages by query
 */
export const getByQuerySneakerImage = (
    params?: GetByQuerySneakerImageParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<SneakerImageEntity[]>(
      {url: `/v1/entities/sneakerImage/query`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetByQuerySneakerImageQueryKey = (params?: GetByQuerySneakerImageParams,) => {
    return [`/v1/entities/sneakerImage/query`, ...(params ? [params]: [])] as const;
    }

    
export const getGetByQuerySneakerImageQueryOptions = <TData = Awaited<ReturnType<typeof getByQuerySneakerImage>>, TError = unknown>(params?: GetByQuerySneakerImageParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getByQuerySneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetByQuerySneakerImageQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getByQuerySneakerImage>>> = ({ signal }) => getByQuerySneakerImage(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getByQuerySneakerImage>>, TError, TData> & { queryKey: QueryKey }
}

export type GetByQuerySneakerImageQueryResult = NonNullable<Awaited<ReturnType<typeof getByQuerySneakerImage>>>
export type GetByQuerySneakerImageQueryError = unknown

/**
 * @summary Get sneakerImages by query
 */
export const useGetByQuerySneakerImage = <TData = Awaited<ReturnType<typeof getByQuerySneakerImage>>, TError = unknown>(
 params?: GetByQuerySneakerImageParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getByQuerySneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetByQuerySneakerImageQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get sneakerImage by id
 */
export const getOneSneakerImage = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<SneakerImageEntity>(
      {url: `/v1/entities/sneakerImage/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetOneSneakerImageQueryKey = (id: number,) => {
    return [`/v1/entities/sneakerImage/${id}`] as const;
    }

    
export const getGetOneSneakerImageQueryOptions = <TData = Awaited<ReturnType<typeof getOneSneakerImage>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneSneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetOneSneakerImageQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getOneSneakerImage>>> = ({ signal }) => getOneSneakerImage(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getOneSneakerImage>>, TError, TData> & { queryKey: QueryKey }
}

export type GetOneSneakerImageQueryResult = NonNullable<Awaited<ReturnType<typeof getOneSneakerImage>>>
export type GetOneSneakerImageQueryError = unknown

/**
 * @summary Get sneakerImage by id
 */
export const useGetOneSneakerImage = <TData = Awaited<ReturnType<typeof getOneSneakerImage>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneSneakerImage>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetOneSneakerImageQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Update a sneakerImage
 */
export const updateOneSneakerImage = (
    id: unknown,
    sneakerImageEntity?: SneakerImageEntity,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<unknown>(
      {url: `/v1/entities/sneakerImage/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: sneakerImageEntity
    },
      options);
    }
  


export const getUpdateOneSneakerImageMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateOneSneakerImage>>, TError,{id: unknown;data: SneakerImageEntity}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof updateOneSneakerImage>>, TError,{id: unknown;data: SneakerImageEntity}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateOneSneakerImage>>, {id: unknown;data: SneakerImageEntity}> = (props) => {
          const {id,data} = props ?? {};

          return  updateOneSneakerImage(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateOneSneakerImageMutationResult = NonNullable<Awaited<ReturnType<typeof updateOneSneakerImage>>>
    export type UpdateOneSneakerImageMutationBody = SneakerImageEntity
    export type UpdateOneSneakerImageMutationError = unknown

    /**
 * @summary Update a sneakerImage
 */
export const useUpdateOneSneakerImage = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateOneSneakerImage>>, TError,{id: unknown;data: SneakerImageEntity}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof updateOneSneakerImage>>,
        TError,
        {id: unknown;data: SneakerImageEntity},
        TContext
      > => {

      const mutationOptions = getUpdateOneSneakerImageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Remove a sneakerImage
 */
export const removeOneSneakerImage = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<unknown>(
      {url: `/v1/entities/sneakerImage/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getRemoveOneSneakerImageMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeOneSneakerImage>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof removeOneSneakerImage>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeOneSneakerImage>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  removeOneSneakerImage(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RemoveOneSneakerImageMutationResult = NonNullable<Awaited<ReturnType<typeof removeOneSneakerImage>>>
    
    export type RemoveOneSneakerImageMutationError = unknown

    /**
 * @summary Remove a sneakerImage
 */
export const useRemoveOneSneakerImage = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeOneSneakerImage>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof removeOneSneakerImage>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getRemoveOneSneakerImageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    