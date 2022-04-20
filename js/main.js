let form = document.querySelector('.form');
let input = document.querySelector('.input');
let box = document.querySelector('.box')
let sun = document.querySelector('.sun');
let body = document.querySelector('.body')
let weather = document.querySelector('.weather');
let cloud = document.querySelector('.cloud')
let max__temp = document.querySelector('.max__temp')
let desc = document.querySelector('.desc')
let windSpeed = document.querySelector('.speed')
let speedDeg = document.querySelector('.speedDeg')
let temp = document.querySelector('.weather__temprature')
let temp__min = document.querySelector('.temp__min')
let temp__max = document.querySelector('.temp__max')
let humidity = document.querySelector('.humidity')
let pressure = document.querySelector('.pressure')
let visible = document.querySelector('.visible')
let country = document.querySelector('.country')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    let ggg = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ggg}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
    .then((res)=> res.json())
    .then((data)=> {
        something(data)
    })
    .catch((err)=> {
        alert("Error: Enter the country or city name correctly, please")
    })
})
function something(data) {
    country.innerHTML = `${data.name}`
    visible.innerHTML =`Visibility: ${data.visibility}`
    data.weather.forEach((item)=> {
       
        console.log(item.visibility);
        desc.innerHTML =  `Description: ${item.description}`
        console.log(data, item.name);
       
 
        
    if(item.main=="Rain") {
     
        setTimeout(() => {
            body.classList.add('img2')
            sun.style.display ="none"
            cloud.classList.remove('d-none')
            weather.classList.add('dark')
         
        }, 2000);

    }
    if(item.main=="Hot") {
        setTimeout(() => {
            body.classList.add('img9')
            sun.style.display ="none"
            cloud.classList.remove('d-none')
            weather.classList.add('dark')
         
        }, 2000);

    }
    if(item.main=="Mist") {
        setTimeout(() => {
            body.classList.add('img7')
            sun.style.display ="none"
            cloud.classList.remove('d-none')
            weather.classList.add('dark')
         
        }, 2000);
  

    }
    if(item.main=="Fog") {
     
        setTimeout(() => {
            body.classList.add('img8')
            sun.style.display ="none"
            cloud.classList.remove('d-none')
            weather.classList.add('dark')
         
        }, 2000);

    }
    else if(item.main=="Clouds") {
        setTimeout(() => {
            body.classList.add('img3')
            sun.style.display ="none"
            cloud.classList.remove('d-none')
            weather.classList.add('dark')
        }, 2000);
    }
    else if(item.main=="Snow") {
        setTimeout(() => {
            body.classList.add('img4')
            sun.style.display ="none"
            cloud.classList.add('d-none')
            weather.classList.add('dark')
        }, 2000);
    }
    else if(item.main=="Clear") {
        setTimeout(() => {
            body.classList.add('img5')
            sun.style.display ="none"
            cloud.classList.add('d-none')
            weather.classList.add('dark')
        }, 2000);
    }
    })
    for (let i in data.wind) {
      
        if(i==="speed") {
            windSpeed.innerHTML = `Wind speed: ${data.wind[i]} km/h`
        }
        else if(i=="deg") {
            speedDeg.innerHTML = `Wind deg: ${data.wind[i]}`
        }
    }
    for (const i in data.main) {
        if(i === 'temp_min') {
            temp__min.innerHTML = `Temp_min: ${data.main[i]}°C`
        } 
        if(i === 'temp_max') {
            temp__max.innerHTML = ` Temp_max: ${data.main[i]}°C`
        } 
        if(i ==='humidity') {
            humidity.innerHTML = `Humidity: ${data.main[i]}%`
        } 
        if(i=="temp") {
            temp.innerHTML = `Temperature: ${data.main[i]}°C`
        }
        if(i=="pressure") {
            pressure.innerHTML = `Pressure: ${data.main[i]}`
        }
    }
}



