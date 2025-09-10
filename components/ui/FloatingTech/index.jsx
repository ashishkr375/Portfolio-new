import { useEffect, useMemo, useState } from "react";

const ICON_SOURCES = [
  // Local icons first
  "/icons/nextjs.svg",
  "/icons/nodejs.svg",
  "/icons/tailwind.svg",
  "/icons/figma.svg",
  "/icons/vercel.svg",
  "/icons/wordpress.svg",
  // Remote fallbacks and extras
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/postgresql/4169E1",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/amazonaws/FF9900",
  "https://cdn.simpleicons.org/docker/2496ED",
];

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const FloatingTech = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  const items = useMemo(() => {
    if (!ready) return [];
    const count = Math.min(ICON_SOURCES.length, 18);
    const arr = Array.from({ length: count }).map((_, i) => {
      const size = Math.round(randomBetween(28, 52));
      const top = Math.round(randomBetween(5, 85));
      const left = Math.round(randomBetween(5, 90));
      const tx = Math.round(randomBetween(-40, 40));
      const ty = Math.round(randomBetween(-40, 40));
      const rot = Math.round(randomBetween(-12, 12));
      const duration = randomBetween(14, 28).toFixed(2) + "s";
      const delay = randomBetween(-8, 8).toFixed(2) + "s";
      return {
        key: i,
        src: ICON_SOURCES[i % ICON_SOURCES.length],
        style: {
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: 0.12,
          ['--tx']: `${tx}px`,
          ['--ty']: `${ty}px`,
          ['--rot']: `${rot}deg`,
          ['--duration']: duration,
          animationDelay: delay,
          animationDirection: i % 2 === 0 ? 'alternate' : 'alternate-reverse',
        },
      };
    });
    return arr;
  }, [ready]);

  if (!ready) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {items.map((it) => (
        <img
          key={it.key}
          src={it.src}
          alt="tech icon"
          className="absolute float-drift select-none"
          decoding="async"
          loading="lazy"
          style={it.style}
        />)
      )}
    </div>
  );
};

export default FloatingTech;
