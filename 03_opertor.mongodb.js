use ("ecommerce");


//to find all the product 

db.products.find()


//pretty output 

db.products.find().pretty()

//filter the document 
db.products.find({
  name: "Gaming Laptop"
})

//greater than operator $gt 
db.products.find({
  price : {$gt : 1000}
})

//less than operator $lt 

db.products.find({
  price : {$lt : 5000}
})


//grater than equal to 
db.products.find({
  ratings : {$gte : 4.5}
})

//less than equal to 
db.products.find({
  ratings : {$lte : 4.5}
})


//not equal 
db.products.find({
  category : {$ne : "Electronics"}
})