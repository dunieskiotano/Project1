import axios from 'axios';
import { environment } from '../environment';

export const ersClient = axios.create({
  baseURL: environment.ersContext,
  withCredentials: true
});
