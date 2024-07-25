// Activity 1
import { add } from './Task1.js';
console.log(add(2, 3));

import Person from './Task2.js';
const person = new Person('Alice', 30);
person.greet();

// Activity 2

import { addTwo, subtract } from './Task3.js';

console.log(addTwo(5, 3));
console.log(subtract(5, 3));

import greet from './Task4.js';

greet('Bob');

// Activity 3

import * as utils from './Task5.js';

console.log(utils.PI);
console.log(utils.square(4));

// Activity 4

import pkg from 'lodash';
const { sum } = pkg
console.log(sum([1, 2, 3]));

import axios from 'axios';

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error");
    });



