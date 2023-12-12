


db.targetedCollection.aggregate([
    {
        $match : {
            "quantity" : { $eq : 5}
        }
    },
    {
        $group : {
          // accumulator >  "_id"
          "_id" : "$quantity" ,
          "Total Price" : {$sum : "$price"},
          "Average Price" : {$avg : "$price"}
        }
    }
])


// find the quantity = 5 then group them together then find totalprice, average

db.targetedCollection.aggregate([
    {
        $match : {"quantity" : 5}
    },
    {
        $group : {
            "_id" : "$quantity",
            "Total Price"  : {$sum : "$price"},
            "Average" : {"$avg" : "$price"}
        }
    }
])


db.targetedCollection.aggregate([
    {
        $match : {"quantity" : {$gt : 5}}
    },
    {
        $group : {
            "_id" : "$quantity",
            "TotalPrice" : {$sum : "$price"},
            "Average" : {$avg : "$price"}
        }
    }
])