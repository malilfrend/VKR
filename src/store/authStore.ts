import { create } from 'zustand';

interface IAuthStore {
  isAuth: boolean;
  name: string;
  lastName: string;
  group: number;
}
export const useAuthStore = create<IAuthStore>((set, get) => ({
  isAuth: false,
  name: 'Иван',
  lastName: 'Иванов',
  group: 9202,
}));
