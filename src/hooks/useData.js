import { fetchSearchResults } from "@/utils/fetchSearchResults";
import { useEffect, useState } from "react";

export const useData = ({ query, page }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchSearchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });

    // cleanup
    return () => {
      ignore = true;
    };
  }, [query, page]);

  return results;
};
