import { render, screen, fireEvent } from '@testing-library/react';
import DatePick from './DatePick';

test('DatePicker renders and updates state', () => {
  render(<DatePick />);

  // Ensure component renders
  expect(screen.getByText(/Recurring Date Pick/i)).toBeInTheDocument();

  // Test changing recurrence type
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'monthly' } });
  expect(useStore.getState().recurrence.type).toBe('monthly');

  // Test date input
  const startDateInput = screen.getByLabelText(/Start Date/i);
  fireEvent.change(startDateInput, { target: { value: '2024-10-01' } });
  expect(useStore.getState().recurrence.startDate).toBe('2024-10-01');
});