// let arrayOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function onloadFunc() {


$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
			console.log(data);
			let temp = Math.round(data.main.temp);
			let min = Math.round(data.main.temp_min);
			let max = Math.round(data.main.temp_max);
			document.querySelector(".absulute-name").innerHTML = data.name ;
			document.querySelector(".absulute-Temp").innerHTML = temp + "&#176;";
			document.querySelector(".absulte-des").innerHTML = data.weather[0].description;
			document.querySelector(".absulte-max").innerHTML = max + "&#176;";
			document.querySelector(".absulte-min").innerHTML = min + "&#176;";
			// document.querySelector(".dt").innerHTML = time;
                    // document.getElementById("wind").innerHTML = data.wind.speed;
                    

                    let weatherType = data.weather[0].icon;
                    if(weatherType =="01d" || weatherType == "01n"){
                    	document.querySelector(".absulute-icon").src ="https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                    }
                    else if(weatherType =="02d" || weatherType == "02n"){
                    	document.querySelector(".absulute-icon").src ="https://png.icons8.com/wired/50/ffffff/clouds.png";
                    }
                    else if(weatherType == "03d" || weatherType == "03n"){
                    	document.querySelector(".absulute-icon").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                    }
                    else if(weatherType == "04d" || weatherType == "04n"){
                    	document.querySelector(".absulute-icon").src = "img/broken-cloud.png";
                    }
                    else if(weatherType == "09d" || weatherType == "09n"){
                    	document.querySelector(".absulute-icon").src ="https://png.icons8.com/wired/50/ffffff/rain.png";
                    }
                    else if(weatherType == "10d" || weatherType == "010n"){
                    	document.querySelector(".absulute-icon").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                    }
                    else if(weatherType == "11d" || weatherType == "11n"){
                    	document.querySelector(".absulute-icon").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                    }
                    else if(weatherType == "13d" || weatherType == "13n"){
                    	document.querySelector(".absulute-icon").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                    }
                    else if(weatherType == "50d" || weatherType == "50n"){
                    	document.querySelector(".absulute-icon").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";

                    }
                },
                error: function(error){
                	alert(error.responseJSON.message);
                }
                
            })

	for (let i=0; i<24; i++) {
		document.querySelector(".forecast-secnd-div").innerHTML += 
		`<span class="loop-span">
		<span class='loop-span-child'>6PM</span>
		<span class='main-sec-icon'></span>
		<span class='loop-span-child'>57°</span>
		</span>`
	}	
	showTime();

}

