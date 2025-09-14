let customers = [

{ name:"Robert",
  email:"Robert2001@gmail.com",
  purchases:["Snickers ","KitKat ","Milky Way "]
},

{ name:"Elizabeth",
  email:"Elizabeth1024@gmail.com",
  purchases:["Takis ","Salt & Vinegar Lays ","Popcorn"]
},

{ name:"Isabella",
  email:"Isabella13@yahoo.com",
  purchases:["eyeshadow ","mascara ","liptstick "]
}
];

newCustomer = {name:"Jacob",email:"Jacob2001@gmail.com",purchases:["soccer ball ","baseball ","basketball "]}
customers.push(newCustomer)
console.log(customers);

customers.forEach(customer =>console.log(
    `Name: ${customer.name}`,
    `Email: ${customer.email}`,
    `Purchases: ${customer.purchases}`,

));




