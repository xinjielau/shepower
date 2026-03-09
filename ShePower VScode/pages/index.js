import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SectionIntro from "../components/SectionIntro";
import { principles, momentPhotos, upcomingActivities, videos } from "../data/siteData";

export default function HomePage() {

const [groupIndex, setGroupIndex] = useState(0);

const photoGroups = [
momentPhotos.slice(0, 5),
momentPhotos.slice(5, 10),
momentPhotos.slice(10, 15)
];

const next = () => {
setGroupIndex((groupIndex + 1) % photoGroups.length);
};

const prev = () => {
setGroupIndex((groupIndex - 1 + photoGroups.length) % photoGroups.length);
};

return ( <Layout title="Home">


  <Hero />

  <section className="section-wrap py-20">
    <SectionIntro
      eyebrow="SHEPOWER"
      title="三立女人的核心理念"
      description="三立女人相信，真正的成长来自内心的力量。当女性拥有独立的思想、稳定的能力与清晰的人生方向，就能够勇敢面对世界，创造属于自己的未来。在这里，我们鼓励每一位女性不断学习、表达自己、实现梦想。"
      align="center"
    />

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {principles.map((item, index) => (
        <article
          key={item.title}
          className="glass-card p-8 fade-rise"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className="inline-flex rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
            {item.title}
          </div>

          <p className="mt-5 text-base leading-8 text-stone-600">
            {item.description}
          </p>

        </article>
      ))}
    </div>
  </section>


  <section className="section-wrap py-20">

    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      <div>

        <SectionIntro
          eyebrow="Introduction Video"
          title="认识 SHEPOWER"
          description="透过这支影片，了解 ShePower 的理念与故事。我们致力于打造一个支持女性成长的社区，让每一位女性都能找到属于自己的力量与方向。"
        />

        <div className="mt-8">
          <Link href="/video" className="secondary-btn">
            Open Video Page
          </Link>
        </div>

      </div>

      <div className="magazine-card overflow-hidden">

        <iframe
          className="aspect-video w-full"
          src={videos[0].embedUrl}
          title={videos[0].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

    </div>

  </section>


  {/* MOMENTS PREVIEW */}

  <section className="section-wrap py-20">

    <div className="flex items-end justify-between gap-6">

      <SectionIntro
        eyebrow="Moments Preview"
        title="属于我们的时刻"
        description="浏览我们社区中的精彩瞬间。"
      />

      <Link href="/moments" className="secondary-btn hidden md:inline-flex">
        See Full Gallery
      </Link>

    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

      {photoGroups[groupIndex].map((photo) => (

        <article key={photo.image} className="magazine-card overflow-hidden">

          <img
            src={photo.image}
            alt={photo.title}
            className="h-80 w-full object-cover"
          />

        </article>

      ))}

    </div>

    <div className="mt-10 flex justify-center gap-6">

      <button onClick={prev} className="secondary-btn">
        ← Previous
      </button>

      <button onClick={next} className="primary-btn">
        Next →
      </button>

    </div>

  </section>

</Layout>


);
}

