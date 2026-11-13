
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"
import Footer from "./components/Footer"
import Auth from "./components/Auth"

function App() {
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          return null
        }
        return response.json()
      })
      .then((data) => {
        if (data?.user) {
          setUser(data.user)
        }
      })
      .catch((error) => {
        console.error("Session check failed:", error)
      })
  }, [])

  async function handleLogout() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      )

      if (response.ok) {
        setUser(null)
      }
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <>
      <Header
        user={user}
        onLoginClick={() => setShowAuth(true)}
        onLogout={handleLogout}
      />

      <Home />
      <Shop />
      <About />
      <Footer />

      {showAuth && (
        <Auth
          onClose={() => setShowAuth(false)}
          onLogin={setUser}
        />
      )}
    </>
  )
}

export default App
