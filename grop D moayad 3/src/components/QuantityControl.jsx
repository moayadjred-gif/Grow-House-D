import { useState } from "react"

function QuantityControl() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="my-4 flex items-center gap-4">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="rounded bg-[#294735] px-3 py-1 text-white"
      >
        -
      </button>

      <span className="font-bold">{quantity}</span>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="rounded bg-[#294735] px-3 py-1 text-white"
      >
        +
      </button>
    </div>
  )
}

export default QuantityControl