import { inputNumber, inputOperator, inputDecimal } from './redux/actions';

const buttons = [
  {
    value: '0',
    title: 'zero',
    action: inputNumber('0'),
  },
  {
    value: '1',
    title: 'one',
    action: inputNumber('1'),
  },
  {
    value: '2',
    title: 'two',
    action: inputNumber('2'),
  },
  {
    value: '3',
    title: 'three',
    action: inputNumber('3'),
  },
  {
    value: '4',
    title: 'four',
    action: inputNumber('4'),
  },
  {
    value: '5',
    title: 'five',
    action: inputNumber('5'),
  },
  {
    value: '6',
    title: 'six',
    action: inputNumber('6'),
  },
  {
    value: '7',
    title: 'seven',
    action: inputNumber('7'),
  },
  {
    value: '8',
    title: 'eight',
    action: inputNumber('8'),
  },
  {
    value: '9',
    title: 'nine',
    action: inputNumber('9'),
  },
  {
    value: '+',
    title: 'add',
    action: inputOperator('+'),
  },
  {
    value: '-',
    title: 'subtract',
    action: inputOperator('-'),
  },
  {
    value: 'x',
    title: 'multiply',
    action: inputOperator('x'),
  },
  {
    value: '/',
    title: 'divide',
    action: inputOperator('/'),
  },
  {
    value: '.',
    title: 'decimal',
    action: inputDecimal('.'),
  },
];

export default buttons;
