// Sugo AI — /about, /writing, /writing/[slug], /contact
const { SectionLabel, Fade, Footer, PotMark } = window.UI;
const { nav } = window.Router;

function About({ openCal }) {
  return (
    <main>
      <section className="section" style={{paddingTop:"180px"}}>
        <div className="wrap">
          <div className="col-read">
            <SectionLabel n="—">About — Sugo AI</SectionLabel>
            <h1 className="h1">A small firm, built slowly.</h1>
            <p className="lead" style={{marginTop:"40px"}}>
              Sugo AI is a product and consulting practice founded by Marc Anthony Rosa. The name is a nod to Sunday sauce{"\u200A—\u200A"}the slow, intentional kind, made with care. We apply that same philosophy to AI work: thoughtful sequencing, genuine capability-building, no shortcuts that become liabilities.
            </p>

            <h2 className="h2" style={{marginTop:"112px", marginBottom:"24px"}}>The thesis.</h2>
            <p className="body mb-m">
              Most enterprise AI efforts stall. Not because the models aren&rsquo;t good enough{"\u200A—\u200A"}they&rsquo;re extraordinary. They stall because the tools don&rsquo;t learn the business, integrations are shallow, and the internal team is stretched too thin to ship new software on top of everything else they own.
            </p>
            <p className="body">
              MIT&rsquo;s August 2025 research made this explicit: 95% of enterprise AI pilots don&rsquo;t move the P&amp;L. The companies that do cross the divide almost always partner with a specialist. Sugo AI exists to be that partner.
            </p>

            <h2 className="h2" style={{marginTop:"112px", marginBottom:"24px"}}>Two places we work.</h2>
            <p className="body mb-m">
              Inside the business, we build agents and automations that take manual work off the team. Dashboards that get used. Integrations that stop the copy-paste. The quiet back-office software MIT&rsquo;s research flags as the highest-ROI{"\u200A—\u200A"}and the most underfunded{"\u200A—\u200A"}AI work in the enterprise.
            </p>
            <p className="body">
              Inside the product, we design and ship AI-native features customers actually feel. End-to-end: discovery, design, architecture, build, measurement, launch.
            </p>

            <h2 className="h2" style={{marginTop:"112px", marginBottom:"24px"}}>How we work.</h2>
            <p className="body mb-m">
              Small, senior, and on the clock. Every engagement is staffed by people who have shipped real software. We work fluently with Claude Code, Cursor, Figma, Supabase, and Vercel{"\u200A—\u200A"}which is why a small Sugo team delivers faster than a traditional firm three times our size.
            </p>
            <p className="body">
              Our default is that the work product is yours. We document everything. We leave your team able to maintain and extend what we ship.
            </p>

            <h2 className="h2" style={{marginTop:"112px", marginBottom:"24px"}}>The founder.</h2>

            <figure className="portrait-fig">
              <div className="portrait-placeholder">
                <span className="mono-meta">Photo · Marc Rosa · 2026</span>
              </div>
              <figcaption>Marc Anthony Rosa · Founder · Houston, TX</figcaption>
            </figure>

            <p className="body mb-m">
              Marc Anthony Rosa has spent fifteen years in product. Most recently Head of Product at a conversational AI company in the MSP space; before that, product leadership roles across health-tech and SaaS. He&rsquo;s currently leading AI product development at a major health-tech organization. Sugo AI is his practice.
            </p>
            <p className="body">
              He lives in Houston, Texas, with his family.
            </p>

            <p style={{marginTop:"56px"}}>
              <span className="body" style={{color:"var(--ink-80)"}}>Want to work together? </span>
              <a className="link-arrow" href="#/contact" onClick={(e)=>{e.preventDefault(); nav("/contact");}}>Start a conversation →</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Writing() {
  return (
    <main>
      <section className="section" style={{paddingTop:"180px"}}>
        <div className="wrap">
          <div className="col-read">
            <div style={{marginBottom:"40px"}}><PotMark /></div>
            <SectionLabel n="—">Writing — Sugo AI</SectionLabel>
            <h1 className="h1">On the record.</h1>
            <p className="lead" style={{marginTop:"40px"}}>
              A monthly essay on what&rsquo;s actually happening at the edge of enterprise AI{"\u200A—\u200A"}research, patterns from the field, and opinions worth disagreeing with.
            </p>

            <div className="callout" style={{marginTop:"56px"}}>
              First essay: &ldquo;Why 95% of enterprise AI pilots fail.&rdquo; Dropping April 2026.
            </div>

            <p style={{marginTop:"32px"}}>
              <a className="link-arrow" href="mailto:marc@sugoai.com?subject=Sugo%20essays">Get essays by email →</a>
            </p>

            <div style={{marginTop:"96px"}}>
              <p className="mono-label" style={{color:"var(--stone)"}}>Preview · placeholder titles</p>
              <div className="section-label-bar" style={{background:"var(--rule)"}}></div>
            </div>
            <div className="writing-rows" style={{marginTop:"24px"}}>
              {[
                ["Apr 2026","6 min read","Why 95% of enterprise AI pilots fail","why-pilots-fail"],
                ["Mar 2026","4 min read","Back-office vs. front-office AI ROI","back-vs-front"],
                ["Feb 2026","5 min read","Build, buy, or partner: the 2026 decision","build-buy-partner"]
              ].map(([d,r,t,slug]) => (
                <a key={slug} className="writing-row" href={`#/writing/${slug}`}
                   onClick={(e)=>{e.preventDefault(); nav(`/writing/${slug}`);}}>
                  <span className="mono-meta">{d.toUpperCase()} &nbsp; · &nbsp; {r.toUpperCase()}</span>
                  <h3>{t}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function WritingPost({ slug }) {
  const titles = {
    "why-pilots-fail": "Why 95% of enterprise AI pilots fail.",
    "back-vs-front": "Back-office vs. front-office AI ROI.",
    "build-buy-partner": "Build, buy, or partner: the 2026 decision."
  };
  const title = titles[slug] || titles["why-pilots-fail"];
  return (
    <main>
      <section className="section" style={{paddingTop:"180px"}}>
        <div className="wrap">
          <div className="col-read">
            <p className="mono-meta" style={{textTransform:"uppercase"}}>Apr 2026 &nbsp; · &nbsp; 6 min read &nbsp; · &nbsp; Research</p>
            <h1 className="h1" style={{marginTop:"16px"}}>{title}</h1>
            <p className="post-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. The short standfirst version: pilots stall for boring, structural reasons{"\u200A—\u200A"}and the fix is boring and structural too.
            </p>
            <div className="post-prose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2>The structural problem.</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <h2>What the 5% do differently.</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>

              <h2>A shorter path.</h2>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </div>

            <div className="post-foot">
              <span>Written by Marc Anthony Rosa.</span>
              <span>If this is useful, forward it to one person.</span>
              <a className="link-arrow" href="#/contact" onClick={(e)=>{e.preventDefault(); nav("/contact");}}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Contact({ openCal }) {
  return (
    <main>
      <section className="section" style={{paddingTop:"180px"}}>
        <div className="wrap">
          <div className="col-read">
            <SectionLabel n="—">Contact — Sugo AI</SectionLabel>
            <h1 className="h1">Start a conversation.</h1>
            <p className="lead" style={{marginTop:"40px"}}>Two ways. Either works.</p>
          </div>
          <div className="cards-2">
            <div className="card">
              <p className="mono-label">15 min · Calendly</p>
              <h3 style={{fontSize:"34px"}}>Pick a slot.</h3>
              <p className="body">A short intro call{"\u200A—\u200A"}no deck, no agenda. Just a conversation.</p>
              <div className="cta-row">
                <button className="btn btn-primary" onClick={openCal}>Book 15 minutes →</button>
              </div>
            </div>
            <div className="card">
              <p className="mono-label">Direct</p>
              <h3 style={{fontSize:"34px"}}>Email Marc directly.</h3>
              <p className="body">marc@sugoai.com. Tell me what you&rsquo;re working on{"\u200A—\u200A"}I read these myself and write back personally.</p>
              <div className="cta-row">
                <a className="link-arrow" href="mailto:marc@sugoai.com">marc@sugoai.com →</a>
              </div>
            </div>
          </div>
          <p className="mono-meta" style={{marginTop:"40px"}}>
            Based in Houston, TX · working US-wide.<br/>
            sugoai.com · marc@sugoai.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

window.Pages = { About, Writing, WritingPost, Contact };
