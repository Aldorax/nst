import Image from "next/image";

export function PortfolioScene({
  project,
}: {
  project: "orbit" | "form" | "pulse";
}) {
  if (project === "orbit")
    return (
      <div className="portfolio-scene orbit-scene" aria-hidden="true">
        <div className="scene-label">ORBIT® / A NEW FINANCIAL LANGUAGE</div>
        <div className="orbit-watermark">orbit</div>
        <div className="finance-window">
          <div className="finance-toolbar">
            <strong>orbit®</strong>
            <span>Overview / Wallet / Activity</span>
            <i>↗</i>
          </div>
          <div className="finance-dashboard">
            <div className="finance-main">
              <span className="board-micro">YOUR NEXT MOVE STARTS HERE</span>
              <h3>
                Money with
                <br />
                momentum.
              </h3>
              <div className="finance-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="finance-chart-caption">
                <span>MON</span>
                <span>WED</span>
                <span>FRI</span>
                <span>SUN</span>
              </div>
            </div>
            <div className="finance-sidebar">
              <span>SPACE TO GROW</span>
              <div className="finance-dial">↗</div>
              <strong>
                A clearer
                <br />
                perspective.
              </strong>
              <p>Save. Spend. Move forward.</p>
            </div>
          </div>
        </div>
        <div className="orbit-credit credit-black">
          <span>orbit®</span>
          <i>▦</i>
          <b>
            MAKE YOUR
            <br />
            NEXT MOVE.
          </b>
          <small>0000 / CONCEPT</small>
        </div>
        <div className="orbit-credit credit-silver">
          <span>orbit®</span>
          <i>◉</i>
          <b>
            A BETTER
            <br />
            ORBIT.
          </b>
          <small>0000 / CONCEPT</small>
        </div>
        <div className="scene-baseline">
          STRATEGY → IDENTITY → DIGITAL EXPERIENCE <span>01 / NST STUDIES</span>
        </div>
      </div>
    );
  if (project === "form")
    return (
      <div className="portfolio-scene field-scene" aria-hidden="true">
        <Image
          src="/images/form-field.webp"
          alt=""
          fill
          sizes="100vw"
          className="field-backdrop"
        />
        <div className="scene-label">FORM & FIELD / OBJECTS OF INTENTION</div>
        <h3 className="field-editorial">
          Made to
          <br />
          <em>stay.</em>
        </h3>
        <div className="field-magazine">
          <div className="field-magazine-nav">
            F/F <span>COLLECTION / 001</span>
          </div>
          <div className="field-magazine-photo">
            <Image src="/images/form-field.webp" alt="" fill sizes="40vw" />
          </div>
          <h4>
            Quiet forms.
            <br />
            Lasting impressions.
          </h4>
          <div className="field-magazine-bottom">
            <span>THE EVERYDAY COLLECTION</span>
            <b>↗</b>
          </div>
        </div>
        <div className="field-material">
          <span>MATERIAL STUDY / 01</span>
          <div>
            <i />
            <i />
            <i />
          </div>
          <strong>Ash. Stone. Light.</strong>
        </div>
        <div className="field-caption">
          A DIGITAL HOME
          <br />
          FOR CONSIDERED LIVING.
        </div>
        <div className="scene-baseline">
          ART DIRECTION → E-COMMERCE → EDITORIAL <span>02 / NST STUDIES</span>
        </div>
      </div>
    );
  return (
    <div className="portfolio-scene sound-scene" aria-hidden="true">
      <Image
        src="/images/pulse.webp"
        alt=""
        fill
        sizes="100vw"
        className="sound-backdrop"
      />
      <div className="scene-label">PULSE® / SOUND WITHOUT LIMITS</div>
      <strong className="sound-wordmark">PULSE</strong>
      <div className="sound-disc">
        <div />
        <span>33⅓ / PLAY IT LOUD</span>
      </div>
      <div className="sound-ticket">
        <span>PULSE / LIVE SESSIONS</span>
        <h3>
          FEEL
          <br />
          EVERYTHING.
        </h3>
        <div className="sound-bars">
          {Array.from({ length: 22 }, (_, i) => (
            <i
              key={i}
              style={{ height: `${20 + Math.sin(i * 0.8) ** 2 * 60}px` }}
            />
          ))}
        </div>
        <div className="ticket-footer">
          <b>ADMIT ONE</b>
          <span>CONCEPT / VOL. 01</span>
        </div>
      </div>
      <div className="sound-sticker">
        NO
        <br />
        SILENCE
        <br />
        ALLOWED ↗
      </div>
      <div className="scene-baseline">
        IDENTITY → MOTION → CAMPAIGN <span>03 / NST STUDIES</span>
      </div>
    </div>
  );
}
