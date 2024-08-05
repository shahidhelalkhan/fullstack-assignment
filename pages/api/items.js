// pages/api/protected.js

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  res.json({
    data: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        description: "Classic cheese and tomato pizza",
        modifiers: [
          { id: "m1", name: "Size", options: ["Small", "Medium", "Large"] },
          { id: "m2", name: "Crust", options: ["Thin", "Thick", "Stuffed"] },
        ],
        taxPercentage: 5,
      },
      {
        id: 2,
        name: "Chicken Burger",
        price: 8.99,
        description: "Juicy chicken patty with fresh veggies",
        modifiers: [],
        taxPercentage: 5,
      },
    ],
  });
}
