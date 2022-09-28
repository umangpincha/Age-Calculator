// const container;
const error =  document.querySelector(".error");
const age =  document.querySelector(".age");
// console.log(error);
function getAge(){
    let inputDate  = new Date(document.getElementById("dob").value);
    let currentDate = new Date();
    let myMonth = inputDate.getMonth();
    let myDay = inputDate.getUTCDay();
    let myYear = inputDate.getFullYear();
    console.log("Myday = " , myDay);
    calcAge(inputDate,currentDate,myMonth,myDay,myYear);
}

function calcAge(inputDate,currentDate,myMonth,myDay,myYear){ 
    let currentYear = currentDate.getFullYear(); 
    let currentMonth =  currentDate.getMonth();
    let currentDay =  currentDate.getUTCDay();
    console.log("current day =" , currentDay);
    // console.log(currentYear);
    // console.log(myYear);
    if (currentYear == myYear && currentMonth == myMonth && currentDay==myDay) {
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "Not Yet Born 😛";
        // alert("Not yet born");
        return;
    }
    if (myYear > currentYear || myMonth > currentMonth || myDay > currentDay) {
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "Incorrect DOB 😂";
        // alert("Not yet born");
        return;
    }
    //myage currentYear - your DOB's year
    let myAge_years = currentYear - myYear;
    let myAge_months = currentMonth - myMonth;
    let myAge_days = currentDay - myDay;
    displayAge(myAge_years , myAge_months , myAge_days);
}

function displayAge(myAge_years , myAge_months , myAge_days){
    let y = document.getElementById("years");
    let m = document.getElementById("months");
    let d = document.getElementById("days");
    y.textContent = myAge_years;
    m.textContent = myAge_months;
    d.textContent = myAge_days;
}
