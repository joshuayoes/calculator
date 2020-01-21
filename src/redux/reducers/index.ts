/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import {
  INPUT_NUMBER, CLEAR_DISPLAY, INPUT_DECIMAL, INPUT_OPERATOR, INPUT_EQUALS,
} from '../actionTypes';

interface Action {
  type: string;
  input: string;
  operator: string;
}

interface State {
  input: string;
  previousInput: string | null;
  operator: string | null;
}

const intialState = {
  input: '0',
  previousInput: null,
  operator: null,
};

// helper function for INPUT_OPERATOR and INPUT_EQUALS
const calculate = (n1: string, operator: string, n2: string): number => {
  const numberOne: number = parseInt(n1, 10);
  const numberTwo: number = parseInt(n2, 10);
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case 'x':
      return numberOne * numberTwo;
    case '/':
      return numberOne / numberTwo;
    default:
      throw Error('Invalid operator');
  }
};

const display: Reducer<State, Action> = (state = intialState, action): State => {
  switch (action.type) {
    case INPUT_NUMBER:
      // if state is initalState, replace it with first input
      if (state.input === '0') {
        return {
          ...state,
          input: action.input,
        };
      }
      return {
        ...state,
        input: state.input.concat(action.input),
      };
    case INPUT_DECIMAL:
      if (state.input.includes('.')) {
        return state;
      }
      return {
        ...state,
        input: state.input.concat(action.input),
      };
    case INPUT_OPERATOR:
      if (state.previousInput === null || state.operator === null || state.input === '') {
        return {
          input: '',
          previousInput: state.input,
          operator: action.operator,
        };
      }

      const operatorResult = calculate(state.previousInput, state.operator, state.input).toString();

      return {
        input: '',
        previousInput: operatorResult,
        operator: action.operator,
      };

    case INPUT_EQUALS:
      // if equals is inputed pre-maturely, do nothing
      if (state.previousInput === null || state.operator === null || state.input === '') {
        return state;
      }

      const result = calculate(state.previousInput, state.operator, state.input).toString();

      return {
        input: result,
        previousInput: null,
        operator: null,
      };
    case CLEAR_DISPLAY:
      return {
        input: '0',
        previousInput: null,
        operator: null,
      };
    default:
      return state;
  }
};

export default display;
