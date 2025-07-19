import axios from 'axios';

const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

export const client = axios.create({
  baseURL: ApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
