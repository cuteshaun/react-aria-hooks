import { useEffect, useRef } from "react";

type PolitenessSetting = "polite" | "assertive";

export const useAnnouncer = ({
  politeness = "polite",
}: { politeness?: PolitenessSetting } = {}) => {
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const region = document.createElement("div");
    region.setAttribute("role", politeness === "assertive" ? "alert" : "status");
    region.setAttribute("aria-atomic", "true");
    region.style.position = "absolute";
    region.style.width = "1px";
    region.style.height = "1px";
    region.style.overflow = "hidden";
    region.style.clip = "rect(1px, 1px, 1px, 1px)";
    region.style.whiteSpace = "nowrap";

    document.body.appendChild(region);
    regionRef.current = region;

    return () => {
      if (region.parentNode) {
        region.parentNode.removeChild(region);
      }
    };
  }, [politeness]);

  const announce = (message: string) => {
    if (regionRef.current) {
      regionRef.current.textContent = "";
      setTimeout(() => {
        if (regionRef.current) {
          regionRef.current.textContent = message;
        }
      }, 10);
    }
  };

  return announce;
};
