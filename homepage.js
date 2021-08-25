var date = new Date();

var monthDays = document.querySelector(".days");

var months = ["January",
              "February", 
              "March", 
              "May", 
             "June", 
             "July", 
             "August", 
             "September", 
             "October", 
             "November", 
             "December"];
			 document.querySelector('.date h1').innerHTML =months[date.getMonth()];
             document.querySelector('.date p').innerHTML = date.toDateString();
			 
var days ="";

for (var i =1; i <= 31; i++){
	days += "<div>${i}</div>";
	monthDays.innerHTML = days;
}

	