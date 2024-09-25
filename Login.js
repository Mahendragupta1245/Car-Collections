let user=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let from=document.querySelector("form");
let suser=document.querySelectorAll("span")[0];
let spassword=document.querySelectorAll("span")[1];


// from.addEventListener("submit",(e)=>{
//     if(user.value==""&& password.value==""){
//         alert("enter the email");
//         alert("enter the Password");
//     }
//     else if(user.value==""){
//         alert("enter the email");
//     }
//     else if(password.value==""){
//         alert("enter the Password");
//     }
//     else if(user.value=="Mahendra@123gmail.com"&& password.value=="1234"){
//         alert("Welcome Boss ");
        
//     }

// })

from.addEventListener("submit",((e)=>{
    if(user.value==""&& password.value==""){
        suser.innerHTML="Enter the email";
        spassword.innerHTML="enter the Password";
        e.preventDefault();
    }
    else if(user.value==""){
        suser.innerHTML="Enter the email";
        e.preventDefault();
    }
    else if(password.value==""){
        spassword.innerHTML="Enter the Password";
        e.preventDefault();
    }
    else if(user.value=="Mahendra@123gmail.com"&& password.value=="1234"){
        alert("Welcome Boss ");
        
    }

}))