import { LoaderFunctionArgs } from 'react-router-dom';
import { environment } from 'src/utils/environment-utils';

export const emptyLoader = async (args: LoaderFunctionArgs<unknown>) => {
  return null;
};
export const localLoader = async (args: LoaderFunctionArgs<unknown>) => {
  return environment.name === 'local';
};
