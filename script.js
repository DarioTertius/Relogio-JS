const clockContainer = document.querySelector('.clock-container')
const dateContainer = document.querySelector('.date-container')

const formatTimeUnit = unit => String(unit).length ===1 ? `0${unit}` : unit

const getClockHTML = (hours, minutes, sec) => `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(sec)}</span>
`
const getDateHTML = (day, month, year) => `
    <span>${formatTimeUnit(day)}</span>
    <span>${formatTimeUnit(month)}</span>
    <span>${formatTimeUnit(year)}</span>
`

const updateClock = () =>{
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const sec = present.getSeconds()
    const day = present.getDay()
    const month = present.getMonth()
    const year = present.getFullYear()

dateContainer.innerHTML = getDateHTML(day,month, year)     
clockContainer.innerHTML =  getClockHTML(hours, minutes, sec)


}



setInterval(updateClock, 1000)