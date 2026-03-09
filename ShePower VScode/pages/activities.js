import Layout from "../components/Layout";
import Link from "next/link";

export default function Activities() {

const pastEvents = [
{
title: "勇敢爱自己，温暖前行",
slug: "14Dec2025",
date: "14 December 2025",
image: "/images/14Dec2025/image10.jpeg"
},
{
title: "孤儿院探访活动",
slug: "10Jan2026",
date: "10 January 2026",
image: "/images/10Jan2026/image1.jpeg"
},
{
title: "Love & Gather",
slug: "01Feb2026",
date: "1 Feb 2026",
image: "/images/1Feb2026/image1.jpeg"
}
];

return (

<Layout title="Activities">

<section className="section-wrap py-24 text-center">

<h1 className="text-5xl md:text-6xl font-semibold text-stone-900">
Activities
</h1>

<p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto">
Explore the moments where women gather, learn, and grow together.
</p>

</section>

<section className="section-wrap pb-24">

<h2 className="text-3xl font-semibold text-stone-900 mb-12">
Past Activities
</h2>

<div className="grid gap-10 md:grid-cols-3">

{pastEvents.map((event) => (

<Link key={event.slug} href={`/activities/${event.slug}`}>

<article className="group cursor-pointer overflow-hidden rounded-[30px] bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="relative">

<img
src={event.image}
className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
/>

<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-rose-500">
{event.date}
</div>

</div>

<div className="p-6">

<h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-500 transition">
{event.title}
</h3>

<p className="mt-2 text-sm text-stone-500">
Click to explore the event highlights
</p>

</div>

</article>

</Link>

))}

</div>

</section>

</Layout>

);

}