let myForm = document.getElementById("signup");

let userArr = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener('submit',function(event){
    event.preventDefault();

    
    if(myForm.email.value == "" || myForm.password.value == ""){
        alert("Please enter valid details");
    }else{

    let obj = {
        "email" : myForm.email.value,
        "password" : myForm.password.value
    }

    userArr.push(obj);

    localStorage.setItem("users",JSON.stringify(userArr));

    window.location = "/login.html";
    }

})