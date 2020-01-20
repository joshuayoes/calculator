import { Reducer } from 'redux';
import {
  INPUT_NUMBER, CLEAR_DISPLAY, INPUT_DECIMAL, INPUT_OPERATOR,
} from '../actionTypes';

interface Action {
  type: string;
  input: string;
  operator: string;
}

interface State {
  input: string;
  operator: string | null;
}

const intialState = {
  input: '0',
  operator: null,
};

const display: Reducer<State, Action> = (state = intialState, action): State => {
  switch (action.type) {
    case INPUT_NUMBER:
      // if state is initalState, replace it with first input
      if (state.input === '0') {
        return {
          input: action.input,
          operator: state.operator,
        };
      }
      return {
        input: state.input.concat(action.input),
        operator: state.operator,
      };
    case INPUT_DECIMAL:
      if (state.input.includes('.')) {
        return {
          input: state.input,
          operator: state.operator,
        };
      }
      return {
        input: state.input.concat(action.input),
        operator: state.operator,
      };
    case INPUT_OPERATOR:
      return {
        input: state.input,
        operator: action.operator,
      };
    case CLEAR_DISPLAY:
      return {
        input: '0',
        operator: null,
      };
    default:
      return state;
  }
};

export default display;
