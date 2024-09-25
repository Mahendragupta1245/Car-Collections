let from=document.querySelector("form");
let main=document.querySelector("main");
let Name=document.querySelectorAll("input")[0];
let LName=document.querySelectorAll("input")[1];
let Email=document.querySelectorAll("input")[2]
let Password=document.querySelectorAll("input")[3];
let Store=[];
let DataStore= JSON.parse(localStorage.getItem("data1"));
//  
if(DataStore){
    Store=DataStore;
    console.log(Store);
    
}

from.addEventListener("submit",(e)=>{
    let flag = true;

!Email
let email=Store.find((e)=>{
    if(e.Email==UserEmail.value){
        return e;
    }
})
 


    if(flag){
        let data1={
             UserName:Name.value,
             UserLName:LName.value,
             UserEmail:Email.value,
             UserPassword:Password.value,
             userCard:null,
              
             
        };
        
        Store.push(data1);
        localStorage.setItem("data1",JSON.stringify(Store));
    }

});


