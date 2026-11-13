
import { useState } from "react"

function Auth({ onClose, onLogin }) {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")

    const endpoint = isRegister ? "register" : "login"

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(
            isRegister
              ? { name, email, password }
              : { email, password }
          ),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }

      onLogin(data.user)
      onClose()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[#fffdf7] p-8 shadow-xl">

        <h2 className="mb-6 text-center font-serif text-3xl font-bold">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {isRegister && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-lg border p-3"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
            className="w-full rounded-lg border p-3"
          />

          {error && (
            <p className="text-center text-red-600">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-[#294735] py-3 font-bold text-white"
          >
            {isRegister ? "Create Account" : "Login"}
          </button>

        </form>

        <p className="mt-5 text-center">
          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister)
              setError("")
            }}
            className="ml-2 font-bold text-[#a65f3e]"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-gray-500"
        >
          Close
        </button>

      </div>
    </div>
  )
}

export default Auth
