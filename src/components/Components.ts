import { create } from "zustand";


interface Components {
  startDate: Date | null;
  endDate: Date | null;
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  frequency: number;
  daysOfWeek: number[];
  nthDayOfMonth: number;
  updateStartDate: (date: Date | null) => void;
  updateEndDate: (date: Date | null) => void;
  setRecurrenceType: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setFrequency: (frequency: number) => void;
  setDaysOfWeek: (days: number[]) => void;
  setNthDayOfMonth: (day: number) => void;
}

export const ComponentsS = create<Components>((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'daily',
  frequency: 1,
  daysOfWeek: [],
  nthDayOfMonth: 1,
  updateStartDate: (date) => set({ startDate: date }),
  updateEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setFrequency: (frequency) => set({ frequency }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
  setNthDayOfMonth: (day) => set({ nthDayOfMonth: day }),
}));