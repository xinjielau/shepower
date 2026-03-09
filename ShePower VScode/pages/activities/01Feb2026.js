import Layout from "../../components/Layout";

export default function EventPage() {

const photos = [
"/images/1Feb2026/image1.jpeg",
"/images/1Feb2026/image2.jpeg",
"/images/1Feb2026/image3.jpeg",
"/images/1Feb2026/image4.jpeg",
"/images/1Feb2026/image6.jpeg",
];

const videos = [
"/images/1Feb2026/video1.mp4",
"/images/1Feb2026/video2.mp4",
"/images/1Feb2026/video3.mp4",
"/images/1Feb2026/video4.mp4",
"/images/1Feb2026/video5.mp4"
];

return (

<Layout title="Love & Gather">

{/* HERO */}

<section className="section-wrap pt-28 pb-24 text-center">

<p className="text-xs uppercase tracking-[0.35em] text-rose-400 font-semibold">
EVENT RECAP
</p>

<h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-900 leading-tight">
Love & Gather
</h1>

<div className="mx-auto mt-6 h-[2px] w-16 bg-rose-300 rounded-full"></div>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
Love & Gather 是一场属于女性的温暖相聚。大家可以在轻松自在的氛围中聊天、交流想法、分享生活中的点滴与成长故事。
在这里，我们希望建立一个互相支持、互相鼓励的社区，让每一位女性都能感受到连接与陪伴。
</p>

</section>


{/* PHOTO GALLERY */}

<section className="section-wrap pb-24">

<h2 className="text-3xl font-semibold text-stone-900 text-center">
Moments from the Event
</h2>

<div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

{photos.map((photo, i) => (

<img
key={i}
src={photo}
alt="Event moment"
className="w-full rounded-[24px] hover:scale-[1.02] transition duration-300"
/>

))}

</div>

</section>


{/* SHORT CLIPS */}

<section className="section-wrap pb-24">

<h2 className="text-3xl font-semibold text-stone-900 text-center">
Short Clips
</h2>

<div className="mt-10 grid gap-8 md:grid-cols-3">

{videos.map((video, i) => (

<video
key={i}
controls
className="rounded-[24px] w-full max-h-[520px] object-cover"
>
<source src={video} type="video/mp4" />
</video>

))}

</div>

</section>

</Layout>

);

}