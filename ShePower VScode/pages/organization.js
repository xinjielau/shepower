import Layout from "../components/Layout";
import SectionIntro from "../components/SectionIntro";
import { members } from "../data/siteData";

export default function OrganizationPage() {
return ( <Layout title="Organization"> <section className="section-wrap py-28">

    <SectionIntro
      eyebrow="Organization"
      title="成员介绍"
      description="Meet the inspiring women behind the community."
    />

    <div className="mt-20 grid justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3">

      {members.map((member) => (

        <article
          key={member.name}
          className="group rounded-[32px] bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          {/* PROFILE IMAGE */}
          <div className="mx-auto w-44 h-44 overflow-hidden rounded-full">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          {/* NAME */}
          <h3 className="mt-8 text-2xl font-semibold text-stone-900">
            {member.name}
          </h3>

          {/* ROLE */}
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            {member.role}
          </p>

          {/* QUOTE */}
          {member.quote && (
            <p className="mt-6 text-sm italic text-stone-600 leading-relaxed">
              “{member.quote}”
            </p>
          )}

          {/* INSTAGRAM BUTTON */}
          {member.instagram && (
            <div className="mt-8">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-rose-300 px-5 py-2 text-sm font-medium text-rose-500 transition hover:bg-rose-50"
              >
                Instagram
              </a>
            </div>
          )}

        </article>

      ))}

    </div>
  </section>
</Layout>

);
}

