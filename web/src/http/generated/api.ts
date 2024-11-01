/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * in.orbit
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { http } from '../client';
export type GetUserLevelAndExperience200 = {
  experience: number;
  experienceToNextLevel: number;
  level: number;
};

export type GetProfile200Profile = {
  avatarUrl: string;
  /** @nullable */
  email: string | null;
  id: string;
  /** @nullable */
  name: string | null;
};

export type GetProfile200 = {
  profile: GetProfile200Profile;
};

export type AuthenticateFromGithub201 = {
  token: string;
};

export type AuthenticateFromGithubBody = {
  code: string;
};

export type GetWeekSummary200SummaryGoalsPerDayItem = {
  completedAt: string;
  id: string;
  title: string;
};

/**
 * @nullable
 */
export type GetWeekSummary200SummaryGoalsPerDay = {[key: string]: GetWeekSummary200SummaryGoalsPerDayItem[]} | null;

export type GetWeekSummary200Summary = {
  completed: number;
  /** @nullable */
  goalsPerDay: GetWeekSummary200SummaryGoalsPerDay;
  /** @nullable */
  total: number | null;
};

export type GetWeekSummary200 = {
  summary: GetWeekSummary200Summary;
};

export type GetWeekSummaryParams = {
weekStartsAt?: string;
};

export type GetWeekPendingGoals200PendingGoalsItem = {
  completionCount: number;
  desiredWeeklyFrequency: number;
  goalId: string;
  title: string;
};

export type GetWeekPendingGoals200 = {
  pendingGoals: GetWeekPendingGoals200PendingGoalsItem[];
};

/**
 * @nullable
 */
export type CreateCompletion201 = typeof CreateCompletion201[keyof typeof CreateCompletion201] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateCompletion201 = {
  null: 'null',
} as const;

export type CreateCompletionBody = {
  goalId: string;
};

/**
 * @nullable
 */
export type CreateGoal201 = typeof CreateGoal201[keyof typeof CreateGoal201] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateGoal201 = {
  null: 'null',
} as const;

export type CreateGoalBody = {
  /**
   * @minimum 1
   * @maximum 7
   */
  desiredWeeklyFrequency: number;
  title: string;
};




type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Create a goal
 */
export const getCreateGoalUrl = () => {


  return `/goals`
}

export const createGoal = async (createGoalBody: CreateGoalBody, options?: RequestInit): Promise<CreateGoal201> => {
  
  return http<Promise<CreateGoal201>>(getCreateGoalUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createGoalBody,)
  }
);}




