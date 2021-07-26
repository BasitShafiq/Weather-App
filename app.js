
var temp = document.getElementById(`temp`)
var name = document.getElementById(`name`)
var desc=document.getElementById(`desc`)
let weather = document.getElementById(`weather`).addEventListener(`click`, GetData)
function GetData() {

    var city = document.getElementById(`city`);

    url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=0b0fe85e0c1def924a0ddfaf88d8f794`
    fetch(url2).then(function response(response) {
        console.log(`printing response`)
        return response.json();

    }).then(function data(Data) {
        var tempValue = Data[`main`][`temp`]
        tempValue = (tempValue - 273.15)
        var description=Data[`weather`][0][`description`]
        temp.innerHTML = tempValue;
        name.innerHTML - city.value;
        console.log(Data)
        desc.innerHTML = description;
    }).catch(function () {
        console.log(Error)
    })
}



