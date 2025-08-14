import { useData } from "@/hooks/useData";
import { useState } from "react";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const results = useData({ query, page });

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="mb-8">
        <ul className="flex items-center justify-center space-x-2">
          {[1, 2, 3, 4].map((num) => (
            <li key={num}>
              <button
                onClick={() => setPage(num)}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 ${
                  page === num
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="text-center text-gray-500">{results}</p>
      </div>
    </div>
  );
};

export default SearchResults;
