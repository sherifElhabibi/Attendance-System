($(function(){
  employee=JSON.parse(sessionStorage.getItem("Employee"));
  $(".fullname").append(`${employee.firstName} ${employee.lastName}`);
  $(".email").append(`${employee.Email}`);
  $(".age").append(`${employee.Age}`)
  $(".date").append(`${employee.Address}`);
  $(".id").append(`${employee.User_Name}`);

  $("#late").click(()=>{
    window.location.href='http://127.0.0.1:5500/Employee%20Page/Late%20Page/HTML.html'
})
$("#absent").click(()=>{
  window.location.href='http://127.0.0.1:5500/Employee%20Page/Absence%20Page/HTML.html'
})
$("#excuse").click(()=>{
  window.location.href='http://127.0.0.1:5500/Employee%20Page/Excuse%20Page/HTML.html'
})

$("#info").click(()=>{
  window.location.href='http://127.0.0.1:5500/Employee%20Page/Info%20Page/HTML.html'

})
$(".logout").click((e)=>{
  let departureDate = new Date();
  let stringDate = departureDate.toDateString();
  let departureHour = departureDate.getHours();
  let departureMinute = departureDate.getMinutes();
  let departureSeconds = departureDate.getSeconds()
  let departureTime = `${departureHour} h: ${departureMinute} m: ${departureSeconds} s`
  let left={
    firstName:employee.firstName,
    lastName:employee.lastName,
    Email:employee.Email,
    Age:employee.Age,
    Address:employee.Address,
    User_Name:employee.User_Name,
    Arrival_Time:employee.Arrival_Time,
    Departure_Time:departureTime, 
    Login_Date:stringDate,
  }
  
  postDeparture(left);
  sessionStorage.clear();
  window.location.href='http://127.0.0.1:5500/Attendance/HTML.html';
})
}))();

async function postDeparture(arr) {
  const object = arr;
  await fetch('http://localhost:3000/Left', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object)
  });
}

