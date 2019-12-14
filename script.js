var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.getElementById("minute");
var SECONDHAND = document.getElementById("second");

function getCurrentDateAndPosition(){
    
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    var seconds = new Date().getSeconds()

    var degreeSeconds = (360/60)*parseInt(seconds)
    var degreeminutes = (360/60)*parseInt(minutes)+(degreeSeconds/60)
    var degreehours = (360/12)*parseInt(hours)+(degreeminutes/12)    

    
     
    HOURHAND.style.transform = "rotate("+degreehours+"deg)";
    MINUTEHAND.style.transform = "rotate("+degreeminutes+"deg)";
    SECONDHAND.style.transform = "rotate("+degreeSeconds+"deg)";

    }
    
setInterval(getCurrentDateAndPosition, 1000)


