// using aggregate pipeline find total count of particular user total purchase

db.purchaseCollection.aggregate([
    {
        $group : {
            "_id" : "$user_email",
            "TotalCount" : {$sum : 1}
        }
    }
])


// using aggregate pipeline find total Price of particular user 

db.purchaseCollection.aggregate([
    {
        $group : {
            "_id" : "$user_email",
            "TotalPrice" : {$sum : "$price"}
        }
    }
])


// using aggregate pipeline find total Price of particular user 

db.purchaseCollection.aggregate([
    {
      $match : {"user_email" : "john_doe@example.com"}
    },
     {
        $group : {
            "_id" : "$user_email",
            "Total Price" : {$sum : "$price"}
        }
     }
])



db.purchaseCollection.aggregate(
    [
        {
            $match : {"user_email" : "john_doe@gmail.com"}
        }
    ]
)


db.purchaseCollection.aggregate([
    {
        $group : {
            "_id" : "$user_email",
            "TotalUser" : {$sum : 1}
        }
    }
])


db.purchaseCollection.aggregate([
    {
        $group : {
            "_id" : "$user_email",
            "TotalUser" : {$sum : 1}
        }
    }
])


// sum of the user purchase total

db.purchaseCollection.aggregate([
    {
        $group : {
            "_id" : "$user_email",
            "totalPrice" : {$sum : "$price"}
        }
    }
])


// do sum when user price is greater than

db.purchaseCollection.aggregate([
    {
        $match : {"price" : {$gt : 1000}}
    },
    {
        $group : {
            "_id" : "$user_email",
            "TotalPrice" : {$sum : "$price"}
        }
    }
])



// do sum when user price is less than


db.purchaseCollection.aggregate([
    {
        $match : {"price" : {$lt : 1000}}
    },
    {
        $group : {
            "_id" : "$user_email",
            "TotalPrice" : {$sum : "$price"}
        }
    }
])

// sort in  ascending way

db.purchaseCollection.aggregate([
    {
        $match : {"price" : {$gt : 1000}}
    },
    {
        $group : {
            "_id" : "$user_email",
            "TotalPrice" : {$sum : "$price"}
        }
    },

    {
         $sort : {"TotalPrice" : 1}
    }
])


// sort in descending way

db.purchaseCollection.aggregate([
    {
        $match : {"price" : {$gt : 1000}}
    },
    {
        $group : {
            "_id" : "$user_email",
            "TotalPrice" : {$sum : "$price"}
        }
    },
    {

        $sort : {"TotalPrice" : -1}
    }
])


//  use project 

db.purchaseCollection.aggregate([
    {
        $project : {
            price : 1
        }
    }
])


db.purchaseCollection.aggregate([
    {
        $project : {
            price : 1,
            _id : 0
        }
    }
])


db.purchaseCollection.aggregate([
    {
        $project : {
            price : 1,
            "DiscountPrice" : {$multiply : ["$price", 0.8]}
        }
    }
])


db.purchaseCollection.aggregate([

    {
       $match : {"price" : {$gt : 1000}}
    },
    {
        $project : {
            price : 1,
            "DiscountPrice" : {$multiply : ["$price", 0.8]}
        }
    }
])



