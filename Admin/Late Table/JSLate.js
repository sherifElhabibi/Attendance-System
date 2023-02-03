(async function start(){
          let response = await fetch("http://localhost:3000/LateReport");
          let parsedResponse=await response.json();
          let objects = parsedResponse;
          let tbody = document.querySelector("tbody");
          let table =document.querySelector("table");
          objects.forEach(data => {
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");
          let td6 = document.createElement("td");
          let td7 = document.createElement("td");
          let td8 = document.createElement("td");
          let tr = document.createElement("tr");
          td1.innerHTML=data.id;
          td2.innerHTML=data.firstName;
          td3.innerHTML=data.lastName;
          td4.innerHTML=data.Address;
          td5.innerHTML=data.Age;
          td6.innerHTML=data.Email;
          td7.innerHTML=data.Arrival_Time;
          td8.innerHTML=data.Login_Date;
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tr.appendChild(td7);
          tr.appendChild(td8);
          tbody.appendChild(tr);
          table.appendChild(tbody);
          }); 
          $("#manage").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Employee%20Managment%20Table/HTML.html'
          })
          $("#ban").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Violation%20Table/HTML.html'
          })
          $("#late").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Late%20Table/HTML.html'
          })
          $("#absent").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Absent%20Table/HTML.html'
          })
          $("#reports").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Reports%20Table/HTML.html'
          })
          $("#excuse").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Excused%20Table/HTML.html'
          })
          $(table).DataTable();
})();

