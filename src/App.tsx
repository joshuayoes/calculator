import React from 'react';
import './App.scss';

const App: React.FC = () => (
  <main>
    <section id="display" />
    <button type="button" id="equals">=</button>
    <button type="button" id="zero">0</button>
    <button type="button" id="one">1</button>
    <button type="button" id="two">2</button>
    <button type="button" id="three">3</button>
    <button type="button" id="four">4</button>
    <button type="button" id="five">5</button>
    <button type="button" id="six">6</button>
    <button type="button" id="seven">7</button>
    <button type="button" id="eight">8</button>
    <button type="button" id="nine">9</button>
    <button type="button" id="decimal">.</button>
    <button type="button" id="clear">AC</button>
    <button type="button" id="add">+</button>
    <button type="button" id="subtract">-</button>
    <button type="button" id="multiply">x</button>
    <button type="button" id="divide">/</button>
  </main>
);

export default App;
