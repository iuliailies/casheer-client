import axios, { AxiosResponse } from 'axios';
import { Expense, GetExpensesResponse } from '../types/expenses.types';

const entriesUrl = 'http://localhost:8033/api/entries/'

export const getExpensesPerEntry = async (entryId: number) : Promise<Expense[]> => {
  try {
    const response: AxiosResponse<GetExpensesResponse> = await axios.get(entriesUrl + `${entryId}/expenses`);
    return response.data.data.map(expense => new Expense(expense));
  } catch (error) {
    throw error;
  }
};
