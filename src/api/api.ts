import axios from 'axios';

const baseURL = 'https://test.tspb.su/test-task/';

export const api = axios.create({
  baseURL,
});
