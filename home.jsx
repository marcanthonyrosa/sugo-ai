// Sugo AI — Home page
const { Wordmark, PotMark, SectionLabel, Fade, Footer, CalModal, useCountUp, useInView } = window.UI;
const { nav } = window.Router;

function Home({ setNavColor, openCal, askVariant }) {
  return (
    <main>
      <Hero openCal={openCal} askVariant={askVariant} />
      <ProblemChapter setNavColor={setNavColor} />
      <WhatWeDo />
      <HowWeWork />
      <Engagements />
      <WhySugo />
      <ProofChapter setNavColor={setNavColor} />
      <GetStarted openCal={openCal} />
      <Footer />
    </main>
  );
}

function Hero({ openCal, askVariant }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <SectionLabel n="01">Sugo AI · Est. 2026</SectionLabel>
            <h1 className="display">Where AI strategy becomes working software.</h1>
            <Fade>
              <p className="lead" style={{marginTop:"40px", maxWidth:"560px"}}>
                Sugo AI helps mid-to-large enterprises cross the gap between AI pilots and production{"\u200A—\u200A"}with agents inside the business and AI-native features inside the product.
              </p>
            </Fade>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={openCal}>Start a conversation</button>
              <a className="link-arrow" href="mailto:marc@sugoai.com">Or email Marc →</a>
            </div>
          </div>
          <div className="hero-aside">
            <AskSugo variant={askVariant} openCal={openCal} />
          </div>
        </div>
      </div>
    </section>
  );
}

