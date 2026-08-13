import { CAL_URL } from "@/components/ui/CalModal";

interface NextStepProps {
  closer: string;
}

export function NextStep({ closer }: NextStepProps) {
  return (
    <section className="next-step" id="next-step">
      <div className="wrap">
        <h2 className="next-step__h">
          Start a <span className="accent">conversation.</span>
        </h2>
        <p className="next-step__body">{closer}</p>
        <div className="next-step__actions">
          <a
            className="btn-primary"
            href={CAL_URL}
            target="_blank"
            rel="noopener"
          >
            Book 30 minutes{" "}
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
          <a className="next-step__secondary" href="mailto:marc@sugoai.com">
            Email Marc{" "}
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
        <div className="next-step__location">
          Based in Houston, TX &middot; working US-wide
        </div>
      </div>
    </section>
  );
}
