use("ecommerce");

// db.products.find( {"name":'Mechanical Keyboard'})

db.products.find({price : { $gt : 1000}})