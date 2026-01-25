export type Environment = {
  name: 'local' | 'dev' | 'prod';
  apiUrl: string;
};

export const environment = {
  name: process.env.REACT_APP_ENVIRONMENT,
  apiUrl: process.env.REACT_APP_API_URL,
} as Environment;
