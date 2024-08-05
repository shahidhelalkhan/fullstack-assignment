import jwt from "jsonwebtoken";

const user = {
  name: "Demo User",
  phone: "+91-8937287382",
  address: "123 Main St. Dallas Texas",
  email: "demo@tijarah.com",
  // This is a hashed version of 'password123'
  password: "password123",
};

const JWT_SECRET = "&1jxax8924jkhdsiyey";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email !== user.email) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = password === user.password;
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  delete user.password;

  res.json({ token, user: { ...user } });
}
