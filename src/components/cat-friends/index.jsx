import { useRef } from "react";

export default function CatFriends() {
  // Store references to cat images in an array for easier management
  const catRefs = {
    neo: useRef(null),
    millie: useRef(null),
    bella: useRef(null),
  };

  // Single handler function for scrolling to any cat image
  const handleScrollToCat = (catName) => {
    catRefs[catName].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  // Cat data for dynamic rendering with larger dimensions
  const cats = [
    { name: "Neo", width: 800, height: 600 },
    { name: "Millie", width: 800, height: 600 },
    { name: "Bella", width: 800, height: 600 },
  ];

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-5 left-1/2 z-10 -translate-x-1/2 transform rounded-lg bg-white/90 p-3 shadow-md">
        {cats.map((cat) => (
          <button
            key={cat.name.toLowerCase()}
            onClick={() => handleScrollToCat(cat.name.toLowerCase())}
            className="mx-2 rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
          >
            {cat.name}
          </button>
        ))}
      </nav>

      <div className="mt-24 overflow-x-hidden">
        <ul className="flex flex-col gap-[100vh]">
          {cats.map((cat) => (
            <li
              key={cat.name.toLowerCase()}
              className="flex min-h-screen w-full items-center justify-center"
            >
              <div className="relative h-[80vh] w-[90vw]">
                <img
                  src={`https://placecats.com/${cat.name.toLowerCase()}/${cat.width}/${cat.height}`}
                  alt={cat.name}
                  ref={catRefs[cat.name.toLowerCase()]}
                  className="h-full w-full rounded-xl object-cover shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-4 py-2 text-white">
                  {cat.name}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
