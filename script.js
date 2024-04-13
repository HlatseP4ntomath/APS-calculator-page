const display = document.querySelector("#display") ;
const display2 = document.querySelector("#display2") ;
const button = document.querySelector("#btn")
const university = document.querySelector("#uni");
var a = 5;

var Selected_Uni;
university.addEventListener("change",function(){
    Selected_Uni = university.options[university.selectedIndex].text;

});
function SubjectValues(ID){

    var Subject = document.getElementById(ID);
    if(Subject == null){
      return "";
    }else {
      return Subject.options[Subject.selectedIndex].value;
    }
}
function Score(mark){
    if(mark === -1){
        return 0;
    }else if (mark < 30) {
        return 1;
    }else if(mark < 40){
        return 2;
    }else if(mark < 50){
        return 3;
    }else if(mark < 60){
        return 4;
    }else if (mark < 70){
        return 5
    }else if(mark < 80){
        return 6
    }else if (mark > 79){
        return 7;
    }else {
      return 0;}

}
var sum = 0;
function Inc_Life_Orientation(){

    if(Selected_Uni === "University Of Witswatersrand"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);
            mark = mark < 40? -1 : mark;
            if (SubjectValue === "English" || SubjectValue === "Mathematics"){
                sum += Score(mark) > 4 ? 2 : 0;
            }else if(SubjectValue === "LIfe Orientation" ){
                if(mark == 100){
                  mark = mark - 50;
                }else {
                  mark = mark > 59 && mark != 100 ? mark-40 : -1;}}
            sum += mark > 89? 1 : 0;
            sum += Score(mark);
          }
          
            if(isNaN(sum)){
                sum = 0}
            display.innerHTML = sum;}

    else if (Selected_Uni === "University Of Cape Town"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            mark = mark < 40 ? 0 : mark;

            sum += mark;
        }if(isNaN(sum)){
            sum = 0}
        display.innerHTML = sum;}

    else if(Selected_Uni ==="North West University" 
          || Selected_Uni ==="University Of Free State"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            sum += mark > 89? 1 : 0;
            sum += Score(mark);
        }if(isNaN(sum)){
            sum = 0}
        display.innerHTML = sum;}

    else if(Selected_Uni === "Nelson Mandela University"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            sum += mark;
        }if(isNaN(sum)){
            sum = 0}
        display.innerHTML = sum;}

    else{
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            sum += Score(mark);
        }if(isNaN(sum)){
            sum = 0}
        display.innerHTML = sum;}
  sum = 0;
}

function Exc_Life_Oriantation(){
    if(Selected_Uni === "University Of Witswatersrand"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);

            mark = mark < 40? -1 : mark;

            if (SubjectValue === "English" || SubjectValue === "Mathematics"){
                sum += Score(mark) > 4 ? 2 : 0;
            }
            else if(SubjectValue ==="LIfe Orientation"){
              if(mark == 100){
                mark = mark - 50;
              }else {
                mark = mark > 59 && mark != 100 ? mark-40 : -1;}
                sum -= Score(mark);
            }

            sum += mark > 89? 1 : 0;
            sum += Score(mark);}
            if(isNaN(sum)){
                sum = 0}
            display2.innerHTML = sum;}
    else if(Selected_Uni === "University Of Cape Town"){

        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);

            if (SubjectValue === "LIfe Orientation"){
                sum -= mark ;}

            mark = mark < 40 ? 0 : mark;

            sum += mark;
        }if(isNaN(sum)){
            sum = 0}
        display2.innerHTML = sum;}
    else if(Selected_Uni ==="North West University" 
    || Selected_Uni ==="University Of Free State"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);

            if (SubjectValue ==="LIfe Orientation"){
                sum -= Score(mark) ;}
            sum += mark > 89? 1 : 0;
            sum += Score(mark);
        }if(isNaN(sum)){
            sum = 0}
        display2.innerHTML = sum;}
    else if(Selected_Uni === "Nelson Mandela University"){
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);

            if (SubjectValue === "LIfe Orientation"){
                sum -= mark ;}

            sum += mark;
        }if(isNaN(sum)){
            sum = 0}
        display2.innerHTML = sum;}
    else{
        for(var i = 1; i <= 7 ; i++){
            var string = i.toString();
            var SubjectMark = "SubjectMark" + string;
            var mark = parseInt(document.getElementById(SubjectMark).value);
            var SubjectValue = SubjectValues("subject"+ string);

            if (SubjectValue ==="LIfe Orientation"){
                sum -= Score(mark) ;}
            sum += Score(mark);
        }if(isNaN(sum)){
            sum = 0}
        display2.innerHTML = sum;}
        sum = 0;
}


button.addEventListener("click",function(){
  Inc_Life_Orientation();
  Exc_Life_Oriantation();
})


var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src = "sun-3-xxl.png";
    }else{
        icon.src = "moon-icon-23628.jpg";
    }
}

const nav = document.getElementById("nav");
const bar = document.getElementById("menubtn");
const main = document.getElementById("main");


function openSidebar() {
    nav.style.left = "0";
  }
  function closeSidebar() {
    nav.style.left = "-250px";
  }

  
  bar.addEventListener("click", openSidebar);
  
  main.addEventListener("click", function(event) {
    if (event.target !== bar && event.target !== nav) {
      closeSidebar();
    }
  });





  
  
  
  
  
  


