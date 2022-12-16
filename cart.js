let cartItems = JSON.parse(localStorage.getItem("cartItems"));

let display = document.getElementById("cart-container");

appendData(cartItems);

function appendData(arr){
    display.innerHTML = null;

    arr.forEach(element => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        let desc = document.createElement("h4");
        desc.innerText = element.model;
        let price = document.createElement("p");
        price.innerText = "₹" + element.price;
        let cartBtn = document.createElement("button");
        cartBtn.innerText = "Add to Cart";


        cartBtn.addEventListener("click",()=>{
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            let duplicate = false;

            for(let i=0; i<=cartItems.length-1; i++){
                if(cartItems[i].id === element.id){
                    alert("Product already in cart");
                    duplicate = true;
                    break;
                }
            }

            if(duplicate === false){
                cartItems.push(element);
                localStorage.setItem("cartItems",JSON.stringify(cartItems));
                alert("Product added to cart");
            }
        })


        card.append(image,desc,price,cartBtn);
        display.append(card);    
    });
}