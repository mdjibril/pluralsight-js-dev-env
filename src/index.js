import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger; debugging with source-map , setting break point.
console.log(`I will pay ${courseValue} for this awesome course`);
