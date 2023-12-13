db.favCollection.insertMany(
    [
        {
          "name": "Alice",
          "userId": "alice123",
          "favColor": ["#ff5733", "#3399ff", "#66cc33"]
        },
        {
          "name": "Bob",
          "userId": "bob456",
          "favColor": ["#9933cc", "#ffcc00", "#3366ff"]
        },
        {
          "name": "Charlie",
          "userId": "charlie789",
          "favColor": ["#cc0000", "#00cc99", "#ff6666"]
        }
      ]
)


db.favCollection.update(
    {"name" :  "Bob"},
    {$push : {"favColor" : {$each : ["#ff6666'"]} }}
)


//  $unwind 

db.favCollection.aggregate([
    {
        $unwind : "$favColor"
    }
])


db.favCollection.aggregate([
  {
      "name" : "Charlie"
  },
  {
    $addToSet : {"favColor" : "#cc0000" }
  }
])

db.favCollection.aggregate([
  {
    $match : {name : "Charlie"}
  },
  {
    $addToSet : {"favColor" : "cc0000"}
  }
])



db.favCollection.aggregate([
  {
    $project : {
      "name" : 1,
      "NumberOfColors" : {$size : "$favColor"}
    }
  }
])

// $size in mongodb pipeline
db.favCollection.aggregate([
  {
    $project : {
      "name" : 1,
      "NumberOfColors" : {$size : "$favColor"}
    }
  }
])


// $limit in aggregation pipeline 

db.favCollection.aggregate([
  {
    $project : {
      "name" : 1,
      "NumberOfColors" : {$size : "$favColor"}
    }
  },
  {

   $limit : 2
  }
])

db.favCollection.aggregate(
  [
    {
      $project : {
        "name" : 1,
        "NumberOfColors" : {$size : "$favColor"}
      }
    },
    {
      $skip : 2
    },
    {
      $limit : 2 
    }
  ]
)