import { useEffect, useState } from "react";

// works out which section ur currently looking at
// navbar uses this to highlight the right link
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // shrinks the "seen" area to a thin strip in the middle of the screen
      // so only one section counts as active at a time
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    // stop watching when the component goes away
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
