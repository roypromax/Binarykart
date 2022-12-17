let myForm = document.getElementById("login");

let userArr = JSON.parse(localStorage.getItem("users")) || [];

let login = false;

myForm.addEventListener('submit',function(event){
    event.preventDefault();

    for(let i=0; i<=userArr.length-1; i++){
        if(myForm.email.value == userArr[i].email){
            if(myForm.password.value == userArr[i].password){
                login = true;
                window.location = "cart.html";
            }else{
                alert("Please enter correct password");
            }
        }else{
            alert("Invalid email");
        }
    }

})