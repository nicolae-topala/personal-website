import $axios from 'axios';
import env from '@beam-australia/react-env';

export const axios = $axios.create();

axios.defaults.baseURL = env('API_URL');