function search() {
	let userInp = document.querySelector("input").value;
	if(userInp === "") {
		alert("empty bar");
	}
	else {
		document.querySelector("strong").style.display = "block";
		document.querySelector("input").value = "";
		document.querySelector(".main-content-article").style.display = "inline-block";
		document.querySelector(".absulte").style.display = "none";
	}
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=" +userInp+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
			console.log(data);
			let temp = Math.round(data.main.temp);
			let min = Math.round(data.main.temp_min);
			let max = Math.round(data.main.temp_max);
			let time = new Date();
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
                    	document.querySelector(".weatherIcon").src = "img/broken-cloud.png";
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


	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast?q=" +userInp+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
			console.log(data);
			let d1 = new Date(data.list[0].dt*1000);
			let d2 = new Date(data.list[8].dt*1000);
			let d3 = new Date(data.list[16].dt*1000);
			let d4 = new Date(data.list[24].dt*1000);
			let d5 = new Date(data.list[32].dt*1000);

			document.querySelector(".day-mon").innerHTML = days[d1.getDay()];
			document.querySelector(".day-tues").innerHTML = days[d2.getDay()];
			document.querySelector(".day-wed").innerHTML = days[d3.getDay()];
			document.querySelector(".day-thus").innerHTML = days[d4.getDay()];
			document.querySelector(".day-fri").innerHTML = days[d5.getDay()];
			document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[0].main.temp) + "&#176;" + "/" + Math.round(data.list[2].main.temp) + "&#176;" ;
			document.querySelector(".pre-temp-tues").innerHTML = Math.round(data.list[5].main.temp) + "&#176;" + "/" + Math.round(data.list[6].main.temp) + "&#176;" ;
			document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[13].main.temp) + "&#176;" + "/" + Math.round(data.list[14].main.temp) + "&#176;" ;
			document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[21].main.temp) + "&#176;" + "/" + Math.round(data.list[22].main.temp) + "&#176;" ;
			document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[29].main.temp) + "&#176;" + "/" + Math.round(data.list[32].main.temp) + "&#176;" ;

			// document.querySelector(".pre-wind-mon").innerHTML = data.list[0].wind.speed;
			// document.querySelector(".pre-wind-tue").innerHTML = data.list[8].wind.speed;
			// document.querySelector(".pre-wind-wed").innerHTML = data.list[16].wind.speed;
			// document.querySelector(".pre-wind-thus").innerHTML = data.list[24].wind.speed;
			// document.querySelector(".pre-wind-fri").innerHTML = data.list[32].wind.speed;

			// document.querySelector(".pre-cloud-mon").innerHTML = data.list[0].weather[0].description;
			// document.querySelector(".pre-cloud-tue").innerHTML = data.list[8].weather[0].description;
			// document.querySelector(".pre-cloud-wed").innerHTML = data.list[16].weather[0].description;
			// document.querySelector(".pre-cloud-thus").innerHTML = data.list[24].weather[0].description;
			// document.querySelector(".pre-cloud-fri").innerHTML = data.list[32].weather[0].description;


			let forecast1 = data.list[0].weather[0].icon;
			if(forecast1 == "01d" || forecast1 == "01n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/ios/50/ffffff/sun-filled.png";
			}
			else if(forecast1 == "02d" || forecast1 == "02n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/wired/50/ffffff/clouds.png";
			}
			else if(forecast1 == "03d" || forecast1 == "03n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
			}
			else if(forecast1 == "04d" || forecast1 == "04n"){
				document.querySelector(".icons-mon").src = "img/broken-cloud.png";
			}
			else if(forecast1 == "09d" || forecast1 == "09n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/wired/50/ffffff/rain.png";
			}
			else if(forecast1 == "10d" || forecast1 == "10n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
			}
			else if(forecast1 == "11d" || forecast1 == "11n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
			}
			else if(forecast1 == "13d" || forecast1 == "13n"){
				document.querySelector(".icons-mon").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
			}
			else if(forecast1 == "50d" || forecast1 == "50n"){
				document.querySelector(".icons-mon").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
			}
                        //for day 2

                        let forecast2 = data.list[8].weather[0].icon;

                        if(forecast2 == "01d" || forecast2 == "01n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                        }
                        else if(forecast2 == "02d" || forecast2 == "02n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/wired/50/ffffff/clouds.png";
                        }
                        else if(forecast2 == "03d" || forecast2 == "03n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                        }
                        else if(forecast2 == "04d" || forecast2 == "04n"){
                        	document.querySelector(".icons-tue").src = "img/broken-cloud.png";
                        }
                        else if(forecast2 == "09d" || forecast2 == "09n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/wired/50/ffffff/rain.png";
                        }
                        else if(forecast2 == "10d" || forecast2 == "10n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                        }
                        else if(forecast2 == "11d" || forecast2 == "11n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                        }
                        else if(forecast2 == "13d" || forecast2 == "13n"){
                        	document.querySelector(".icons-tue").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                        }
                        else if(forecast2 == "50d" || forecast2 == "50n"){
                        	document.querySelector(".icons-tue").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
                        }
                    //for 3 day


                    let forecast3 = data.list[16].weather[0].icon;
                    
                    if(forecast3 == "01d" || forecast3 == "01n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                    }
                    else if(forecast3 == "02d" || forecast3 == "02n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/wired/50/ffffff/clouds.png";
                    }
                    else if(forecast3 == "03d" || forecast3 == "03n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                    }
                    else if(forecast3 == "04d" || forecast3 == "04n"){
                    	document.querySelector(".icons-wed").src = "img/broken-cloud.png";
                    }
                    else if(forecast3 == "09d" || forecast3 == "09n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/wired/50/ffffff/rain.png";
                    }
                    else if(forecast3 == "10d" || forecast3 == "10n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                    }
                    else if(forecast3 == "11d" || forecast3 == "11n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                    }
                    else if(forecast3 == "13d" || forecast3 == "13n"){
                    	document.querySelector(".icons-wed").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                    }
                    else if(forecast3 == "50d" || forecast3 == "50n"){
                    	document.querySelector(".icons-wed").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
                    }

                        //for 4 day


                        let forecast4 = data.list[24].weather[0].icon;

                        if(forecast4 == "01d" || forecast4 == "01n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                        }
                        else if(forecast4 == "02d" || forecast4 == "02n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/wired/50/ffffff/clouds.png";
                        }
                        else if(forecast4 == "03d" || forecast4 == "03n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                        }
                        else if(forecast4 == "04d" || forecast4 == "04n"){
                        	document.querySelector(".icons-thus").src = "img/broken-cloud.png";
                        }
                        else if(forecast4 == "09d" || forecast4 == "09n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/wired/50/ffffff/rain.png";
                        }
                        else if(forecast4 == "10d" || forecast4 == "10n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                        }
                        else if(forecast4 == "11d" || forecast4 == "11n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                        }
                        else if(forecast4 == "13d" || forecast4 == "13n"){
                        	document.querySelector(".icons-thus").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                        }
                        else if(forecast4 == "50d" || forecast2 == "50n"){
                        	document.querySelector(".icons-thus").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
                        }	

                   //for 5 day
                   let forecast5 = data.list[32].weather[0].icon;

                   if(forecast5 == "01d" || forecast5 == "01n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/ios/50/ffffff/sun-filled.png";
                   }
                   else if(forecast5 == "02d" || forecast5 == "02n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/wired/50/ffffff/clouds.png";
                   }
                   else if(forecast5 == "03d" || forecast5 == "03n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
                   }
                   else if(forecast5 == "04d" || forecast5 == "04n"){
                   	document.querySelector(".icons-fri").src = "img/broken-cloud.png";
                   }
                   else if(forecast5 == "09d" || forecast5 == "09n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/wired/50/ffffff/rain.png";
                   }
                   else if(forecast5 == "10d" || forecast5 == "10n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
                   }
                   else if(forecast5 == "11d" || forecast5 == "11n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
                   }
                   else if(forecast5 == "13d" || forecast5 == "13n"){
                   	document.querySelector(".icons-fri").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
                   }
                   else if(forecast5 == "50d" || forecast5 == "50n"){
                   	document.querySelector(".icons-fri").src = "https://www.dovora.com/resources/weather-icons/showcase/simplistic_showcase/mist.png";
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
