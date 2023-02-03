(async function start(){
  employee=JSON.parse(sessionStorage.getItem("Employee"));
  $(".fullname").append(`${employee.firstName} ${employee.lastName}`);
  $(".email").append(`${employee.Email}`);
  $(".age").append(`${employee.Age}`)
  $(".date").append(`${employee.Address}`);
  $(".id").append(`${employee.User_Name}`);
  let response = await fetch("http://localhost:3000/LateReport");
  let parsedResponse=await response.json();
  let objects = parsedResponse;
  let tbody = document.querySelector("tbody");
  let table =document.querySelector("table");

  objects.forEach(data => {
    if(data.User_Name==employee.User_Name)
    {
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
      let td8 = document.createElement("td");
      let td9 = document.createElement("td");
      let tr = document.createElement("tr");
      td1.innerHTML=data.firstName;
      td2.innerHTML=data.lastName;
      td3.innerHTML=data.Address;
      td4.innerHTML=data.Age;
      td5.innerHTML=data.Email;
      td6.innerHTML=data.Arrival_Time;
      td7.innerHTML=data.Login_Date;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);
      tbody.appendChild(tr);
      table.appendChild(tbody);
    }}); 
//BUTTONS//
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
  let departureSeconds = departureDate.getSeconds();
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
//BUTTONS//
$(table).DataTable();
})();
async function postDeparture(arr) {
  const object = arr;
  await fetch('http://localhost:3000/Left', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object)
  });
}

// (async function start(){
  
  //   $(table).DataTable();
  // })();
  