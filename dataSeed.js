const Restaurant = require("./models/restModel.js");
const seedData = [
  {
    name: "The Golden Spoon",
    image:
      "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Pasta Primavera",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGElMjBwcmltYXZlcmF8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Margherita Pizza",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww",
      },
    ],
    rating: 4.5,
  },
  {
    name: "Ocean Breeze Café",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Fish Tacos",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMHRhY29zfGVufDB8fDB8fHww",
      },
      {
        name: "Seafood Platter",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1556845754-6f01a6cf8d21?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VlZm9vZCUyMHBsYXR0ZXJ8ZW58MHx8MHx8fDA%3D",
      },
    ],
    rating: 4.2,
  },
  {
    name: "Spicy Delights",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Spicy Chicken Wings",
        price: 8.99,
        image:
          "https://plus.unsplash.com/premium_photo-1672498193267-4f0e8c819bc8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNwaWN5JTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Hot Chili Burger",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      },
    ],
    rating: 4.8,
  },
  {
    name: "Vegetarian Haven",
    image:
      "https://images.unsplash.com/photo-1474898856510-884a2c0be546?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Grilled Veggie Wrap",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
      {
        name: "Quinoa Salad",
        price: 9.99,
        image:
          "https://plus.unsplash.com/premium_photo-1705003210245-41b4773b5bb5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVpbm9hJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    rating: 4.6,
  },
  {
    name: "Sweet Tooth Bakery",
    image:
      "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Chocolate Cake",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Strawberry Tart",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      },
    ],
    rating: 4.7,
  },
  {
    name: "Gourmet Burger Joint",
    image:
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Classic Beef Burger",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        name: "Vegan Burger",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
    ],
    rating: 4.3,
  },
  {
    name: "Pasta Paradise",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Fettuccine Alfredo",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmV0dHVjY2luZSUyMGFsZnJlZG98ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Spaghetti Carbonara",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      },
    ],
    rating: 4.5,
  },
  {
    name: "Taco Fiesta",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Beef Tacos",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1619221882161-95135fca04e4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHRhY29zfGVufDB8fDB8fHww",
      },
      {
        name: "Chicken Tacos",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1611658254366-60188341cd1f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjB0YWNvc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    rating: 4.4,
  },
  {
    name: "Sushi World",
    image:
      "https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGklMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
    menu: [
      {
        name: "California Roll",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaWZvcm5pYSUyMHJvbGx8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Dragon Roll",
        price: 12.99,
        image:
          "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x500.jpg",
      },
    ],
    rating: 4.9,
  },
  {
    name: "French Bistro",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    menu: [
      {
        name: "Croque Monsieur",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1542002976-c3be9b105508?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3F1ZSUyMG1vbnNpZXVyfGVufDB8fDB8fHww",
      },
      {
        name: "Ratatouille",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1630173314503-544080d4dee7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF0YXRvdWlsbGUlMjBmb29kfGVufDB8fDB8fHww",
      },
    ],
    rating: 4.6,
  },
];
const seedDatabase = async () => {
  try {
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(seedData);
    console.log("Database seeded successfully");
  } catch (error) {
    console.log("Error seeding the database:", error.message);
  }
};

module.exports = seedDatabase;
