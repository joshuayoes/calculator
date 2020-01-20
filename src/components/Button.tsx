import React from 'react';
import { connect } from 'react-redux';
import { inputNumber } from '../redux/actions';

interface Props {
  value: string;
  title: string;
  dispatch: any;
  action?: any;
}

const Button: React.FC<Props> = ({
  value, title, dispatch, action,
}) => (
  <button
    key={title}
    type="button"
    id={title}
    onClick={(): void => dispatch(action)}
  >
    {value}
  </button>
);

export default connect()(Button);
