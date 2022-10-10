import { findEnvironment } from '../types';

export const useEnvironment = () => {
  const environment = findEnvironment(process.env.NEXT_PUBLIC_ENVIRONMENT);

  return {
    environment,
  };
};
