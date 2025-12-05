import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border p-6">
        <nav className="flex items-center justify-between container mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold">Next.js Advanced Routing</h1>
          </Link>
          <ul className="flex items-center">
            <li>
              <Link href="/parallel-routes">Parallel Routes</Link>
            </li>
            <li>
              <Link href="/gallery">Image Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
    </>
  );
}
