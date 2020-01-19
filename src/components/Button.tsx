import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { updateDisplay } from '../redux/actions';

interface Props {
  value: string;
  title: string;
  dispatch: any;
}

const Button: React.FC<Props> = ({ value, title, dispatch }) => (
  <button
    key={title}
    type="button"
    id={title}
    onClick={(): void => dispatch(updateDisplay(value))}
  >
    {' '}
    {value}
    {' '}
  </button>
);

export default connect()(Button);
