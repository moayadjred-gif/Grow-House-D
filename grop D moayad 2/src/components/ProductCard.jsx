import QuantityControl from "./QuantityControl"
function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-[20px] bg-[#f6efe2] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={product.image}
        alt={product.name}
        className="h-[230px] w-full object-cover"
      />

<div className="p-6">
  <h3 className="mb-2 font-serif text-2xl font-bold">
    {product.name}
  </h3>

  <p className="mb-4 text-[#687267]">
    {product.description}
  </p>

  <QuantityControl />

  <span className="mb-4 block text-xl font-bold">
    ${product.price}
  </span>

  <a
    href="#contact"
    className="inline-block rounded-full bg-[#294735] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b66b43]"
  >
    Order Now
  </a>
</div>
    </article>
  )
}

export default ProductCard