import { INPUT_NUMBER, CLEAR_DISPLAY, INPUT_DECIMAL } from './actionTypes';

export const inputNumber = (input: string): object => ({
  type: INPUT_NUMBER,
  input,
});

export const inputDecimal = (input: string): object => ({
  type: INPUT_DECIMAL,
  input,
});

export const clearDisplay = (): object => ({
  type: CLEAR_DISPLAY,
});
