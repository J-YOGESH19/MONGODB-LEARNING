use ("ecommerce");


//updating a value 

db.products.updateOne(
  {
    name : "Wireless Mouse" 
  }
,
  {
    $set : {price : 999}
  }
)

//first part of the above code will find the product from where it is and the second part will set the price to the given one 


//increase the value $inc 

db.products.updateOne (
  {
    name : "Gaming Laptop "
  }
  ,
  {
    $inc : { stock :  50 }
  }
)