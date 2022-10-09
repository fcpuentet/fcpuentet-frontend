export type EnvironmentType = 'development' | 'staging' | 'production';

export type BaseEnvironment = {
  type: EnvironmentType;
  isInternal: boolean;
  isProduction: boolean;
};

export type DevelopmentEnvironment = {
  type: 'development';
  isInternal: true;
  isProduction: false;
} & BaseEnvironment;

export type StagingEnvironment = {
  type: 'staging';
  isInternal: true;
  isProduction: false;
} & BaseEnvironment;

export type ProductionEnvironment = {
  type: 'production';
  isInternal: false;
  isProduction: true;
} & BaseEnvironment;

export type Environment = DevelopmentEnvironment | StagingEnvironment | ProductionEnvironment;

export const findEnvironment: (type?: string) => Environment = (type) => {
  switch (type) {
    case 'development':
      return {
        type: 'development',
        isInternal: true,
        isProduction: false,
      };

    case 'staging':
      return {
        type: 'staging',
        isInternal: true,
        isProduction: false,
      };

    case 'production':
    default:
      return {
        type: 'production',
        isInternal: false,
        isProduction: true,
      };
  }
};
