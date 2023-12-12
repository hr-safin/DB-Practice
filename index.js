
// [
//     {
//       _id: ObjectId('656f37fad489e9172c2c4173'),
//       phoneName: 'Motorola Moto G Power',
//       phonePrice: 249,
//       phoneRating: 4.2
//     }
//   ]


db.purchaseCollection.insertMany([
    {"user_email": "john_doe@example.com", "user_name": "John Doe", "phone_name": "iPhone 13", "price": 999, "short_description": "Latest iPhone model"},
    {"user_email": "jane_smith@example.com", "user_name": "Jane Smith", "phone_name": "Samsung Galaxy S21", "price": 899, "short_description": "High-performance Android device"},
    {"user_email": "bob_johnson@example.com", "user_name": "Bob Johnson", "phone_name": "Google Pixel 6", "price": 799, "short_description": "Exceptional camera quality"},
    {"user_email": "john_doe@example.com", "user_name": "John Doe", "phone_name": "OnePlus 9", "price": 749, "short_description": "Flagship killer"},
    {"user_email": "emily_davis@example.com", "user_name": "Emily Davis", "phone_name": "Xiaomi Redmi Note 10", "price": 299, "short_description": "Budget-friendly smartphone"},
    {"user_email": "michael_white@example.com", "user_name": "Michael White", "phone_name": "LG Velvet", "price": 599, "short_description": "Sleek design and multimedia features"},
    {"user_email": "jane_smith@example.com", "user_name": "Jane Smith", "phone_name": "Sony Xperia 5 II", "price": 1099, "short_description": "Premium multimedia experience"},
    {"user_email": "sarah_brown@example.com", "user_name": "Sarah Brown", "phone_name": "Motorola Moto G Power", "price": 249, "short_description": "Long-lasting battery"},
    {"user_email": "john_doe@example.com", "user_name": "John Doe", "phone_name": "Huawei P40 Pro", "price": 899, "short_description": "Leica quad-camera system"},
    {"user_email": "daniel_lee@example.com", "user_name": "Daniel Lee", "phone_name": "Nokia 8.3", "price": 699, "short_description": "Pure Android experience"},
    {"user_email": "bob_johnson@example.com", "user_name": "Bob Johnson", "phone_name": "Asus ROG Phone 5", "price": 1299, "short_description": "Gaming powerhouse"},
    {"user_email": "jane_smith@example.com", "user_name": "Jane Smith", "phone_name": "Oppo Find X3 Pro", "price": 1199, "short_description": "Vivid display and versatile camera system"},
    {"user_email": "emily_davis@example.com", "user_name": "Emily Davis", "phone_name": "Realme 8 Pro", "price": 349, "short_description": "64MP AI quad-camera"},
    {"user_email": "michael_white@example.com", "user_name": "Michael White", "phone_name": "Lenovo Legion Phone Duel 2", "price": 999, "short_description": "Optimized for gaming"},
    {"user_email": "sarah_brown@example.com", "user_name": "Sarah Brown", "phone_name": "Vivo X60 Pro", "price": 799, "short_description": "Stable camera performance"},
    {"user_email": "john_doe@example.com", "user_name": "John Doe", "phone_name": "BlackBerry KEY2", "price": 649, "short_description": "Physical keyboard for productivity"},
    {"user_email": "daniel_lee@example.com", "user_name": "Daniel Lee", "phone_name": "ZTE Axon 30 Ultra", "price": 549, "short_description": "Triple camera with 60MP main sensor"},
    {"user_email": "bob_johnson@example.com", "user_name": "Bob Johnson", "phone_name": "HTC U20 5G", "price": 499, "short_description": "5G connectivity and large display"},
    {"user_email": "jane_smith@example.com", "user_name": "Jane Smith", "phone_name": "Infinix Note 10 Pro", "price": 279, "short_description": "Large battery capacity"},
    {"user_email": "emily_davis@example.com", "user_name": "Emily Davis", "phone_name": "Poco X3 NFC", "price": 249, "short_description": "Value for money"}
  ]
  )

db.purchaseCollection.aggregate([{
    $group : {
        // accumulator
        "_id" : "$user_email",
        "totalPrice" : {$sum : 1}
    }
}])
db.purchaseCollection.aggregate([{
    $group : {
        
        "_id" : "$user_email",
        "totalPrice" : {$sum : 1}
    }
}])

//  price is greater 950 then show the totalPrice

db.purchaseCollection.aggregate([
    {
        $match : {
            "price" : {
                $gt : 950
            }
        }
    },
    {
        $group : {
            "_id" : "$user_email",
            "totalPrice" : {$sum : "$price"}
        }
    }
])


