($(function () { 
    //******************START OF LOGIN & REGISTER PROCESS******************///
    $.ajax('http://localhost:3000/approved', 
    {
    dataType:'json',
    timeout: 500,    
    success: function (data,status,xhr){        
        $("#log").click((e)=>{
            let inputClass1=$(".c1")[0];
                let arrivalDate=new Date();
                let dateInString = arrivalDate.toDateString();
                let arrivalHour = arrivalDate.getHours();
                let arrivalMinute = arrivalDate.getMinutes();
                let arrivalSeconds = arrivalDate.getSeconds()
                let arrivalTime = `${arrivalHour} h: ${arrivalMinute} m: ${arrivalSeconds} s`
                
                
                for(i=0;i<data.length;i++)
                {
                    if(inputClass1.value==data[i].User_Name && data[i].Permission=="Employee")
                    {
                    inputClass1.style.borderColor="green";
                    inputClass1.style.borderRadius="0.5rem"; 
                    inputClass1.style.borderColor="green";
                    inputClass1.style.borderRadius="0.5rem";  

                    let arrivalDate=new Date();
                    let dateInString = arrivalDate.toDateString();
                    let arrivalHour = arrivalDate.getHours();
                    let arrivalMinute = arrivalDate.getMinutes();
                    let arrivalSeconds = arrivalDate.getSeconds()
                    let arrivalTime = `${arrivalHour} h: ${arrivalMinute} m: ${arrivalSeconds} s`
                    if(arrivalHour == 9 && arrivalMinute < 31)
                    {
                    let workingMember={
                            firstName:data[i].firstName,
                            lastName:data[i].lastName,
                            Age:data[i].Age,
                            Email:data[i].Email,
                            Address:data[i].Address,
                            Permission:data[i].Permission,
                            User_Name:data[i].User_Name,
                            Date_Of_Registration:data[i].Date_Of_Registration,
                            Arrival_Time:arrivalTime,
                            Login_Date:dateInString

                    }
                    sessionStorage.setItem("Employee",JSON.stringify(workingMember));
                    window.location.href='http://127.0.0.1:5500/Employee%20Page/Info%20Page/HTML.html'
                    }
                   else if(arrivalHour <10)
                    {
                        let lateMember ={
                            firstName:data[i].firstName,
                            lastName:data[i].lastName,
                            Age:data[i].Age,
                            Email:data[i].Email,
                            Address:data[i].Address,
                            Permission:data[i].Permission,
                            User_Name:data[i].User_Name,
                            Date_Of_Registration:data[i].Date_Of_Registration,
                            Arrival_Time:arrivalTime,
                            Login_Date:dateInString
                        }
                        postInforOfLate(lateMember);
                        sessionStorage.setItem("Employee",JSON.stringify(lateMember))
                        window.location.href='http://127.0.0.1:5500/Employee%20Page/Info%20Page/HTML.html'
                      }
                   else if(arrivalHour == 10 || arrivalHour > 10 )
                    {
                        let absentMember ={
                            firstName:data[i].firstName,
                            lastName:data[i].lastName,
                            Age:data[i].Age,
                            Email:data[i].Email,
                            Address:data[i].Address,
                            Permission:data[i].Permission,
                            User_Name:data[i].User_Name,
                            Date_Of_Registration:data[i].Date_Of_Registration,
                            Arrival_Time:arrivalTime,
                            Trial_Login_Date:dateInString
                        }
                        postInforOfAbsent(absentMember);
                        sessionStorage.setItem("Employee",JSON.stringify(absentMember))
                        window.location.href='http://127.0.0.1:5500/Employee%20Page/Info%20Page/HTML.html'
                    }
                    break;
                    }
                else{

                    inputClass1.style.borderColor="orangered";
                    inputClass1.style.borderRadius="0.5rem";
                    e.preventDefault();
                }
            }        
        })
    },
    error: function (jqXhr, textStatus, errorMessage) { 
        console.log(new Error("NOT REACHABLE..."))
    }
});//******************END OF LOGIN & REGISTER PROCESS******************//


}))//******************END OF WINDOW LOAD******************//

//******************FUNCTION DECLARTION******************//
 async function postInforOfWorking(arr) {
    const object = arr;
    await fetch('http://localhost:3000/Working', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    });
  }

  async function postInforOfLate(arr) {
    const object = arr;
    await fetch('http://localhost:3000/LateReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    });
  }
  async function postInforOfAbsent(arr) {
    const object = arr;
    await fetch('http://localhost:3000/AbsentReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    });
  }

//****************** END OF FUNCTION DECLARTION******************//