  (async function start(){
          let response = await fetch("http://localhost:3000/pending");
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
          let td9 = document.createElement("td");
          let tr = document.createElement("tr");
          td1.innerHTML=data.id;
          td2.innerHTML=data.firstName;
          td3.innerHTML=data.lastName;
          td4.innerHTML=data.Address;
          td5.innerHTML=data.Age;
          td6.innerHTML=data.Email;
          td7.innerHTML=data.DateOf_Registeration;
          td8.innerHTML='<i class="fa-sharp fa-solid fa-circle-check approve"></i> <i class="fa-sharp fa-solid fa-circle-xmark disapprove"></i>';
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
          approveButton = document.querySelectorAll(".approve");
          disapproveButton = document.querySelectorAll(".disapprove");
          approveButton.forEach((e)=>{
            e.addEventListener("click",(e)=>{
              fetch (`http://localhost:3000/pending/${e.target.parentElement.parentElement.children[0].innerHTML}`,{
                method: 'DELETE'
              }).then(()=>{
                let userName =  makeid(8); 
                let emailValue =e.target.parentElement.parentElement.children[5].innerHTML;    
                let newMember ={
                  firstName:e.target.parentElement.parentElement.children[1].innerHTML,
                  lastName:e.target.parentElement.parentElement.children[2].innerHTML,
                  Address:e.target.parentElement.parentElement.children[3].innerHTML,
                  Age:e.target.parentElement.parentElement.children[4].innerHTML,
                  Email:e.target.parentElement.parentElement.children[5].innerHTML,
                  Date_Of_Registraion:e.target.parentElement.parentElement.children[6].innerHTML,
                  User_Name:userName,
                  Permission:"Employee"
                }
                    fetch('http://localhost:3000/approved', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newMember)
                  });
                    Email.send({
                      SecureToken : "fe3e77ca-0854-4527-bcdd-e8cd2de5b611",
                      To : emailValue,
                      From : "sherif.hussein58@gmail.com",
                      Subject : "Confirmation",
                      Body : userName
                  }).then(message => alert("An Email has been sent to you"))   
                  e.target.parentElement.parentElement.remove();
                  
              })
            })
              })

          disapproveButton.forEach((e)=>{
            e.addEventListener("click",(e)=>{
              fetch (`http://localhost:3000/pending/${e.target.parentElement.parentElement.children[0].innerHTML}`,{
                method: 'DELETE'
              }) 
              e.target.parentElement.parentElement.remove();
            })
          })
          $("#reports").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Reports%20Table/HTML.html'
          })
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
          $("#excuse").click(()=>{
            window.location.href='http://127.0.0.1:5500/Admin/Excused%20Table/HTML.html'
          })
          
          $(table).DataTable();
      })();

  function makeid(length) 
  {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      return result;
  }

