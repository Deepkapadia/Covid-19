import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
    
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

//Destructuring data from api like 
// Method 1
// const {data} = await axios.get(url);
// const modifiedData = {
//     confirmed: data.confirmed,
//     recovered: data.recovered,
//     deaths: data.deaths,
//     lastUpdate: data.lastUpdate,
// }
//Method 2 
// const modifiedData = { confirmed, recovered, deaths, lastUpdate }
//Method 3 
// return{ confirmed, recovered, deaths, lastUpdate }

//------ Fetch Datas for sigle purpose ------ 
// export const fetchData = async () =>{
//     try{
//         const {data: { confirmed , recovered, deaths, lastUpdate }} = await axios.get(url);
//         return { confirmed, recovered, deaths, lastUpdate };
//     }catch (error){
//         console.log(error);
//     }
// }