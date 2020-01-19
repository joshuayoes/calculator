import { Reducer } from 'redux';
import { UPDATE_DISPLAY, CLEAR_DISPLAY } from '../actionTypes';

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
    case UPDATE_DISPLAY:
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