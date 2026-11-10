function About() {
  return (
    <section id="about" className="bg-[#e9e9d5] py-20">
      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">

        <div>
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
            alt="Cozy coffee shop"
            className="h-[350px] w-full rounded-[100px_30px] object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-[3px] text-[#a65f3e]">
            ABOUT BREW HAVEN
          </p>

          <h2 className="mb-5 font-serif text-4xl font-bold md:text-5xl">
            More than coffee.
          </h2>

          <p className="mb-6 text-lg text-[#56665a]">
            Brew Haven is a cozy space for coffee lovers.
            A place to relax, recharge, and enjoy
            the little things.
          </p>

          <a
            href="#contact"
            className="inline-block rounded-full bg-[#294735] px-6 py-3 font-bold text-white transition hover:bg-[#b66b43]"
          >
            Learn More →
          </a>
        </div>

      </div>
    </section>
  )
}

export default About