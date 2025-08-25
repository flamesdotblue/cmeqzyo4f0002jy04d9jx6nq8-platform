import Link from 'next/link'

export default function Home() {
  const videoSrc = 'https://static.vecteezy.com/system/resources/previews/066/704/050/mp4/color-abstract-a-symphony-of-blended-hues-offering-a-versatile-backdrop-for-visual-communication-free-video.mp4'

  return (
    <main className="relative min-h-screen">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23f4f4f4'/%3E%3Cstop offset='60%25' stop-color='%23f7e0d1'/%3E%3Cstop offset='100%25' stop-color='%230e607a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E"
        src={videoSrc}
        aria-label="Soft multi-colored gradient video background"
        crossOrigin="anonymous"
      />

      <div className="container relative z-10 flex min-h-screen flex-col">
        {/* Nav */}
        <header className="flex items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-black" aria-hidden />
            <span className="text-sm font-semibold">Helix</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#pricing" className="text-sm text-black/70 hover:text-black">Pricing</Link>
            <Link href="#faq" className="text-sm text-black/70 hover:text-black">FAQ</Link>
            <a href="#waitlist" className="button-primary">Get early access</a>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4">
              <span className="badge">YC-style • Minimal • Fast</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl">
              AI customer support that resolves tickets before you wake up
            </h1>
            <p className="mt-4 text-base leading-relaxed text-black/70 sm:text-lg">
              Helix is an autonomous support agent that drafts replies, handles live chats, and learns from your docs. Connect your help desk in minutes.
            </p>

            <form id="waitlist" className="glass mt-8 flex w-full flex-col gap-3 rounded-xl p-3 sm:flex-row" action="/api/subscribe" method="post">
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-black/10 bg-white/70 px-3 py-3 text-sm outline-none placeholder:text-black/40 focus:border-black/30"
                aria-label="Email address"
              />
              <button className="button-primary w-full sm:w-auto" type="submit">Join waitlist</button>
            </form>

            <div className="mt-4 flex items-center gap-4 text-xs text-black/60">
              <span>Works with Zendesk, Intercom, Freshdesk</span>
              <span aria-hidden>•</span>
              <span>No code required</span>
            </div>

            {/* Social proof */}
            <div className="mt-12 grid grid-cols-2 items-center gap-4 opacity-80 sm:grid-cols-4">
              <div className="h-8 rounded-md bg-white/50" />
              <div className="h-8 rounded-md bg-white/50" />
              <div className="h-8 rounded-md bg-white/50" />
              <div className="h-8 rounded-md bg-white/50" />
            </div>
          </div>
        </section>

        {/* Minimal sections */}
        <section id="pricing" className="mb-24">
          <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Simple pricing</h2>
            <p className="mt-2 text-black/70">Start free. Scale as you automate more conversations.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white/70 p-5">
                <div className="text-sm font-medium">Starter</div>
                <div className="mt-1 text-3xl font-semibold">$0</div>
                <p className="mt-2 text-sm text-black/70">100 assisted replies/month</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white/70 p-5">
                <div className="text-sm font-medium">Growth</div>
                <div className="mt-1 text-3xl font-semibold">$99</div>
                <p className="mt-2 text-sm text-black/70">Unlimited teammates, priority support</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="faq" className="mb-12 text-center text-xs text-black/60">
          <p>Questions? Email hello@helix.support</p>
        </footer>
      </div>
    </main>
  )
}
