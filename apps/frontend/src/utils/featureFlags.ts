const getBooleanFromEnv = (key: string, defaultValue = false) => {
  const value = process.env[key];
  return value ? value.toLowerCase() === 'true' : defaultValue;
};

export const FEATURE_FLAGS = {
  MEMBERS: getBooleanFromEnv('NEXT_PUBLIC_SHOW_MEMBERS'),
};
