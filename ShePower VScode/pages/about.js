import Layout from "../components/Layout";

export default function About() {
return ( <Layout title="About">


  <section className="section-wrap py-24">

    {/* PAGE TITLE */}

    <p className="text-xs uppercase tracking-[0.35em] text-rose-400">
      About Us
    </p>

    <h1 className="mt-4 text-5xl font-semibold text-stone-900">
      关于三立女人
    </h1>

    <p className="mt-6 max-w-3xl text-lg text-stone-600 leading-8">
      三立女人是一个鼓励女性成长、互助与发光的社群。我们相信，
      真正的独立来自思想能力、经济能力与持续成长能力的积累，
      而不是表面的口号。
    </p>

  </section>


  {/* WHO WE ARE */}

  <section className="section-wrap grid gap-14 pb-24 lg:grid-cols-2 lg:items-center">

    <img
      src="/images/image10.jpeg"
      className="rounded-[32px] object-cover h-[420px] w-full"
    />

    <div>

      <h2 className="text-3xl font-semibold text-stone-900">
        我们是谁
      </h2>

      <p className="mt-6 text-stone-600 leading-8">
        三立女人是一个属于女性的成长空间。在这里，
        我们分享生活故事、交流经验、探索不同的人生可能。
      </p>

      <p className="mt-4 text-stone-600 leading-8">
        每一位女性都有属于自己的光芒，而这个社群希望
        让更多女性找到自信、力量与方向。
      </p>

    </div>

  </section>


  {/* MISSION */}

  <section className="section-wrap grid gap-14 pb-24 lg:grid-cols-2 lg:items-center">

    <div>

      <h2 className="text-3xl font-semibold text-stone-900">
        Mission
      </h2>

      <p className="mt-6 text-stone-600 leading-8">
        Empower women to become independent thinkers,
        financially confident individuals, and capable
        leaders with warmth, clarity, and confidence.
      </p>

    </div>

    <img
      src="/images/image1.jpeg"
      className="rounded-[32px] object-cover h-[420px] w-full"
    />

  </section>


  {/* PHOTO GRID */}

  <section className="section-wrap pb-24">

    <h2 className="text-3xl font-semibold text-center text-stone-900">
      Our Community
    </h2>

    <p className="mt-4 text-center text-stone-600">
      一个充满温度与成长力量的女性社群
    </p>

    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

      <img
        src="/images/image10.jpeg"
        className="rounded-[24px] object-cover h-56 w-full"
      />

      <img
        src="/images/1Feb2026/image1.jpeg"
        className="rounded-[24px] object-cover h-56 w-full"
      />

      <img
        src="/images/10Jan2026/image1.jpeg"
        className="rounded-[24px] object-cover h-56 w-full"
      />

    </div>

  </section>

</Layout>


);
}
