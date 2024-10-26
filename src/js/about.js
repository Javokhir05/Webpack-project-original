import "../css/main.css"
import "./mode"
import request from "./request";

import { createCountryInfo } from "./updateUI"

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get("country")

const counrtyAPI = `https://restcountries.com/v3.1/${country}`
 
request(counrtyAPI).then((data) => {
    createCountryInfo(data[0])
}).catch((error) => {
    alert(error.message)
});
