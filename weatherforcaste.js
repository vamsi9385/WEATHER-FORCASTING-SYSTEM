const Location=document.getElementById("search")
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apikey="9825fdc91b4bd98c72e4af4a865d312a"





async function checkweather(city){
    const response=await fetch(apiUrl+ city +`&appid=${apikey}`)
    var data=await response.json();

    console.log(data)
    document.querySelector(".weather__temperature").innerHTML=data.main.temp
    document.querySelector(".weather__forecast").innerHTML=city
    document.querySelector(".Min ").innerHTML="min : "+data.main.temp_min
    document.querySelector(".Max ").innerHTML="max : "+data.main.temp_max
    document.querySelector(".weather__realfeel ").innerHTML=data.main.feels_like
    document.querySelector(".weather__humidity").innerHTML=data.main.humidity
    document.querySelector(".weather__wind").innerHTML=data.wind.speed
    document.querySelector(".weather__pressure").innerHTML=data.main.pressure

}








var button=document.getElementById("button1")
button.addEventListener("click", ()=>{
    checkweather(Location.value)
});














