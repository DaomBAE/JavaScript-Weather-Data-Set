const API_Key = "0bf44a6582278a7d2cfd2bd7d0323390";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
    (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        weatherTemp.innerText = 
        data.name +"," + parseInt(data.main.temp) + "℃";
      });
    },
    () => alert("Not allowed!")
);

// ****** async, await 사용할때
// const a = async () => {
//     const response = await axios.get(url);
//     const response = await axios.get(url, {
//         lat,
//         lon,
//     },{
//         headers: {
//             key: API_Key
//         }
//     }

//     console.log(response.data);
// }