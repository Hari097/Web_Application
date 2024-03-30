
function showUserDetailDashoard(){
    let usernamedashboard = JSON.parse(localStorage.getItem("UserName"))

    let useremaildashboard = JSON.parse(localStorage.getItem("UserEmail"))
    
    let dashboardUsernameEl = document.getElementById("getNamelocalstorage")
    let dashboardUseremailEl = document.getElementById("getEmaillocalstorage")
    
    dashboardUsernameEl.textContent = usernamedashboard
    dashboardUseremailEl.textContent = useremaildashboard 
    
} 

showUserDetailDashoard()




