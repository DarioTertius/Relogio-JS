let watch = document.querySelector('#watch')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart  = document.querySelector('#sSmart')

let date = document.querySelector('#date')
let week = document.querySelector('#week')

let dateHour = new Date()

function moveWatch() {

    let nowMoment = new Date()

    let hour = nowMoment.getHours()
    let minute = nowMoment.getMinutes()
    let second = nowMoment.getSeconds()

    let strHour = new String (hour)
    let strMinutes = new String (minute)
    let strSec = new String (second)

    if (strHour.length == 1) hour = "0" + hour
    if (strMinutes.length == 1) minute = "0" + minute
    if (strSec.length == 1) second = "0" + second
    
    h.textContent = hour
    m.textContent = minute
    s.textContent = second

    hSmart.textContent = hour
    mSmart.textContent = minute
    sSmart.textContent = second
    
    setTimeout("moveWatch()", 1000)
}

function getDate(){
    let dayofWeek = dateHour.getDay()
    let day = dateHour.getDate()
    let mouth = dateHour.getMonth() + 1;
    let year = dateHour.getFullYear()

    let strDay = new String (day)
    let strMouth = new String (mouth)

   // if(strDay.length ==1) mouth = '0' + day
    //if(strMouth.length == 1) mouth = '0' + mouth

    switch(dayofWeek){
        case 0:
            dayofWeek = 'DOM'
            break;
        case 1:
            dayofWeek = 'SEG'
            break;
        case 2:
            dayofWeek = 'TER'
            break;
        case 3:
            dayofWeek = 'QUA'
            break;
        case 4:
            dayofWeek = 'QUI'
            break;
        case 5:
            dayofWeek = 'SEX'
            break;
        case 6:
            dayofWeek = 'SAB'
            break;                        
    }

    let dateActual = `${day} / ${mouth} / ${year}`

    week.textContent = dayofWeek
    date.textContent = dateActual

}

getDate()

var options ={
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}

let teste = new Date()

console.log(teste.toLocaleString('pt-BR'))
console.log(teste.toLocaleDateString('pt-BR', options))
console.log(teste.toLocaleDateString('pt-BR'))
console.log(teste.toLocaleTimeString('pt-BR'))


const api = {
    key: "4042803c4430538da4324d5ad6f1df67",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

const controlTemperature = document.querySelector('#temperature')
const city = document.querySelector('#city')
const temp = document.querySelector('#temp')
const umidade = document.querySelector('#umid')

function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      let key = "4042803c4430538da4324d5ad6f1df67"
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=4042803c4430538da4324d5ad6f1df67`
      fetchApi(url)
      console.log(url)
    })
  }
  
  function fetchApi(url) {
    let city = document.querySelector('.city')
    let temperature = document.querySelector('#temp')
    let humidity = document.querySelector('#umidad')
  
    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      
      city.innerHTML      = data.name
      temperature.innerHTML = tempInCelsius
      humidity.innerHTML    = data.main.humidity
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temperature.innerHTML = `-`;
    })
  }
  
  getUserPosition();


