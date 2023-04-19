import { create } from 'zustand';

interface IAuthStore {
  isAuth: boolean;
  name: string;
  lastName: string;
  group: number;
}
export const useAuthStore = create<IAuthStore>((set, get) => ({
  isAuth: false,
  name: 'student',
  lastName: 'studentov',
  group: 9202,
}));
