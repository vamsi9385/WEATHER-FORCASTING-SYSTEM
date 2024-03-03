const Location=document.getElementById("search")
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apikey="9825fdc91b4bd98c72e4af4a865d312a"





async function checkweather(city){
    const response=await fetch(apiUrl+ city +`&appid=${apikey}`)
    var data=await response.json();
    document.querySelector(".weather__temperature").innerHTML=Math.ceil(data.main.temp)
    document.querySelector(".weather__forecast").innerHTML=city
    document.querySelector(".Min ").innerHTML="min : "+Math.ceil(data.main.temp_min)
    document.querySelector(".Max ").innerHTML="max : "+Math.ceil(data.main.temp_max)
    document.querySelector(".weather__realfeel ").innerHTML=Math.ceil(data.main.feels_like)
    document.querySelector(".weather__humidity").innerHTML=Math.ceil(data.main.humidity)
    document.querySelector(".weather__wind").innerHTML=Math.ceil(data.wind.speed)
    document.querySelector(".weather__pressure").innerHTML=Math.ceil(data.main.pressure)

}








var button=document.getElementById("button1")
button.addEventListener("click", ()=>{
    checkweather(Location.value)
});














