import axios, { AxiosResponse } from 'axios';
import { Entry, GetEntriesResponse } from '../types/entries.types';

const entriesUrl = 'http://localhost:8033/api/entries/'

export const getEntriesPerMonth = async (month: number, year: number) : Promise<Entry[]> => {
  try {
    const response: AxiosResponse<GetEntriesResponse> = await axios.get(entriesUrl, { params: { month, year} });
    return response.data.data.map(entry => new Entry(entry));
  } catch (error) {
    throw error;
  }
};
