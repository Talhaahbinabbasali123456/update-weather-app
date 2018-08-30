let arrayOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function onloadFunc() {
	for (let i=0; i<24; i++) {
		document.querySelector(".forecast-secnd-div").innerHTML += 
		`<span class="loop-span">
		<span class='loop-span-child'>6PM</span>
		<span class='main-sec-icon'></span>
		<span class='loop-span-child'>57°</span>
		</span>`
	}	
	for (let i=0; i<6; i++) {
		document.querySelector(".forecast-tem").innerHTML +=
		`<div class='forecast-days-div'>
		<span class='days-span-1'>${arrayOfDays[i]}</span>
		<div class='days-span-2'>
		<span class='main-sec-icon'></span>
		</div>
		<span class='days-span-3'>57°/45°</span>
		</div>`;
	}
	showTime();

}
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function search() {
	let userInp = document.querySelector("input").value;
	if(userInp === "") {
		alert("empty bar");
	}
	else {
		// document.querySelector(".city-name").innerHTML = userInp;
		document.querySelector("strong").style.display = "block";
		document.querySelector("input").value = "";
		document.querySelector(".main-content-article").style.display = "inline-block";
		document.querySelector(".absulte").style.display = "none";
	}


				let city = document.querySelector("input").value;
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/weather?q=" +userInp+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
                    success: function(data){
                    console.log(data);
                    let temp = Math.round(data.main.temp);
                    let min = Math.round(data.main.temp_min);
                    let max = Math.round(data.main.temp_max);
                    let time = new Date(data.dt*1000);
                    document.querySelector(".city-name").innerHTML = userInp ;
                    document.querySelector(".temp").innerHTML = temp + "&#176;";
                    document.querySelector(".wheather").innerHTML = data.weather[0].description;
                    document.querySelector(".max").innerHTML = max + "&#176;";
                    document.querySelector(".min").innerHTML = min + "&#176;";
                    document.querySelector(".dt").innerHTML = time;
                    // document.getElementById("wind").innerHTML = data.wind.speed;
                    

                    let weatherType = data.weather[0].icon;
                if(weatherType =="01d" || weatherType == "01n"){
                    document.querySelector(".weatherIcon").src ="https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                }
                else if(weatherType =="02d" || weatherType == "02n"){
                    document.querySelector(".weatherIcon").src ="https://png.icons8.com/wired/50/ffffff/clouds.png";
                }
                else if(weatherType == "03d" || weatherType == "03n"){
                    document.querySelector(".weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                }
                else if(weatherType == "04d" || weatherType == "04n"){
                    document.querySelector(".weatherIcon").src = "images/icons/broken-cloud.png";
                }
                else if(weatherType == "09d" || weatherType == "09n"){
                    document.querySelector(".weatherIcon").src ="https://png.icons8.com/wired/50/ffffff/rain.png";
                }
                else if(weatherType == "10d" || weatherType == "010n"){
                    document.querySelector(".weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                }
                else if(weatherType == "11d" || weatherType == "11n"){
                    document.querySelector(".weatherIcon").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                }
                else if(weatherType == "13d" || weatherType == "13n"){
                    document.querySelector(".weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                }
                else if(weatherType == "50d" || weatherType == "50n"){
                    document.querySelector(".weatherIcon").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
                    
                }
                    },
                    error: function(error){
                        alert(error.responseJSON.message);
                    }
                
                })

	
}
function mySubmitFunction() {
	return false;
}
function showTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session;
	let dayImg = "img/day-time.jpeg";
	let nightImg = "img/night.jpg";



	if (h > 11) {
		session = "PM";
	}
	else{
		session = "AM";
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.querySelector(".time").innerText = time;
	document.querySelector(".time").textContent = time;
	
	setTimeout(showTime, 1000);
	
	if ((h>6) && (h<18) && (m < 60)){
		document.querySelector("body").style["background-image"] = `url(${dayImg})`
		document.querySelector(".article-gradient-layout").style.background = `linear-gradient(to bottom, #a8c5d1, #8a4217)`;
	}
	else {
		document.querySelector("body").style["background-image"] = `url(${nightImg})`
		document.querySelector(".article-gradient-layout").style.background = `linear-gradient(to bottom, #3148a8, #6988d8)`;
		document.querySelector("input").style["background-color"] = `#2f4399a6`;
		document.querySelector("button").style["background-color"] = `#2f4399a6`;
	}
}
