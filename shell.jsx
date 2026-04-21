// Sugo AI — Studio Edition prototype
// Five routes on one page via hash router: #/, #/about, #/writing, #/writing/why-pilots-fail, #/contact

const { useState, useEffect, useRef, useCallback } = React;

// ---------- Router ----------
function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "/");
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace(/^#/, "") || "/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function nav(to) {
  window.location.hash = "#" + to;
}

// ---------- Count-up ----------
function useCountUp(target, durationMs = 900, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVal(target); return; }
    let raf, start;
    const tick = (ts) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, trigger]);
  return val;
}

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.unobserve(el); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return inView;
}

// ---------- Fade-in wrapper ----------
function Fade({ children, delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);
  return (
    <Tag ref={ref} className={"fade-in " + (inView ? "in " : "") + (rest.className || "")}
         style={{ transitionDelay: inView ? `${delay}ms` : "0ms", ...(rest.style||{}) }}>
      {children}
    </Tag>
  );
}

// ---------- Wordmark + Pot mark ----------
function Wordmark() {
  return (
    <a className="wordmark" href="#/" onClick={(e)=>{e.preventDefault(); nav("/");}}>
      <span className="wordmark-sugo">Sugo</span>
      <span className="wordmark-ai">AI</span>
    </a>
  );
}

function PotMark({ large }) {
  return (
    <span className={"pot-mark " + (large ? "pot-mark-lg" : "")} aria-label="Sugo mark">
      <span style={{fontStyle:"italic"}}>sugo</span>
    </span>
  );
}

// ---------- Nav ----------
function Nav({ route, navColor, onMobile }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
  }, [mobileOpen]);
  const cls = `nav ${navColor === "clay" ? "on-clay" : navColor === "moss" ? "on-moss" : ""}`;
  const isHome = route === "/" || route === "";
  return (
    <>
      <nav className={cls}>
        <Wordmark />
        <div className="nav-links">
          <button className="nav-link" aria-current={route === "/about" ? "page" : undefined} onClick={()=>nav("/about")}>About</button>
          <button className="nav-link" aria-current={route.startsWith("/writing") ? "page" : undefined} onClick={()=>nav("/writing")}>Writing</button>
          <button className="nav-link" aria-current={route === "/contact" ? "page" : undefined} onClick={()=>nav("/contact")}>Contact</button>
        </div>
        <button className="nav-mobile-trigger" onClick={()=>setMobileOpen(true)}>Menu</button>
      </nav>
      {mobileOpen && (
        <div className={"mobile-overlay " + (navColor === "clay" ? "on-clay" : navColor === "moss" ? "on-moss" : "")}>
          <button className="close" onClick={()=>setMobileOpen(false)}>Close</button>
          <button className="mobile-link" onClick={()=>{nav("/"); setMobileOpen(false);}}>Home</button>
          <button className="mobile-link" onClick={()=>{nav("/about"); setMobileOpen(false);}}>About</button>
          <button className="mobile-link" onClick={()=>{nav("/writing"); setMobileOpen(false);}}>Writing</button>
          <button className="mobile-link" onClick={()=>{nav("/contact"); setMobileOpen(false);}}>Contact</button>
        </div>
      )}
    </>
  );
}

// ---------- Section label ----------
function SectionLabel({ n, children }) {
  return (
    <>
      <p className="mono-label section-label">{n} — {children}</p>
      <div className="section-label-bar" aria-hidden="true"></div>
    </>
  );
}

// ---------- Calendly modal ----------
function CalModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={onClose}>Close</button>
        <p className="mono-label">Calendly · 15 min</p>
        <div className="section-label-bar"></div>
        <h2 className="h2">Pick a slot.</h2>
        <p className="body">A short intro call — no deck, no agenda. Just a conversation.</p>
        <p className="mono-meta" style={{marginTop:"auto"}}>
          calendly.com/placeholder
        </p>
      </div>
    </div>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-meta">
          <span>Sugo AI &middot; Houston, TX</span>
          <a className="inline-link" href="mailto:marc@sugoai.com">marc@sugoai.com</a>
          <span>© 2026</span>
        </div>
        <div className="footer-mark"><PotMark /></div>
      </div>
    </footer>
  );
}

window.Router = { useHashRoute, nav };
window.UI = { Wordmark, PotMark, Nav, SectionLabel, Fade, Footer, CalModal, useCountUp, useInView };
