import Layout from "../components/Layout";

export default function Moments() {

const photos = [
"/images/image1.jpeg",
"/images/image2.jpeg",
"/images/image3.jpeg",
"/images/image4.jpeg",
"/images/image5.jpeg",
"/images/image6.jpeg",
"/images/image7.jpeg",
"/images/image8.jpeg",
"/images/image9.jpeg",
"/images/image10.jpeg",
"/images/image11.jpeg",
"/images/image12.jpeg",
"/images/image13.jpeg",
"/images/image14.jpeg",
"/images/image15.jpeg"
];

return (

<Layout title="Moments">

<section className="section-wrap pt-28 text-center">

<p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">
COMMUNITY ALBUM
</p>

<h1 className="mt-4 text-6xl font-semibold text-stone-900">
Moments
</h1>

<div className="mx-auto mt-6 h-[2px] w-16 bg-rose-300 rounded-full"></div>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
Every moment of growth, connection and inspiration shared within our community.
</p>

</section>

<section className="section-wrap py-20">

<div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

{photos.map((photo, i) => (

<img
key={i}
src={photo}
className="w-full rounded-[24px] hover:scale-[1.02] transition duration-300"
/>

))}

</div>

</section>

</Layout>

);

}