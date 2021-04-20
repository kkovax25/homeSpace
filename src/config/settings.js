const settings = {
  dev: {
    apiUrl: '192.168.0.157:3000',
  },
  test: {
    apiUrl: '192.168.0.157:3000',
  },
  prod: {
    apiUrl: '192.168.0.157:3000',
  },
};

const getCurrentSettings = () => {
  if (process.env.NODE_ENV === 'development') return settings.dev;
  if (process.env.NODE_ENV === 'test') return settings.test;
  return settings.prod;
};

export default getCurrentSettings();
