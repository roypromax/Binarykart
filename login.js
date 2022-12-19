let myForm = document.getElementById("login");

let userArr = JSON.parse(localStorage.getItem("users")) || [];

let login = JSON.parse(localStorage.getItem("status")) ;

myForm.addEventListener('submit',function(event){
    event.preventDefault();

    let user = false;


    for(let i=0; i<=userArr.length-1; i++){
        if(myForm.email.value == userArr[i].email){

            user = true;
            
            if(myForm.password.value == userArr[i].password){
                login = true;
            }else{
                alert("Please enter correct credentials");
            }
        }
    }

    if(user == false){
        alert("No data found. Please Signup")
    }

    localStorage.setItem("status",login);

    if(login == true){
        let cartStatus = JSON.parse(localStorage.getItem("cartItems"));
        console.log(cartStatus);
        if(cartStatus == []){
            window.location = "index.html";
        }else{
        window.location = "cart.html";
        }
    }
})