
Chart.defaults.global.defaultFontColor='gray'


/////////////////////////////////////* HOURLY */////////////////////////////////////

let hourly=document.getElementById('hourly').getContext('2d');
let hourlyLineChart = new Chart(hourly, {
	type: 'line',

	data: {
		labels: ['','00:00-03:00', '03:00-06:00', '06:00-09:00', '09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00','21:00-00:00'],
		datasets: [{
			backgroundColor: 'rgb(103,135,167,0.3)',
			borderColor: '#6787A7',
			pointRadius: [0,4,4,4,4,4,4,4,4,4,4,4],
			pointBackgroundColor: 'white',
			lineTension: 0,
			data: [0, 100, 50, 300, 700, 1369, 1200, 800, 669]
		}]
	},
	options: {
		maintainAspectRatio: false,
		legend: false,
		scales: {
			yAxes: [{
				gridLines: {
					drawTicks: false,
					beginAtZero: true
				},
				ticks: {
					suggestedMax: 2000,
					stepSize: 250,
					padding: 10,
					callback: function(value, index) {
						if (value !== 0) return value;
					}
				}
			}],
			xAxes: [{
				gridLines: {
					tickMarkLength: 8,
					drawTicks: false
				},
				ticks: {
					padding: 10
				}
			}]
		}
	}
});

/////////////////////////////////////* DAILY */////////////////////////////////////

let daily=document.getElementById('daily').getContext('2d');
let dailyLineChart = new Chart(daily, {
	type: 'line',

	data: {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		datasets: [{
			backgroundColor: 'rgb(103,135,167,0.3)',
			borderColor: '#6787A7',
			pointRadius: 4,
			pointBackgroundColor: 'white',
			lineTension: 0,
			data: [2304, 3837, 2318, 4848, 5546, 4444, 3123, 1234]
		}]
	},

	options: {
		maintainAspectRatio: false,
		legend: false,
		scales: {
			yAxes: [{
				gridLines: {
					drawTicks: false
				},
				ticks: {
					suggestedMax: 6000,
					stepSize: 750,
					padding: 10,
				}
			}],
			xAxes: [{
				gridLines: {
					tickMarkLength: 8,
					drawTicks: false
				},
				ticks: {
					padding: 10
				}
			}]
		}
	}
});

/////////////////////////////////////* WEEKLY */////////////////////////////////////

let weekly=document.getElementById('weekly').getContext('2d');
let weeklyLineChart = new Chart(weekly, {
	type: 'line',
	data: {
		labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
		datasets: [{
			backgroundColor: 'rgb(103,135,167,0.3)',
			borderColor: '#6787A7',
			pointRadius: 4,
			pointBackgroundColor: 'white',
			lineTension: 0,
			data: [21203, 18393, 21020, 25060, 16969, 18000, 17293]
		}]
	},
	options: {
		maintainAspectRatio: false,
		legend: false,
		scales: {
			yAxes: [{
				gridLines: {
					drawTicks: false
				},
				ticks: {
					suggestedMax: 28000,
					stepSize: 1750,
					padding: 10,
					callback: function(value, index) {
						if (value !== 0) return value;
					}
				}
			}],
			xAxes: [{
				gridLines: {
					tickMarkLength: 8,
					drawTicks: false
				},
				ticks: {
					padding: 10
				}
			}]
		}
	}
});

/////////////////////////////////////* MONTHLY */////////////////////////////////////

let monthly=document.getElementById('monthly').getContext('2d');
let monthlyLineChart = new Chart(monthly, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep','Oct','Nov','Dec'],
		datasets: [{
			backgroundColor: 'rgb(103,135,167,0.3)',
			borderColor: '#6787A7',
			pointRadius: 4,
			pointBackgroundColor: 'white',
			lineTension: 0,
			data: [60000, 50000, 78000, 79000, 85000, 69000, 69000, 75000, 65000, 60000, 67000, 58000]
		}]
	},
	options: {
		maintainAspectRatio: false,
		legend: false,
		scales: {
			yAxes: [{
				gridLines: {
					drawTicks: false
				},
				ticks: {
					suggestedMax: 80000,
					stepSize: 5000,
					padding: 10,
					callback: function(value, index) {
						if (value !== 0) return value;
					}
				}
			}],
			xAxes: [{
				gridLines: {
					tickMarkLength: 8,
					drawTicks: false
				},
				ticks: {
					padding: 10
				}
			}]
		}
	}
});



/////////////////////////////////////* DAILY TRAFFIC */////////////////////////////////////

let bar=document.getElementById('bar-chart').getContext('2d');
let myBarChart = new Chart(bar, {
	type: 'bar',
	data: {
		labels: ['M','T','W','T','F','S', 'S'],
		datasets: [{
			backgroundColor: '#6787A7',
			data: [2304, 3837, 2318, 4848, 5546, 4444, 3123, 1234]
		}]
	},
	options: {
		maintainAspectRatio: false,
		legend: false,
		scales: {
			yAxes: [{
				gridLines: {
					drawTicks: false
				},
				ticks: {
					max: 7000,
					min: 0,
					stepSize: 1000,
					padding: 10,
					callback: function(value, index) {
						if (value !== 0) return value;
					}
				}
			}],
			xAxes: [{
				gridLines: {
					tickMarkLength: 8,
					drawTicks: false
				},
				ticks: {
					padding: 10
				}
			}]
		}
	}
});

/////////////////////////////////////* MOBILE USERS */////////////////////////////////////

