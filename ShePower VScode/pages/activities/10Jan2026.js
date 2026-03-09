import Layout from "../../components/Layout";

export default function EventPage() {

const photos = [
"/images/10Jan2026/image1.jpeg",
"/images/10Jan2026/image2.jpeg",
"/images/10Jan2026/image3.jpeg",
"/images/10Jan2026/image4.jpeg",
"/images/10Jan2026/image6.jpeg",
"/images/10Jan2026/image5.jpeg",
"/images/10Jan2026/image7.jpeg"
];

const videos = [
"/images/10Jan2026/video1.mp4",
"/images/10Jan2026/video2.mp4",
"/images/10Jan2026/video3.mp4",
"/images/10Jan2026/video4.mp4",
"/images/10Jan2026/video5.mp4",
"/images/10Jan2026/video6.mp4"
];

return (

<Layout title="孤儿院探访活动">

{/* HERO */}

<section className="section-wrap pt-28 pb-24 text-center">

<p className="text-xs uppercase tracking-[0.35em] text-rose-400 font-semibold">
EVENT RECAP
</p>

<h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-900 leading-tight">
孤儿院探访活动
</h1>

<div className="mx-auto mt-6 h-[2px] w-16 bg-rose-300 rounded-full"></div>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
孤儿院探访活动是一场充满关怀与温度的社区公益活动。我们将走进孩子们的生活，与他们一起聊天、游戏、学习和分享快乐，用真诚的陪伴为他们带来更多笑容与安全感。
对于孩子们来说，一次简单的相处，可能就是一段被记住的温暖时光；而对于参与者来说，这也是一次学习爱、感受爱、传递爱的机会。我们希望通过这次活动，让更多温柔与善意在彼此之间流动，
让关怀不只停留在语言里，而是变成真实的行动。
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