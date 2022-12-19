let loginLink = document.getElementById("loginLink");

let login = JSON.parse(localStorage.getItem("status"));

if(login == true){
    loginLink.innerText = "Logout";

    loginLink.addEventListener("click",()=>{
        login = false;
        localStorage.setItem("status",false);
        loginLink.setAttribute("href","index.html");
        alert("You have been logged out");
    })
}

let cartItems = JSON.parse(localStorage.getItem("cartItems"));

let display = document.getElementById("cart-container");

let totaldisplay = document.getElementById("total-items");
let pricedisplay = document.getElementById("total-price");

appendData(cartItems);

function appendData(arr){
    display.innerHTML = null;
    totaldisplay.innerText = 0;
    let total = 0;
    pricedisplay.innerText = 0;
    let totalprice = 0;

    arr.forEach(element => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        let desc = document.createElement("h4");
        desc.innerText = element.model;
        let price = document.createElement("p");
        price.innerText = "₹" + element.price;
        let dBtn = document.createElement("button");
        dBtn.innerText = "-";

        dBtn.addEventListener("click",()=>{
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));

            cartItems.forEach(function(el,i){
                if(el.id === element.id){
                    if(el.quantity == 1){
                     cartItems.splice(i,1);
                    }else{
                   el.quantity--;
                    }
                 }
            })

            localStorage.setItem("cartItems",JSON.stringify(cartItems));
            appendData(cartItems);
        });

        let quantity = document.createElement("span");
        quantity.innerText = element.quantity;

        let iBtn = document.createElement("button");
        iBtn.innerText = "+";

        iBtn.addEventListener("click",()=>{
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));

            cartItems.forEach(function(el,i){
                if(el.id === element.id){
                    
                   el.quantity++;
                    
                }
            });

            localStorage.setItem("cartItems",JSON.stringify(cartItems));
            appendData(cartItems);
        });


        let rBtn = document.createElement("button");
        rBtn.innerText = "Remove Item";

        rBtn.addEventListener("click",()=>{
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));

            cartItems.forEach(function(el,i){
                if(el.id === element.id){
                    
                    cartItems.splice(i,1);
                    
                }
            });

            localStorage.setItem("cartItems",JSON.stringify(cartItems));
            appendData(cartItems);
        });


        total += element.quantity;
        totalprice += element.quantity * element.price;   

        card.append(image,desc,price,dBtn,quantity,iBtn,rBtn);
        display.append(card);    
    });

    totaldisplay.innerText = total;
    pricedisplay.innerText = "₹" + totalprice;
}

let buy = document.getElementById("buy");

buy.addEventListener("click" , ()=>{
    let login = JSON.parse(localStorage.getItem("status"));

    if(login == true){
        cartItems = [];
        alert("Your order has been placed. Check your email for order details. Thank you shopping with us.")
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
        appendData(cartItems);
        window.location = "index.html";
    }else{
        alert("Please login to place your order");
        window.location = "login.html";
    }
})