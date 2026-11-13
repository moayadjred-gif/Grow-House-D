
function Header({ user, onLoginClick, onLogout }) {
  return (
    <header className="bg-[#faf6ed] py-5">
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between gap-6">

        <a href="#" className="font-serif text-2xl font-bold">
          ☕ Brew Haven
        </a>

        <nav className="flex gap-6 font-bold">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-bold">{user.name}</span>

            <button
              onClick={onLogout}
              className="rounded-full bg-[#294735] px-6 py-3 font-bold text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={onLoginClick}
            className="rounded-full bg-[#294735] px-6 py-3 font-bold text-white"
          >
            Login / Register
          </button>
        )}

      </div>
    </header>
  )
}

export default Header
