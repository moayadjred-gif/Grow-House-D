import "dotenv/config";
import pg from "pg";
import products from "../src/data/products.js";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seedProducts() {
  try {
    for (const product of products) {
      await pool.query(
        `INSERT INTO products (id, name, description, price, image, category)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        description = EXCLUDED.description,
        price = EXCLUDED.price,
        image = EXCLUDED.image,
        category = EXCLUDED.category`,
        [
            product.id,
            product.name,
            product.description,
            product.price,
            product.image,
            product.category,
        ]
    );
    }

    console.log("Products added successfully!");
  } catch (error) {
    console.error("Error adding products:", error.message);
  } finally {
    await pool.end();
  }
}

seedProducts();