let doughnut=document.getElementById('doughnut-chart').getContext('2d');
let myDoughnutChart = new Chart(doughnut, {
	type: 'doughnut',

	data: {
		labels: ['Phones','Tablet','Desktop'],
		datasets: [{
			data: [69,69,269],
			backgroundColor: ['#98BDC0','#6787A7','#8BBD90',]
		}]
	},

	options: {
		maintainAspectRatio: false,
		legend: {
			position:'right',
			labels: {
				boxWidth: 25
			}
		}
	}
});



/////////////////////////////////////* JQUERY */////////////////////////////////////

$(document).ready (function(){
	$('#alert').delay(200);
	$('#alert').slideDown(350);
});

$(function (){
	const friends=[
		"Victoria Chambers",
		"Dale Byrd",
		"Dawn Wood",
		"Dan Oliver",
	];
	$("#autocomplete").autocomplete ({
		source: friends
	});
});


$("#alert").click(function(e){
	if (e.target.classList.contains("fa-times")) {
		$('#alert').delay().slideUp(150);
	}
});


/////////////////////////////////////* JAVASCRIPT */////////////////////////////////////

const trafficNavigation=document.getElementsByClassName("traffic-ul")[0];
const trafficChildren=trafficNavigation.children;
const charts=document.getElementsByClassName("line");
const sideNavList=document.getElementsByClassName("ul-side")[0];
const navigationChildren=sideNavList.children;
const bellIcon=document.getElementById ("drop-menu");
const dropMenu=bellIcon.children[1];
const alert=document.getElementById("alert");
const sidePath=document.getElementsByClassName("side-menu");






/////////////////////////////////////* TRAFFIC SECTION */////////////////////////////////////
trafficNavigation.addEventListener('click', function(e){
	if (e.target.tagName.toLowerCase()==="li") {
		liTarget=e.target;
		for (let i=0; i<trafficChildren.length; i+=1) {
			if (trafficChildren[i].className==="button-clicked") {
				trafficChildren[i].classList.remove("button-clicked");
				liTarget.classList.add("button-clicked");
				for (let i=0; i<charts.length; i+=1) {
					if (charts[i].id!==liTarget.textContent.toLowerCase()) {
						charts[i].style.display="none";
					} else {
						charts[i].style.display="block";
					}
				}
			}
		}
	}
});


/////////////////////////////////////* SIDE NAVIGATION */////////////////////////////////////
sideNavList.addEventListener('click', function(e){
	if (e.target.classList.contains("side-item")) {
		liNavTarget=e.target;
		for (let i=0; i<navigationChildren.length; i+=1) {
			if (navigationChildren[i].classList.contains("icon-active")) {
				navigationChildren[i].classList.remove("icon-active");
				navigationChildren[i].firstElementChild.firstElementChild.firstElementChild.removeAttribute("style");
				liNavTarget.classList.add("icon-active");
				liNavTarget.firstElementChild.firstElementChild.firstElementChild.setAttribute("style","fill: #fff;");
			}
		}
	}
});


/////////////////////////////////////* BELL ICON SETTINGS */////////////////////////////////////

bellIcon.addEventListener('click', function (event){
	if (dropMenu.style.display==="none") {
		dropMenu.style.display="block";
		event.stopPropagation();
	} 
});

document.body.addEventListener ('click', function (){
	if (dropMenu.style.display==="block") {
		dropMenu.style.display="none";
	} 
});




/////////////////////////////////////* LOCAL STORAGE */////////////////////////////////////
const searchUser=document.getElementById('autocomplete');
const messageUser=document.getElementById('message-friend');
const timezone=document.getElementById('timezone');
const send=document.querySelector('.send');
const save=document.querySelector('.save');
const switch1=document.querySelectorAll('input[type=checkbox]')[0];
const switch2=document.querySelectorAll('input[type=checkbox]')[1];

send.addEventListener('click', function() {
	if (searchUser.value && messageUser.value) {
		localStorage.setItem("user",searchUser.value);
		localStorage.setItem("message",messageUser.value);
		window.alert("Your message has been sent!");
	} else {
		window.alert("Please fill in all required fields");
	}
});

save.addEventListener('click', function() {
	if (timezone.value) {
		localStorage.setItem("timezone", timezone.value);
		localStorage.setItem("switch1", switch1.checked);
		localStorage.setItem("switch2", switch2.checked);
		window.alert("Your settings have been saved!");
		console.log(localStorage);
	}
});


function inlineStyles () {
	dropMenu.style.display = "none";
	alert.style.display="none";
	charts[1].style.display="none";
	charts[2].style.display="none";
	charts[3].style.display="none";
	sidePath[0].style.fill="#fff";
	navigationChildren[0].classList.add("icon-active");
}
function localStorageSettings () {
	console.log(localStorage);
	let searchUserValue=localStorage.getItem("user");
	let messageUserValue=localStorage.getItem("message");
	let timezoneValue=localStorage.getItem("timezone");
	let switch1Value=localStorage.getItem("switch1");
	let switch2Value=localStorage.getItem("switch2");
	if (searchUserValue !== null && messageUserValue!== null) {
		searchUser.value=searchUserValue;
		messageUser.value=messageUserValue;
	}
	if (timezoneValue!==null) {
		timezone.value=timezoneValue;
	}
	if (switch1Value!==null || switch2Value!==null) {
		switch1.checked=JSON.parse(switch1Value);
		switch2.checked=JSON.parse(switch2Value);
	}
}


/* ONLOAD SETTINGS*/
window.onload = function() {
	inlineStyles();
	localStorageSettings();
};