// §02 Problem (clay)
function ProblemChapter({ setNavColor }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);
  const statRef = useRef(null);
  const statInView = useInView(statRef, 0.35);
  const pct = useCountUp(95, 900, statInView);
  const figRef = useRef(null);
  const figIn = useInView(figRef, 0.3);
  const figPct = useCountUp(95, 900, figIn);
  const figSmall = useCountUp(5, 900, figIn);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && e.intersectionRatio > 0.3) setNavColor("clay");
      else setNavColor(c => c === "clay" ? "paper" : c);
    }, { threshold: [0, 0.3, 0.6] });
    io.observe(el);
    return () => io.disconnect();
  }, [setNavColor]);

  return (
    <section ref={ref} className="chapter-clay section-fullbleed has-gutter">
      <div className="gutter-annos" aria-hidden="true">
        <div className="anno">MIT Sloan<br/>Aug 2025 · Tbl. 4.2</div>
        <div className="anno">⅓ internal<br/>⅔ partnered</div>
        <div className="anno">50%+ spend<br/>→ Sales &amp; Mkt</div>
      </div>
      <div className="wrap">
        <div className="col-read">
          <SectionLabel n="02">The Problem</SectionLabel>
          <h2 className="h2" style={{opacity: inView ? 1 : 0.4, transition:"opacity 400ms"}}>
            Most enterprise AI<br/>never leaves the pilot stage.
          </h2>
        </div>

        <div className="problem-grid" style={{marginTop:"72px"}}>
          <div className="col-read" style={{margin:0}}>
            <Fade>
              <p className="body">
                MIT&rsquo;s 2025 GenAI research found that 95% of enterprise AI initiatives don&rsquo;t move the P&amp;L. The gap isn&rsquo;t the technology. It&rsquo;s everything around it{"\u200A—\u200A"}integration, workflow fit, adoption, and the time it takes to turn a promising prototype into software your team will actually use every day.
              </p>
            </Fade>
          </div>
          <div ref={statRef} className="stat-panel">
            <p className="mono-label">MIT · August 2025</p>
            <div className="stat-figure">{pct}%</div>
            <p className="stat-label">of enterprise AI pilots fail to move the P&amp;L.</p>
          </div>
        </div>

        <div className="numbered-list col-read" style={{margin:"96px 0 0"}}>
          {[
            ["01","Generic tools, shallow fit.","ChatGPT is brilliant for individuals. In the enterprise, it doesn\u2019t learn your workflows, so usage stays optional and ROI stays invisible."],
            ["02","Build-it-yourself bias.","Companies that try to build AI internally succeed roughly a third as often as companies that bring in a specialist partner. Most still try to go it alone."],
            ["03","Budget in the wrong place.","Over half of AI spend goes to sales and marketing tools. The highest-ROI work\u200A—\u200Aquietly, repeatedly\u200A—\u200Ais in back-office automation."]
          ].map(([n,h,b]) => (
            <Fade key={n} className="numbered-row">
              <div className="num">{n}</div>
              <div>
                <div className="heading">{h}</div>
                <p className="body" style={{color:"var(--paper)"}}>{b}</p>
              </div>
            </Fade>
          ))}
        </div>

        <p className="pullout" style={{marginTop:"96px"}}>
          &ldquo;The gap isn&rsquo;t the model. It&rsquo;s the mile of work around it.&rdquo;
        </p>

        <div ref={figRef} className="fig">
          <div className="fig-head">
            <span className="mono-label">Fig. 01 · Pilot → Production</span>
            <span className="mono-meta">MIT · 2025</span>
          </div>
          <div className="fig-track">
            <div className="fig-side">
              <div className="fig-pct">{figPct}%</div>
              <div className="fig-lab">Stall at pilot</div>
            </div>
            <div className="fig-side right">
              <div className="fig-pct">{figSmall}%</div>
              <div className="fig-lab">Cross over</div>
            </div>
          </div>
          <p className="fig-caption">
            Two populations, one divide. The right side is where working software actually ships.
          </p>
        </div>

        <div className="col-read">
          <p className="closing-italic">
            The companies crossing the divide do the opposite. They partner with a specialist, pick one painful workflow, and launch something real before expanding.
            <br/><br/>
            That&rsquo;s where we come in.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="col-read" style={{margin:0}}>
          <SectionLabel n="03">What We Do</SectionLabel>
          <h2 className="h2">Two places AI earns its keep.</h2>
        </div>
        <div className="two-panel">
          <Fade className="panel">
            <p className="mono-label">In the business</p>
            <h3>Agents and automations inside the work.</h3>
            <p className="body">We build the quiet back-office software{"\u200A—\u200A"}agents that take manual work off the team, integrations that stop the copy-paste, dashboards that actually get opened on Monday.</p>
          </Fade>
          <Fade delay={80} className="panel">
            <p className="mono-label">In the product</p>
            <h3>AI-native features customers feel.</h3>
            <p className="body">We design and ship AI-native features into what you already sell{"\u200A—\u200A"}end-to-end, from discovery through launch, measured against real outcomes.</p>
          </Fade>
        </div>
        <p className="pullout" style={{marginTop:"80px"}}>
          &ldquo;Operations and product. Most firms pick one.&rdquo;
        </p>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    ["01","Map the landscape.","Two to three weeks. We find the AI opportunities with real ROI and real feasibility\u200A—\u200Ascored, ranked, and scoped."],
    ["02","Build something small and real.","Six to twelve weeks for a back-office agent; eight to sixteen for an AI-native product feature. Not a demo\u200A—\u200Asoftware your team actually uses."],
    ["03","Expand what works.","Once something is used and measured, we widen from there. Most engagements compound into a second and third workstream."]
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="col-read" style={{margin:0}}>
          <SectionLabel n="04">How We Work</SectionLabel>
          <h2 className="h2">Small, senior, and on the clock.</h2>
        </div>
        <div className="steps col-read" style={{margin:"72px 0 0"}}>
          {steps.map(([n,h,b]) => (
            <Fade key={n} className="step">
              <div className="step-num">{n}</div>
              <div>
                <h3>{h}</h3>
                <p className="body">{b}</p>
              </div>
            </Fade>
          ))}
        </div>
        <p className="pullout" style={{marginTop:"96px"}}>
          &ldquo;Software your team uses on Monday&mdash;not a deck.&rdquo;
        </p>
      </div>
    </section>
  );
}

function Engagements() {
  const rows = [
    ["AI Opportunity Audit","2–3 weeks","A short, structured engagement to rank the highest-ROI AI opportunities across your business and product."],
    ["Back-office Agent Build","6–12 weeks","We pick one painful, repetitive workflow and launch an agent that runs inside the business\u200A—\u200Ameasurable from day one."],
    ["AI-native Product Feature","8–16 weeks","We design and launch an AI-native feature inside your product\u200A—\u200Athe kind customers feel. Discovery through launch."],
    ["Embedded AI Leadership","3–12 months","Fractional or embedded product leadership for companies building a portfolio of AI initiatives."]
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="col-read" style={{margin:0}}>
          <SectionLabel n="05">Engagements</SectionLabel>
          <h2 className="h2">Four shapes of engagement.</h2>
        </div>
        <div className="ledger" role="table" aria-label="Engagements">
          <div className="ledger-head" role="row">
            <div role="columnheader">Engagement</div>
            <div role="columnheader">Duration</div>
            <div role="columnheader">Description</div>
          </div>
          {rows.map(([name, dur, desc]) => (
            <Fade key={name} className="ledger-row">
              <div className="ledger-name">{name}</div>
              <div className="ledger-dur">{dur}</div>
              <div className="ledger-desc">{desc}</div>
            </Fade>
          ))}
        </div>
        <p style={{marginTop:"40px"}}>
          <span className="body" style={{color:"var(--ink-80)"}}>Not sure which fits? </span>
          <a className="link-arrow" href="#/contact" onClick={(e)=>{e.preventDefault(); nav("/contact");}}>Start with a conversation →</a>
        </p>
      </div>
    </section>
  );
}

