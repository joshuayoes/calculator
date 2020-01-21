import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import buttons from './buttons';
import Button from './components/Button';
import { clearDisplay, inputEquals } from './redux/actions';

interface Props {
  input?: string;
  dispatch: any;
}

const App: React.FC<Props> = ({ input, dispatch }) => (
  <main>
    <section id="display">{ input }</section>
    <button type="button" id="equals" onClick={(): void => dispatch(inputEquals(input))}>=</button>
    <button type="button" id="clear" onClick={(): void => dispatch(clearDisplay())}>AC</button>
    {buttons.map((button) => (
      <Button
        key={button.title}
        value={button.value}
        title={button.title}
        action={button.action}
      />
    ))}
  </main>

);

const mapStateToProps = (state: any): object => ({
  input: state.input,
});

export default connect(mapStateToProps)(App);
