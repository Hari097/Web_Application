let newUsernameEI =  document.getElementById("name")
let newUseremailEI =  document.getElementById("email")
let newUserpasswordEI =  document.getElementById("password")

let userGenderEI = document.getElementById("gender")


let NewUserBtnEl = document.getElementById("createNewUser")
let userData = {
    
    name:"",
    email:"",
    gender:"Male",
    password:"" 
}

newUsernameEI.addEventListener("change",(event)=>{
    userData.name = event.target.value
})

// User Email
newUseremailEI.addEventListener("change",(event)=>{
    userData.email = event.target.value
})

userGenderEI.addEventListener("change",(event)=>{
    userData.gender = event.target.value
}) 

newUserpasswordEI.addEventListener("change",(event)=>{
userData.password = event.target.value
})


let userDetails = []
let uniqueID = userDetails.length
function CreateNewUser(){  
    uniqueID = uniqueID + 1

    let createUser = {
        uniqueNo:uniqueID,
        username:userData.name,
        useremail:userData.email,
        userpassword:userData.password, 
        usergender:userData.gender,
    
    }

userDetails.push(createUser)
localstoreUserData(userDetails)
}


function localstoreUserData(newuser){ 
let stringifyUserData = JSON.stringify(newuser)

let storedata = localStorage.setItem("userdata",stringifyUserData)
}
NewUserBtnEl.addEventListener("click",CreateNewUser)






