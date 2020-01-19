import { UPDATE_DISPLAY, CLEAR_DISPLAY } from './actionTypes';

export const updateDisplay = (input: string): object => ({
  type: UPDATE_DISPLAY,
  input,
});

export const clearDisplay = (): object => ({
  type: CLEAR_DISPLAY,
});
