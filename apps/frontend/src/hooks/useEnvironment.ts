import { findEnvironment } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useEnvironment = () => {
  const environment = findEnvironment(process.env.NEXT_PUBLIC_ENVIRONMENT);

  return {
    environment,
  };
};
