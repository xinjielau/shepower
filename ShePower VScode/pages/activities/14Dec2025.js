import Layout from "../../components/Layout";

export default function EventPage() {

const photos = [
"/images/14Dec2025/image1.jpeg",
"/images/14Dec2025/image2.jpeg",
"/images/14Dec2025/image3.jpeg",
"/images/14Dec2025/image4.jpeg",
"/images/14Dec2025/image5.jpeg",
"/images/14Dec2025/image6.jpeg",
"/images/14Dec2025/image7.jpeg",
"/images/14Dec2025/image8.jpeg",
"/images/14Dec2025/image9.jpeg",
"/images/14Dec2025/image10.jpeg"
];

const videos = [
"/images/14Dec2025/video1.mp4",
"/images/14Dec2025/video2.mp4",
"/images/14Dec2025/video3.mp4"
];

return (

<Layout title="勇敢爱自己，温暖前行">

{/* HERO */}

<section className="section-wrap pt-28 pb-24 text-center">

<p className="text-xs uppercase tracking-[0.35em] text-rose-400 font-semibold">
EVENT RECAP
</p>

<h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-900 leading-tight">
勇敢爱自己，温暖前行
</h1>

<div className="mx-auto mt-6 h-[2px] w-16 bg-rose-300 rounded-full"></div>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
这是一场属于女性的轻松交流聚会。在忙碌的生活中，我们常常照顾很多人，却很少停下来好好关心自己。
在这次活动中，大家将围坐在一起，分享生活中的故事、成长的经历与内心的想法。通过真诚的交流，
我们希望每一位女性都能更加理解自己、接纳自己，并在彼此的陪伴中获得力量与勇气。
让我们在温暖的氛围里，勇敢爱自己，一起向前走。
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