export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary px-6 text-center text-white">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Redirecting</p>
        <h1 className="mt-3 text-2xl font-bold">Opening portfolio...</h1>
        <a className="mt-5 inline-flex rounded-full border border-accent/40 px-5 py-2 text-sm font-bold text-accent" href="/en/">
          Continue to English version
        </a>
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/en/');" }} />
      </div>
    </main>
  );
}
