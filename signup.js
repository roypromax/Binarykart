let myForm = document.getElementById("signup");

let userArr = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener('submit',function(event){
    event.preventDefault();

    let obj = {
        "email" : myForm.email.value,
        "password" : myForm.password.value
    }

    userArr.push(obj);

    localStorage.setItem("users",JSON.stringify(userArr));

})