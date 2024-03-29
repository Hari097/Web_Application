let myformEI = document.getElementById("myform")




const submitFrom =  async function() {
    


    try{ 
        let options = {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        let URL =  "http://localhost:3005/login" 
        let response =  await fetch(URL,options) 

        let jsonData = response
        console.log(jsonData)




       
    } catch(error){
            console.log(` fetch error : ${error.message}`)

    }
}

myformEI.addEventListener("submit",function(event){
    event.preventDefault()
    submitFrom()
    })
    