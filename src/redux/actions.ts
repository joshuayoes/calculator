import {
  INPUT_NUMBER, CLEAR_DISPLAY, INPUT_DECIMAL, INPUT_OPERATOR,
} from './actionTypes';

export const inputNumber = (input: string): object => ({
  type: INPUT_NUMBER,
  input,
});

export const inputDecimal = (input: string): object => ({
  type: INPUT_DECIMAL,
  input,
});

export const inputOperator = (operator: string): object => ({
  type: INPUT_OPERATOR,
  operator,
});

export const clearDisplay = (): object => ({
  type: CLEAR_DISPLAY,
});
