let product=[
    {id:1,title:"mouse",price:500,catagory:"Accessories",instock:true},
    {id:2,title:"keyboard",price:800,catagory:"Accessories",instock:true},
    {id:3,title:"monitor",price:3500,catagory:"Display",instock:true},
    {id:4,title:"Laptop",price:75500,catagory:"Laptop",instock:false},
    {id:5,title:"Headphone",price:1800,catagory:"Accessories",instock:false},
    {id:6,title:"Sound Box",price:500,catagory:"Accessories",instock:false},
    {id:7,title:"Phone",price:30000,catagory:"Phone",instock:true},
]
let stockProduct=product?.filter((p)=>p.instock==true)?.sort((a,b)=>a.price-b.price)?.map((p)=>`Name:${p.title},Price:${p.price}`)?.forEach((m)=> console.log(`Add to Cart ${m}`));
