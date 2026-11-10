import { useState } from "react"
import products from "../data/products"
import ProductCard from "./ProductCard"

function Shop() {
  const [category, setCategory] = useState("All")

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        )

  return (
    <section id="shop" className="bg-[#fffdf7] py-20">
      <div className="mx-auto w-[90%] max-w-[1200px]">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-[3px] text-[#a65f3e]">
            OUR COFFEE
          </p>

          <h2 className="font-serif text-4xl font-bold">
            Find Your Favorite Blend.
          </h2>
        </div>

        <div className="mb-10 flex justify-center gap-3">
          {["All", "Hot Coffee", "Cold Coffee"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2 font-bold transition ${
                category === item
                  ? "bg-[#294735] text-white"
                  : "bg-[#f6efe2] text-[#263b2e]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Shop