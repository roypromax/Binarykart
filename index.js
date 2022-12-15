console.log("Hello");
let phonesData = [
    {
        id:1,
        image:"phone-images/Vivo-V23-Smartphone-492574741-i-1-1200Wx1200H-300Wx300H.jpeg",
        brand: "Vivo",
        model: "Vivo V23 5G 128 GB, 8 GB RAM, Stardust Black",
        price: 29990,
    },
    {
        id:2,
        image:"phone-images/Apple-MLPF3HN-A-Smart-Phone-491997699-i-1-1200Wx1200H-300Wx300H.jpeg",
        brand: "Apple",
        model: "Apple iPhone 13 128 GB, Midnight (Black)",
        price: 69900,
    },
    {
        id:3,
        image:"phone-images/Samsung-Galaxy-A03s-Smartphone-491997512-i-1-1200Wx1200H-300Wx300H.jpeg",
        brand: "Samsung",
        model: "Samsung Galaxy A03s 32 GB, 3 GB RAM, Black",
        price: 9999,
    },
    {
        id:4,
        image:"./phone-images/Apple-iPhone-14-Plus-Mobile-Phone-493177770-i-1-1200Wx1200H-300Wx300H.jpeg",
        brand: "Apple",
        model: "Apple iPhone 14 Plus 256 GB, Starlight",
        price: 99900,
    },
    {
        id:5,
        image:"phone-images/Realme-C33-Mobile-Phone-493177735-i-1-1200Wx1200H.jpeg",
        brand: "Realme",
        model: "Realme C33 32 GB, 3 GB RAM, Night Sea",
        price: 8999,
    },
    {
        id:6,
        image:"phone-images/One-Plus-10T-Mobile-Phone-493177297-i-1-1200Wx1200H-300Wx300H.jpeg",
        brand: "Oneplus",
        model: "OnePlus 10T 5G 128 GB, 8 GB RAM, Moonstone Black",
        price: 49999,
    },
    {
        id:7,
        image:"phone-images/OPPO-A77s-Mobile-Phone-493178363-i-1-1200Wx1200H.jpeg",
        brand: "Oppo",
        model: "Oppo A77s 128 GB, 8 GB RAM, Orange",
        price: 17999,
    },
    {
        id:8,
        image:"phone-images/Realme-RMX3511-Mobile-Phone-492849560-i-1-1200Wx1200H.jpeg",
        brand: "Realme",
        model: "Realme C35 64 GB, 4 GB RAM, Glowing Black",
        price: 11999,
    },
    {
        id:9,
        image:"phone-images/Samsung-M13-Mobile-Phone-493178368-i-1-1200Wx1200H.jpeg",
        brand: "Samsung",
        model: "Samsung M13 5G 128 GB, 6 GB RAM, Midnight Blue",
        price: 13999,
    },
    {
        id:10,
        image:"phone-images/Xiaomi-Note-11-SE-Smart-Phone-493178812-i-1-1200Wx1200H.jpeg",
        brand: "Xiaomi",
        model: "Redmi Note 11 SE 64 GB, 6 GB RAM, Cosmic White",
        price: 11499,
    },
    {
        id:11,
        image:"phone-images/One-Plus-Nord2T-Mobile-Phones-492850714-i-1-1200Wx1200H.jpeg",
        brand: "Oneplus",
        model: "OnePlus Nord 2T 5G 128GB, 8GB RAM, Gray Shadow",
        price: 28999,
    },
    {
        id:12,
        image:"phone-images/VIVO-Y21-Smartphones-491997464-i-1-1200Wx1200H.jpeg",
        brand: "Vivo",
        model: "VIVO Y21 64 GB, 4 GB RAM, Midnight Blue",
        price: 13499,
    },
];

localStorage.setItem("phonesData",JSON.stringify(phonesData));