export const getCreateGoalMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError,{data: CreateGoalBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError,{data: CreateGoalBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createGoal>>, {data: CreateGoalBody}> = (props) => {
          const {data} = props ?? {};

          return  createGoal(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof createGoal>>>
    export type CreateGoalMutationBody = CreateGoalBody
    export type CreateGoalMutationError = unknown

    export const useCreateGoal = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError,{data: CreateGoalBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationResult<
        Awaited<ReturnType<typeof createGoal>>,
        TError,
        {data: CreateGoalBody},
        TContext
      > => {

      const mutationOptions = getCreateGoalMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * Complete a goal
 */
export const getCreateCompletionUrl = () => {


  return `/completions`
}

export const createCompletion = async (createCompletionBody: CreateCompletionBody, options?: RequestInit): Promise<CreateCompletion201> => {
  
  return http<Promise<CreateCompletion201>>(getCreateCompletionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCompletionBody,)
  }
);}




export const getCreateCompletionMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCompletion>>, TError,{data: CreateCompletionBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationOptions<Awaited<ReturnType<typeof createCompletion>>, TError,{data: CreateCompletionBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createCompletion>>, {data: CreateCompletionBody}> = (props) => {
          const {data} = props ?? {};

          return  createCompletion(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateCompletionMutationResult = NonNullable<Awaited<ReturnType<typeof createCompletion>>>
    export type CreateCompletionMutationBody = CreateCompletionBody
    export type CreateCompletionMutationError = unknown

    export const useCreateCompletion = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCompletion>>, TError,{data: CreateCompletionBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationResult<
        Awaited<ReturnType<typeof createCompletion>>,
        TError,
        {data: CreateCompletionBody},
        TContext
      > => {

      const mutationOptions = getCreateCompletionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * Get week pending goals
 */
export const getGetWeekPendingGoalsUrl = () => {


  return `/pending-goals`
}

export const getWeekPendingGoals = async ( options?: RequestInit): Promise<GetWeekPendingGoals200> => {
  
  return http<Promise<GetWeekPendingGoals200>>(getGetWeekPendingGoalsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetWeekPendingGoalsQueryKey = () => {
    return [`/pending-goals`] as const;
    }

    
export const getGetWeekPendingGoalsQueryOptions = <TData = Awaited<ReturnType<typeof getWeekPendingGoals>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData>>, request?: SecondParameter<typeof http>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetWeekPendingGoalsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getWeekPendingGoals>>> = ({ signal }) => getWeekPendingGoals({ signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData> & { queryKey: QueryKey }
}

export type GetWeekPendingGoalsQueryResult = NonNullable<Awaited<ReturnType<typeof getWeekPendingGoals>>>
export type GetWeekPendingGoalsQueryError = unknown


export function useGetWeekPendingGoals<TData = Awaited<ReturnType<typeof getWeekPendingGoals>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekPendingGoals>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetWeekPendingGoals<TData = Awaited<ReturnType<typeof getWeekPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekPendingGoals>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetWeekPendingGoals<TData = Awaited<ReturnType<typeof getWeekPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetWeekPendingGoals<TData = Awaited<ReturnType<typeof getWeekPendingGoals>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekPendingGoals>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetWeekPendingGoalsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Get week summary
 */
export const getGetWeekSummaryUrl = (params?: GetWeekSummaryParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/summary?${normalizedParams.toString()}` : `/summary`
}

export const getWeekSummary = async (params?: GetWeekSummaryParams, options?: RequestInit): Promise<GetWeekSummary200> => {
  
  return http<Promise<GetWeekSummary200>>(getGetWeekSummaryUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetWeekSummaryQueryKey = (params?: GetWeekSummaryParams,) => {
    return [`/summary`, ...(params ? [params]: [])] as const;
    }

    
export const getGetWeekSummaryQueryOptions = <TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, request?: SecondParameter<typeof http>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetWeekSummaryQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getWeekSummary>>> = ({ signal }) => getWeekSummary(params, { signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData> & { queryKey: QueryKey }
}

export type GetWeekSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getWeekSummary>>>
export type GetWeekSummaryQueryError = unknown


export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params: undefined |  GetWeekSummaryParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekSummary>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWeekSummary>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetWeekSummary<TData = Awaited<ReturnType<typeof getWeekSummary>>, TError = unknown>(
 params?: GetWeekSummaryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWeekSummary>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetWeekSummaryQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Complete a goal
 */
export const getAuthenticateFromGithubUrl = () => {


  return `/auth/github`
}

export const authenticateFromGithub = async (authenticateFromGithubBody: AuthenticateFromGithubBody, options?: RequestInit): Promise<AuthenticateFromGithub201> => {
  
  return http<Promise<AuthenticateFromGithub201>>(getAuthenticateFromGithubUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      authenticateFromGithubBody,)
  }
);}




export const getAuthenticateFromGithubMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authenticateFromGithub>>, TError,{data: AuthenticateFromGithubBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationOptions<Awaited<ReturnType<typeof authenticateFromGithub>>, TError,{data: AuthenticateFromGithubBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authenticateFromGithub>>, {data: AuthenticateFromGithubBody}> = (props) => {
          const {data} = props ?? {};

          return  authenticateFromGithub(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthenticateFromGithubMutationResult = NonNullable<Awaited<ReturnType<typeof authenticateFromGithub>>>
    export type AuthenticateFromGithubMutationBody = AuthenticateFromGithubBody
    export type AuthenticateFromGithubMutationError = unknown

    export const useAuthenticateFromGithub = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authenticateFromGithub>>, TError,{data: AuthenticateFromGithubBody}, TContext>, request?: SecondParameter<typeof http>}
): UseMutationResult<
        Awaited<ReturnType<typeof authenticateFromGithub>>,
        TError,
        {data: AuthenticateFromGithubBody},
        TContext
      > => {

      const mutationOptions = getAuthenticateFromGithubMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * Get authenticated profile
 */
export const getGetProfileUrl = () => {


  return `/profile`
}

export const getProfile = async ( options?: RequestInit): Promise<GetProfile200> => {
  
  return http<Promise<GetProfile200>>(getGetProfileUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetProfileQueryKey = () => {
    return [`/profile`] as const;
    }

    
export const getGetProfileQueryOptions = <TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, request?: SecondParameter<typeof http>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProfileQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) => getProfile({ signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData> & { queryKey: QueryKey }
}

export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileQueryError = unknown


export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfile>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfile>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetProfileQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Get user level and experience
 */
export const getGetUserLevelAndExperienceUrl = () => {


  return `/profile/gamification`
}

export const getUserLevelAndExperience = async ( options?: RequestInit): Promise<GetUserLevelAndExperience200> => {
  
  return http<Promise<GetUserLevelAndExperience200>>(getGetUserLevelAndExperienceUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetUserLevelAndExperienceQueryKey = () => {
    return [`/profile/gamification`] as const;
    }

    
export const getGetUserLevelAndExperienceQueryOptions = <TData = Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData>>, request?: SecondParameter<typeof http>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserLevelAndExperienceQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserLevelAndExperience>>> = ({ signal }) => getUserLevelAndExperience({ signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUserLevelAndExperienceQueryResult = NonNullable<Awaited<ReturnType<typeof getUserLevelAndExperience>>>
export type GetUserLevelAndExperienceQueryError = unknown


export function useGetUserLevelAndExperience<TData = Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserLevelAndExperience>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUserLevelAndExperience<TData = Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserLevelAndExperience>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUserLevelAndExperience<TData = Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetUserLevelAndExperience<TData = Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserLevelAndExperience>>, TError, TData>>, request?: SecondParameter<typeof http>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetUserLevelAndExperienceQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




