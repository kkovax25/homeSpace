import { create } from 'axios';

import settings from '../config/settings';
// import authStorage from '../auth/storage';

const apiClient = create({
  baseURL: settings.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use((config) => {
//   let authToken = authStorage.getToken();
//   if (authToken) {
//     config.headers['x-Auth-Token'] = authToken;
//   }
//   return config;
// });

export default apiClient;
