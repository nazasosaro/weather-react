import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${city} is ${response.data.main.temp}`);
  }
  let city = props.city;
  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(handleResponse);
  return <ThreeDots height="80" width="80" color="red" wrapperClass />;
}
