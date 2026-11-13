function Footer() {
  return (
    <footer id="contact" className="bg-[#263f30] pt-14 text-white">

      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-3">

        <div>
          <h2 className="mb-4 font-serif text-2xl font-bold">
            ☕ Brew Haven
          </h2>
          <p className="text-[#d7dfd4]">
            Sip. Relax. Repeat.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Contact Us</h3>

          <p className="mb-2 text-[#d7dfd4]">
            Email: moayadjred@gmail.com
          </p>

          <p className="text-[#d7dfd4]">
            Phone: +966 55 809 7386
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>

          <a href="#home" className="mb-2 block text-[#d7dfd4] hover:text-[#e9bd92]">
            Home
          </a>

          <a href="#shop" className="mb-2 block text-[#d7dfd4] hover:text-[#e9bd92]">
            Shop
          </a>

          <a href="#about" className="block text-[#d7dfd4] hover:text-[#e9bd92]">
            About
          </a>
        </div>

      </div>

      <div className="border-t border-white/20 py-5 text-center text-[#d7dfd4]">
        <p>© 2026 Brew Haven. Student Project.</p>
      </div>

    </footer>
  )
}

export default Footer