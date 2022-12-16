
let display = document.getElementById("phones-container");

let phonesData = JSON.parse(localStorage.getItem("phonesData"));

appendData(phonesData);


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


let filter = document.getElementById("filter");
let defaultFilter = document.getElementById("defaultFilter");

filter.addEventListener("change",()=>{
    defaultFilter.innerText = "All Brands";
    let filteredData = [];
    if(filter.value === "default"){
        filteredData = phonesData;
        defaultFilter.innerText = "Filter by Brand";
    }else{
        filteredData = phonesData.filter((element)=>{
        if(element.brand.toLowerCase() === filter.value.toLowerCase()){
            return element;
        } 
        }); 
    }

    appendData(filteredData);
});

let sort = document.getElementById("sort");
let defaultSort = document.getElementById("defaultSort");

sort.addEventListener("change",()=>{

    defaultSort.innerText = "Remove sort";
    let sortedData = [];
    if(sort.value === "default"){
        sortedData = [...phonesData];
        
        defaultSort.innerText = "Sort by Price";
    }else if(sort.value === "low"){
        sortedData = [...phonesData];
        sortedData.sort((a,b)=>a.price - b.price);
    }else{
        sortedData = [...phonesData];
        sortedData.sort((a,b)=>b.price - a.price);
    }

    appendData(sortedData);

    
})