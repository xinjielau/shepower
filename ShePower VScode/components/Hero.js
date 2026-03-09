import Link from "next/link";

export default function Hero() {
return ( <section className="relative overflow-hidden pt-8">

  <div className="section-wrap grid gap-12 py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-16">

    {/* LEFT SIDE */}

    <div className="fade-rise">

      <div className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
        Educational Community
      </div>

      <h1 className="mt-8 text-5xl font-semibold leading-[1.06] text-stone-900 md:text-7xl">
        三立女人
      </h1>

      <p className="mt-5 text-2xl font-medium leading-relaxed text-rose-600 md:text-3xl">
        思想独立 · 经济独立 · 能力独立
      </p>

      <p className="mt-7 max-w-2xl text-lg leading-9 text-stone-600">
        三立女人，是一个属于女性的成长社区。在这里，我们分享生活故事、交流经验、
        探索不同的人生可能。每一位女性都有属于自己的光芒，而这个空间，
        希望让更多女性找到自信、力量与方向。
      </p>

      <p className="mt-6 text-sm uppercase tracking-[0.3em] text-rose-400">
        A space for women to grow, speak and shine
      </p>

      {/* BUTTONS */}

      <div className="mt-9 flex flex-wrap gap-4">

        <Link href="/about" className="primary-btn">
          Read the Story
        </Link>

        <Link href="/moments" className="secondary-btn">
          See the Gallery
        </Link>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="mt-12 text-sm text-stone-500 tracking-widest animate-bounce">

        ↓ Discover the Community

      </div>

    </div>

    {/* RIGHT SIDE IMAGES */}

    <div className="relative fade-rise">

      <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl" />
      <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="grid grid-cols-2 gap-4">

        <img
          src="/images/image3.jpeg"
          alt="Women portrait"
          className="h-72 w-full rounded-[34px] object-cover shadow-floaty"
        />

        <div className="grid gap-4">

          <img
            src="/images/image1.jpeg"
            alt="Woman smiling"
            className="h-36 w-full rounded-[28px] object-cover shadow-soft"
          />

          <div className="glass-card flex items-center justify-center p-6 text-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
                Creative Space
              </p>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                每个女生都可以分享自己的想法、故事。
                这是一个属于女性的温柔角落。
              </p>

            </div>

          </div>

        </div>

        <img
          src="/images/image10.jpeg"
          alt="Woman portrait"
          className="col-span-2 h-80 w-full rounded-[36px] object-cover shadow-floaty"
        />

      </div>

    </div>

  </div>

</section>

);
}

