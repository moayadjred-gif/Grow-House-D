import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import authRoutes from "./auth.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import pg from "pg";
const { Pool } = pg;
const PostgresStore = connectPgSimple(session);


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

console.log("DATABASE_URL loaded:", Boolean(process.env.DATABASE_URL));

pool.query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected successfully!");
    console.log(result.rows[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.use(
  session({
    store: new PostgresStore({
      pool,
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
);

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});