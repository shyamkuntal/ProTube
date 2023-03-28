import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// const axios = require("axios");

const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp',hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '29f1954ae0msh2e28f516ca5fc60p1b134cjsnceaae6f77c6b',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
//  }); 

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};