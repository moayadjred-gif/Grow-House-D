function Home() {
  return (
    <section
        id="home"
        className="bg-[#faf6ed] py-16"
    >
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">

        <div>
        <p className="mb-4 text-sm font-bold tracking-[3px] text-[#a65f3e]">
            GOOD COFFEE, GOOD MOOD.
        </p>

          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Coffee for a
            <em className="block text-[#a65f3e]">
              better day.
            </em>
          </h1>

          <p className="mb-6 max-w-[400px] text-lg text-[#687267]">
            Discover our handcrafted blends,
            made for your everyday moments.
          </p>

          <a
            href="#shop"
            className="inline-block rounded-full bg-[#294735] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#b66b43]"
          >
            Explore Our Coffee →
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000"
            alt="Fresh coffee cup"
            className="h-[400px] w-full rounded-[120px_35px] object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Home