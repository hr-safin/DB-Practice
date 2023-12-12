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