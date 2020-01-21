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
// calculates the result of the previousInput and the current input
// of any operation
const calculate = (n1: string, operator: string, n2: string): string => {
  const numberOne: number = parseFloat(n1);
  const numberTwo: number = parseFloat(n2);
  switch (operator) {
    case '+':
      return (numberOne + numberTwo).toString();
    case '-':
      return (numberOne - numberTwo).toString();
    case 'x':
      return (numberOne * numberTwo).toString();
    case '/':
      return (numberOne / numberTwo).toString();
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
      // disallows multiple decimals per input
      if (state.input.includes('.')) {
        return state;
      }
      return {
        ...state,
        input: state.input.concat(action.input),
      };
    case INPUT_OPERATOR:
      // checks to see if input is first operation
      if (state.previousInput === null
          || state.operator === null
          || state.input === ''
          || state.input === '-') {
        // inserts negative operator in front of input
        if (state.operator !== null && action.operator === '-') {
          return {
            ...state,
            input: action.operator + state.input,
          };
        }

        // if input is empty, update operator
        if (state.input === '') {
          return {
            ...state,
            operator: action.operator,
          };
        }

        // if input has subtract and new input,
        // empty input and update inpyt
        if (state.input === '-') {
          return {
            ...state,
            input: '',
            operator: action.operator,
          };
        }

        // if update is first operation and not negative
        return {
          input: '',
          previousInput: state.input,
          operator: action.operator,
        };
      }

      // allows consecutive operations
      // i.e. 2 + 2 + 2 = 6
      return {
        input: '',
        previousInput: calculate(state.previousInput, state.operator, state.input),
        operator: action.operator,
      };

    case INPUT_EQUALS:
      // if equals is inputed pre-maturely, do nothing
      if (state.previousInput === null || state.operator === null || state.input === '') {
        return state;
      }

      return {
        input: calculate(state.previousInput, state.operator, state.input),
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
