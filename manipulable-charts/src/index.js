import './style';
import { render } from 'preact';
import { TerciaryInput, LineChart, BinaryInput } from './components/index.js';

const data = [
    {x: 0, y: 0},
    {x: 10, y: 20},
    {x: 20, y: 30},
    {x: 30, y: 40},
    {x: 40, y: 60},
];

render(<>
    <BinaryInput />
</>, document.body);