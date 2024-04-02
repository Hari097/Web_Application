let myformEI = document.getElementById("myform")
let closeBtnEl =  document.getElementById("close-btn")
let usernameEI = document.getElementById("username")
let useremailEI = document.getElementById("useremail")
let registerBtnEI = document.getElementById("register")

let namerequiredmsgEl = document.getElementById("namerequiredmsg")
let emailrequiredmsgEl = document.getElementById("emailrequiredmsg")

const submitFrom =   function() { 
    let userdata =  {

        name:usernameEI.value , 
        email:useremailEI.value 
    }
    localStorage.setItem("UserName",JSON.stringify(usernameEI.value))
    localStorage.setItem("UserEmail",JSON.stringify(useremailEI.value))
let jsondata = JSON.stringify(userdata)

    try{ 
        let options = {
            method: "POST" ,
            mode: "cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                'Accept': 'application/json',
              "Content-Type": "application/json"
            //   'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: jsondata
        }

        let URL =  "http://localhost:3006/login" 
        let networkCall =  fetch(URL,options) 

         networkCall.then((response)=>{
            return response.text()
         }).then((jsondata)=>{ 
            if (jsondata == "success"){ 
                usernameEI.value = ""
                useremailEI.value = ""
                   pageRedirect()
            } 
         })
    } catch(error){
            console.log(` fetch error : ${error.message}`)

    }
}

myformEI.addEventListener("submit",function(event){
    event.preventDefault() 

    let validation = Fromvalidation()
    if(validation){ 

        submitFrom()
    }
     
  
})  

function Fromvalidation(){
    let input_value = true

 
    if (usernameEI.value === "" || !usernameEI.value.trim()){
        namerequiredmsgEl.textContent = "Required*"
        input_value = false
    } 
     if (useremailEI.value === "" || !usernameEI.value.trim()) {
        emailrequiredmsgEl.textContent = "Required*" 
        input_value = false
    }
    return input_value
}

function pageRedirect(){ 
    window.location = "file:///D:/developer/Project/Web_Application/Dashboard/dashboard.html"
} 

closeBtnEl.addEventListener("click", function(){
    let popupEl = document.getElementById("Mypopup")
    popupEl.classList.add("none-cls")
    popupEl.classList.remove("none-cls-flex")
})

registerBtnEI.addEventListener("click", function(){
    let popupEl = document.getElementById("Mypopup")
    popupEl.classList.add("none-cls-flex")
})
