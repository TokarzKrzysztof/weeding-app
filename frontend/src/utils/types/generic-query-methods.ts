import { AxiosError } from 'axios';
import { MutateOptions, UseMutationResult, UseQueryResult } from 'react-query';
import { HttpErrorData } from 'src/utils/types/http-error-data';

export const genericUseMutationMethods = <TName extends string, TData, TVariables, TContext>(
  name: TName,
  mutation: Omit<
    UseMutationResult<TData, AxiosError<HttpErrorData>, TVariables, TContext>,
    'mutate' | 'mutateAsync'
  > & {
    mutate: (
      variables: TVariables,
      options?: MutateOptions<TData, AxiosError<HttpErrorData>, TVariables, TContext>,
      requestId?: string
    ) => void;
    mutateAsync: (
      variables: TVariables,
      options?: MutateOptions<TData, AxiosError<HttpErrorData>, TVariables, TContext>,
      requestId?: string
    ) => Promise<TData>;
    cancel?: (requestId: string) => void;
  }
) => {
  return {
    [name]: mutation.mutate,
    [name + 'Async']: mutation.mutateAsync,
    [name + 'Result']: mutation.data,
    [name + 'Error']: mutation.error?.response?.data,
    [name + 'InProgress']: mutation.isLoading,
    [name + 'Reset']: mutation.reset,
    [name + 'Cancel']: mutation.cancel
      ? mutation.cancel
      : (requestId: string) => {
          throw new Error('Method cancel not implemented');
        },
  } as Record<TName, typeof mutation.mutate> &
    Record<`${TName}Async`, typeof mutation.mutateAsync> &
    Record<`${TName}Result`, TData | undefined> &
    Record<`${TName}Error`, HttpErrorData | undefined> &
    Record<`${TName}InProgress`, boolean> &
    Record<`${TName}Reset`, () => void> &
    Record<`${TName}Cancel`, (requestId: string) => void>;
};

export const genericUseQueryMethods = <TName extends string, TData>(
  name: TName,
  query: UseQueryResult<TData, AxiosError<HttpErrorData>>
) => {
  return {
    [name]: query.data,
    [name + 'Loading']: query.isFetching || query.data === undefined,
    [name + 'Fetching']: query.isFetching,
    [name + 'FetchingError']: query.error,
    [name + 'Refetch']: query.refetch,
    [name + 'FetchedAfterMount']: query.isFetchedAfterMount,
    [name + 'Remove']: query.remove,
  } as Record<TName, TData | undefined> &
    Record<`${TName}Loading`, boolean> &
    Record<`${TName}Fetching`, boolean> &
    Record<`${TName}FetchingError`, AxiosError<HttpErrorData> | null> &
    Record<`${TName}Refetch`, typeof query.refetch> &
    Record<`${TName}FetchedAfterMount`, boolean> &
    Record<`${TName}Remove`, typeof query.remove>;
};
