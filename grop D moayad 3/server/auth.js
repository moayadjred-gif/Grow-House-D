import "dotenv/config";
import express from "express";
import bcrypt from "bcrypt";
import pg from "pg";

const { Pool } = pg;
const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        `INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email`,
        [name, email, hashedPassword]
    );
    req.session.userId = result.rows[0].id;
    
    res.status(201).json({
      message: "Account created successfully!",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    req.session.userId = user.id;

    res.json({
      message: "Login successful!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Login failed" });
  }
});

router.get("/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const result = await pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [req.session.userId]
    );

    res.json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: "Failed to get user" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Logout failed" });
    }

    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully!" });
  });
});

export default router;