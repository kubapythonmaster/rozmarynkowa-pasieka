import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
