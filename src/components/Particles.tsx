export function Particles({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100;
        const delay = (i * 0.7) % 14;
        const size = 2 + ((i * 7) % 4);
        const dur = 10 + ((i * 3) % 10);
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-[#E85D10] animate-particle"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              boxShadow: "0 0 8px #E85D10",
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
