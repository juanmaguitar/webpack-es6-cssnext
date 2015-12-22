require('../css/main.css');

import a from "./modules/modA.js";

const WHO = 'JS';
let greeter = (who) => 'Hello from ' + who + '!';

document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);

console.log("ecoooo" + a)