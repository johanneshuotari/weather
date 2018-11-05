const form = document.getElementById('form');
const inputField = document.getElementById('city');
const weatherContainer = document.getElementById('weather');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];


// API 
const apiKey = 'XXXXXXXXXX';
const url = ' https://api.apixu.com/v1/forecast.json?key=';



const getWeather = () => {
    const city = inputField.value;
    const endpoint = `${url}${apiKey}&q=${city}&days=7`;

    return fetch(endpoint).then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message))
        .then(jsonResponse => {
            console.log(jsonResponse);
            const days = jsonResponse.forecast.forecastday;
            console.log(days);
            return days;
        })
}





const renderWeather = days => {
    days.forEach(day => {

        const weatherContent = createWeatherHTML(day);

        weatherContainer.innerHTML += weatherContent;
    });
}




const executeSearch = event => {
    event.preventDefault();
    while (weatherContainer.firstChild) {
        weatherContainer.removeChild(weatherContainer.firstChild);
    }
    getWeather().then(days => {
        renderWeather(days);
    });


}






form.addEventListener('submit', executeSearch);