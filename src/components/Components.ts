import { create } from "zustand";

interface Components {
    startDate: Date | null;
    setStartDate: (date: Date | null) => void;
    frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';
    setFrequency: (frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Yearly') =>  void;
    interval: number;
    daysOfWeek: number[];
    setInterval: (interval: number) => void;
    setDaysOfWeek: (days: number[]) => void;
}

export const ComponentsS = create<Components>((set) =>({
    startDate:null,
    setStartDate: (date) => set({ startDate: date}),
    frequency: 'Daily',
    setFrequency: (frequency) => set({ frequency}),
    interval: 1,
  daysOfWeek: [],
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),

}))