const VALUES = [
  "Senior on the build",
  "Software on Monday",
  "One painful workflow at a time",
  "Operations and product",
  "Measured, not promised",
];

export function ValuesMarquee() {
  // Double the items for seamless loop
  const items = [...VALUES, ...VALUES];

  return (
    <section className="py-3">
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {items.map((v, i) => (
              <span key={i}>{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
