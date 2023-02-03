($(function () { 
    //******************START OF SHOWING AND HIDING THE OVERLAY******************//
    $("#b1").click(()=>{
        $("#para2").removeClass("d-none");
        $("#para1").addClass("d-none");
    })
    $("#b2").click(()=>{
        $("#para2").addClass("d-none");
        $("#para1").removeClass("d-none");  
    })
    //******************END OF SHOWING AND HIDING THE OVERLAY******************//


    //******************START OF LOGIN & REGISTER PROCESS******************//
    $.ajax('http://localhost:3000/approved', 
    {
    dataType: 'json',
    timeout: 500,    
    success: function (data,status,xhr) { 
        $("#reg").click((e)=>{
            let inputClass=$(".c");
            let regexValidation=[/^[a-zA-Z\s]+$/,/^[a-zA-Z\s]+$/,/[A-z]+([,]+)/,/(2[2-9]|[3-5][0-9]|6[0-5])/];
            let eCheck=$(".c0")[0];
            let spanMsg=$(".val");
            let spanMsgEmail=$(".emailMsg")[0];
            let eValidation =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            for(i=0;i<inputClass.length;i++)
            {
                if(regexValidation[i].test(inputClass[i].value)==false)
                {
                    inputClass[i].style.borderColor="orangered";
                    inputClass[i].style.borderRadius="0.5rem";
                    spanMsg[i].innerHTML='Not Valid';
                    spanMsg[i].style.color='red';
                    e.preventDefault();
                }
                else{
                    inputClass[i].style.borderColor="green";
                    inputClass[i].style.borderRadius="0.5rem";
                    spanMsg[i].innerHTML='Valid';  
                    spanMsg[i].style.color='green';
                }     
                
            }  
            for(i=0;i<data.length;i++)
            {

                if(eCheck.value==data[i].Email || eValidation.test(eCheck.value)==false)
                {
                    eCheck.style.borderColor="orangered";
                    eCheck.style.borderRadius="0.5rem";
                    spanMsgEmail.innerText='Taken or Not Valid'
                    spanMsgEmail.style.color='red';
                    e.preventDefault();
                    break;
                }
                else{
                    eCheck.style.borderColor="green";
                    eCheck.style.borderRadius="0.5rem";  
                    spanMsgEmail.innerHTML='Valid';
                    spanMsgEmail.style.color='green';
                }   
            }
         if(inputClass[0].style.borderColor=="green" &&
            inputClass[1].style.borderColor=="green" &&
            inputClass[2].style.borderColor=="green" &&
            inputClass[3].style.borderColor=="green" &&
            eCheck.style.borderColor=="green")

            {
                let firstName = inputClass[0].value;
                let lastName = inputClass[1].value;
                let Addresss = inputClass[2].value;
                let Age = inputClass[3].value;
                let Email= eCheck.value;
                let date = new Date();
                dateInString=date.toDateString();
                let registerObject = {
                    firstName:firstName,
                    lastName:lastName,
                    Address:Addresss,
                    Email:Email,  
                    Age:Age,
                    DateOf_Registeration:dateInString,
                }
                
                postInfo(registerObject);

            }  
        })
          
        $("#log").click((e)=>{
            let inputClass1=$(".c1")[0];
                for(i = 0 ;i<data.length;i++)
                {
                    if(inputClass1.value==data[i].User_Name && data[i].Permission=="Admin")
                    {
                        window.location.href='http://127.0.0.1:5500/Admin/Reports%20Table/HTML.html'
                        inputClass1.value='';
                        break;
                        
                    }
                    else if(inputClass1.value==data[i].User_Name && data[i].Permission=="Employee")
                    {
                        window.location.href='http://127.0.0.1:5500/Attendance/HTML.html'
                        inputClass1.value='';
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
 async function postInfo(arr) {
    const object = arr;
    await fetch('http://localhost:3000/pending', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    });
  }


  

//******************END OF FUNCTION DECLARTION******************//
