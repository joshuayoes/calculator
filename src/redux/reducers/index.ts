import { Reducer } from 'redux';
import { INPUT_NUMBER, CLEAR_DISPLAY, INPUT_DECIMAL } from '../actionTypes';

interface Action {
  type: string;
  input: string;
}

interface State {
  input: string;
}

const intialState = {
  input: '0',
};

const display: Reducer<State, Action> = (state = intialState, action): State => {
  switch (action.type) {
    case INPUT_NUMBER:
      // if state is initalState, replace it with first input
      if (state.input === '0') {
        return {
          input: action.input,
        };
      }
      return {
        input: state.input.concat(action.input),
      };
    case INPUT_DECIMAL:
      if (state.input.includes('.')) {
        return {
          input: state.input,
        };
      }
      return {
        input: state.input.concat(action.input),
      };
    case CLEAR_DISPLAY:
      return {
        input: '0',
      };
    default:
      return state;
  }
};

export default display;
