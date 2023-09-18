import { createRequest } from '../index';
import { Training } from './types';

export const getTrainings = () => {
  const url = 'training/all'
  const method = 'GET'

  return createRequest<Training[]>(url, method)
}