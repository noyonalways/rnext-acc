import { useRef, useState } from "react";

export default function CatFriendsDynamic() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) {
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav className="mx-auto my-4 flex justify-center space-x-4">
        <button
          className="rounded bg-gray-200 px-2 py-1"
          onClick={() => scrollToCat(catList[0])}
        >
          Neo
        </button>
        <button
          className="rounded bg-gray-200 px-2 py-1"
          onClick={() => scrollToCat(catList[5])}
        >
          Millie
        </button>
        <button
          className="rounded bg-gray-200 px-2 py-1"
          onClick={() => scrollToCat(catList[9])}
        >
          Bella
        </button>
      </nav>
      <div>
        <ul className="flex space-x-4 overflow-hidden">
          {catList.map((cat) => (
            <li
              className="min-w-2xs"
              key={cat}
              ref={(node) => {
                const map = getMap();
                map.set(cat, node);

                return () => {
                  map.delete(cat);
                };
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}
