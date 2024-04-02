
function showUserDetailDashoard(){
    let getuserlocalstorage = JSON.parse(localStorage.getItem("userdata"))
    // let usernamedashboard = JSON.parse(localStorage.getItem("UserName"))

    // let useremaildashboard = JSON.parse(localStorage.getItem("UserEmail"))
    let dashboardUsernameEl = document.getElementById("getNamelocalstorage")
    let dashboardUseremailEl = document.getElementById("getEmaillocalstorage")
    let dashboardUserpasswordEl = document.getElementById("getpasswordlocalstorage")
    let dashboardUsergenderEl = document.getElementById("getgenderlocalstorage")
    getuserlocalstorage.forEach(element => {
       dashboardUsernameEl.textContent = element.username 
       dashboardUseremailEl.textContent = element.useremail 
       dashboardUserpasswordEl.textContent = element.userpassword 
       dashboardUsergenderEl.textContent = element.usergender
    });
    
   
    // dashboardUsernameEl.textContent = usernamedashboard
    // dashboardUseremailEl.textContent = useremaildashboard 
    
} 

showUserDetailDashoard()




