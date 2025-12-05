import Link from "next/link";

const links = [
  {
    value: "/parallel-routes",
    label: "Parallel Routes",
  },
  {
    value: "/gallery",
    label: "Image Gallery",
  },
];

export default function Home() {
  return (
    <>
      <header className="border p-6">
        <nav className="flex items-center justify-between container mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold">Next.js Advanced Routing</h1>
          </Link>
          <ul className="flex items-center space-x-4">
            {links.map((link) => (
              <li key={link.value}>
                <Link className="hover:underline" href={link.value}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main></main>
    </>
  );
}
