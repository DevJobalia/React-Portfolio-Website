import { useState, useEffect } from "reat";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const Listener = () => setMatches(media.matches);
    window.addEventListener("resize", listner);
    return () => window.removeEventListener("resize", Listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
