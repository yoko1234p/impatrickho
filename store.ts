
import { create } from 'zustand';
import { RecruiterState } from './types';

export const useStore = create<RecruiterState>((set) => ({
  isRecruiterMode: false,
  isLoading: true,
  toggleRecruiterMode: () => set((state) => ({ isRecruiterMode: !state.isRecruiterMode })),
  setRecruiterMode: (value: boolean) => set({ isRecruiterMode: value }),
  setLoading: (value: boolean) => set({ isLoading: value }),
}));
