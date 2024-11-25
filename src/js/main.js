import "../css/main.css";

import request from "./request";
import { createCountries } from "./updateUI";

import './filter.js'
import './mode.js'

const API = "https://restcountries.com/v3.1/all"

request(API).then((data) => {
    createCountries(data)
}).catch((error) => {
    alert(error.message)
});
console.log('Helloo Webpack');