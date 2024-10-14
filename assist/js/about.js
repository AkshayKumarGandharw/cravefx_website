//check connectivity first
console.log("connect properly...");

// code for our team section

var body = document.getElementById('body');
var team_section = document.getElementById('team_section');
var team_img = document.getElementById('team_img');
var windowWidth = window.innerWidth;
var windowHieght = window.innerHeight;

function move_my_team_img(event){
    var mouseXposition = event.offsetX;
    var mouseYposition = event.offsetY;
    var calculateX = mouseXposition /(windowWidth/5);
    var calculateY = mouseYposition / (windowHieght/5);

    team_img.style.transform= "translate(-"+calculateX.toString() +"%,-"+calculateY.toString() +"%)";
}

body.addEventListener('mousemove',move_my_team_img);
