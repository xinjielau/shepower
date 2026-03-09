import Layout from "../components/Layout";
import SectionIntro from "../components/SectionIntro";
import { videos } from "../data/siteData";

export default function VideoPage() {
  return (
    <Layout title="Video">
      <section className="section-wrap py-20">
        <SectionIntro
          eyebrow="Video"
          title="影片空间"
          description="这里保留多个影片区块，让整个网站不只是照片和文字，而是真正有内容的展示页。"
        />

        <div className="mt-12 space-y-10">
          {videos.map((video, index) => (
            <article key={video.title} className="magazine-card grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr]">
              <div className="bg-stone-100">
                <iframe
                  className="aspect-video w-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-500">{video.speaker}</p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900">{video.title}</h3>
                <p className="mt-5 text-sm leading-8 text-stone-600">{video.description}</p>
                <div className="mt-6 inline-flex rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                  Featured Video {index + 1}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