function WhySugo() {
  const rows = [
    ["Deliverable", "A slide deck and a recommendation.", "Working software your team uses on Monday."],
    ["Who shows up", "A partner in the pitch, juniors on the build.", "A senior product leader, on the build, for the duration."],
    ["Toolkit", "Legacy stacks, slow cycle times.", "Claude Code, Cursor, Figma, Supabase, Vercel \u2014 shipped weekly."],
    ["Coverage", "Operations or product. Pick one.", "Operations and product. Same senior thinking, both sides."]
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="col-read" style={{margin:0}}>
          <SectionLabel n="06">Why Sugo</SectionLabel>
          <h2 className="h2">What makes this different.</h2>
        </div>
        <div className="compare" role="table" aria-label="Typical firm vs. Sugo">
          <div className="compare-head" role="row">
            <div role="columnheader">Dimension</div>
            <div role="columnheader">Typical firm</div>
            <div role="columnheader">Sugo</div>
          </div>
          {rows.map(([dim, typ, sugo]) => (
            <Fade key={dim} className="compare-row">
              <div className="compare-dim">{dim}</div>
              <div className="compare-typical">{typ}</div>
              <div className="compare-sugo">{sugo}</div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// §07 Proof (moss)
function ProofChapter({ setNavColor }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);
  const s1Ref = useRef(null);
  const s1In = useInView(s1Ref, 0.4);
  const p67 = useCountUp(67, 900, s1In);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && e.intersectionRatio > 0.3) setNavColor("moss");
      else setNavColor(c => c === "moss" ? "paper" : c);
    }, { threshold: [0, 0.3, 0.6] });
    io.observe(el);
    return () => io.disconnect();
  }, [setNavColor]);

  const dots = [];
  for (let i = 0; i < 100; i++) {
    dots.push(<div key={i} className={"dot " + (s1In && i < 67 ? "filled" : "")} style={{transitionDelay: `${i * 8}ms`}} />);
  }

  return (
    <section ref={ref} className="chapter-moss section-fullbleed">
      <div className="wrap">
        <div><SectionLabel n="07">The 5% Side</SectionLabel></div>
        <p className="proof-pullquote" style={{opacity: inView ? 1 : 0.4, transition:"opacity 400ms"}}>
          &ldquo;Companies that buy AI from specialists and build partnerships succeed about two-thirds of the time. Internal builds succeed one-third as often.&rdquo;
        </p>
        <p className="proof-attrib">MIT · State of AI in Business 2025</p>

        <div className="dot-grid-wrap" ref={s1Ref}>
          <div className="dot-grid" aria-label="67 of 100 dots filled, representing partnership success rate" role="img">{dots}</div>
          <div className="dot-legend">
            <div className="row">
              <div className="big">{p67}%</div>
              <div className="lab">Partnership success</div>
            </div>
            <div className="small-row">
              <div className="frac">⅓</div>
              <div className="lab">Internal-build success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStarted({ openCal }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="col-read" style={{margin:0}}>
          <SectionLabel n="08">Get Started</SectionLabel>
          <h1 className="h1" style={{marginBottom:"20px"}}>Start a conversation.</h1>
          <p className="lead">Two ways to reach Marc. Either works.</p>
        </div>
        <div className="cards-2">
          <div className="card">
            <p className="mono-label">15 min · Calendly</p>
            <h3>Pick a slot.</h3>
            <p className="body">A short intro call{"\u200A—\u200A"}no deck, no agenda. Just a conversation.</p>
            <div className="cta-row">
              <button className="btn btn-primary" onClick={openCal}>Book 15 minutes →</button>
            </div>
          </div>
          <div className="card">
            <p className="mono-label">Direct</p>
            <h3>Email Marc directly.</h3>
            <p className="body">marc@sugoai.com. Tell me what you&rsquo;re working on{"\u200A—\u200A"}I read these myself and write back personally.</p>
            <div className="cta-row">
              <a className="link-arrow" href="mailto:marc@sugoai.com">marc@sugoai.com →</a>
            </div>
          </div>
        </div>
        <p className="mono-meta" style={{marginTop:"40px"}}>Based in Houston, TX · working US-wide.</p>
      </div>
    </section>
  );
}

window.Home = Home;
