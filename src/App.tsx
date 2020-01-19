import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import buttons from './buttons';
import Button from './components/Button';

interface Props {
  input?: string;
}

const App: React.FC<Props> = ({ input }) => (
  <main>
    <section id="display">{ input }</section>
    <button type="button" id="equals">=</button>
    <button type="button" id="clear">AC</button>
    {buttons.map((button) => <Button value={button.value} title={button.title} />)}
  </main>
);

const mapStateToProps = (state: any): object => ({
  input: state.input,
});

export default connect(mapStateToProps)(App);
