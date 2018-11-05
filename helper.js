const createWeatherHTML = (currentDay) => {
    return `<div class='weather'>
                <p>${weekDays[(new Date(currentDay.date)).getDay()]}</p>
                <h2>${currentDay.day.maxtemp_c}</h2>
                <img src="${currentDay.day.condition.icon}" />
                <p>${currentDay.day.condition.text}</p>
            </div>`
}