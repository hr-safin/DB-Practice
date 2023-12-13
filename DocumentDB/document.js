// inserting document data to the database

db.documentCollection.insertMany(
    [
        {
          "name": "Document1",
          "values": [10, 20, 30, 40, 50, 60, 70]
        },
        {
          "name": "Document2",
          "values": [10, 20, 30, 40, 50, 60, 70]
        },
        {
          "name": "Document3",
          "values": [10, 20, 30, 40, 50, 60, 70]
        },
        {
          "name": "Document4",
          "values": [10, 20, 30, 40, 50, 60, 70]
        },
        {
          "name": "Document5",
          "values": [10, 20, 30, 40, 50, 60, 70]
        }
      ]
)

// using filter

db.documentCollection.aggregate([
    {
        $project : {
            "name" : 1,
            "HighScore" : {
                $filter : {
                    input : "$values",
                    as : "val",
                    cond : {$gte : ["$$val", 70]}
                }
            }
        }
    }
])

db.documentCollection.aggregate([
    {
        $project  : {
            "name" : 1 ,
            "HigherScore" : {
                $filter : {
                    input : "$values",
                    as : "val",
                    cond : {$gte : ["val", 70]}
                }
            }
        }
    }
])