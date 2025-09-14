let customers = [

{ name:"Robert",
  email:"Robert2001@gmail.com",
  purchases:["Snickers"," KitKat"," Milky Way"]
},

{ name:"Elizabeth",
  email:"Elizabeth1024@gmail.com",
  purchases:["Takis"," Salt & Vinegar Lays"," Popcorn"]
},

{ name:"Isabella",
  email:"Isabella13@yahoo.com",
  purchases:["Eyeshadow"," Mascara"," Lipstick"]
}
];

newCustomer = {name:"Jacob",email:"Jacob2001@gmail.com",purchases:["Soccer ball"," Baseball"," Basketball"]}
customers.push(newCustomer)
console.log(customers);

customers.shift();

customers[0].email = "Elizabeth2004@gmail.com";


customers.forEach(customer =>console.log(
    `Name:${customer.name}`,
    `Email:${customer.email}`,
    `Purchases:${customer.purchases.length}`,

));




