import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/moments", label: "Moments" },
  { href: "/video", label: "Video" },
  { href: "/organization", label: "Organization" },
  { href: "/activities", label: "Activities" },
  { href: "/inspiration", label: "Inspiration" }
];

export default function Layout({ title, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? `${title} | 三立女人` : "三立女人"}</title>
        <meta
          name="description"
          content={description || "ShePower 是每个女人天生拥有的力量—— 當你找到自己、看見價值、活出獨立，你的力量就會被點亮。"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
          <div className="section-wrap flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-rose-700">
              三立女人
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => {
                const active = router.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={active ? "text-sm font-semibold text-rose-700" : "text-sm text-stone-600 transition hover:text-rose-600"}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-rose-100 bg-white/80">
          <div className="section-wrap grid gap-12 py-14 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold text-stone-900">三立女人</h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                ShePower 是每个女人天生拥有的力量—— 當你找到自己、看見價值、活出獨立，你的力量就會被點亮。		
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-500">Navigation</h4>
              <div className="mt-4 space-y-3 text-sm text-stone-600">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link href={item.href} className="transition hover:text-rose-600">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-500">Follow Us</h4>
              <div className="mt-4 space-y-3 text-sm text-stone-600">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-rose-600">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block transition hover:text-rose-600">Instagram</a>
                <a href="https://www.xiaohongshu.com" target="_blank" rel="noreferrer" className="block transition hover:text-rose-600">小红书</a>
              </div>
            </div>
          </div>

          <div className="border-t border-rose-100 py-5 text-center text-sm text-stone-500">
            © 2026 三立女人 · community website.
          </div>
        </footer>
      </div>
    </>
  );
}
