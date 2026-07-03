export function HeroPrintStack() {
  return (
    <div className="hero-stack" aria-hidden="true">
      <div className="press-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="paper paper-back">
        <span className="bar bg-cyan" />
        <span className="bar bg-magenta" />
        <span className="bar bg-yellow" />
      </div>
      <div className="paper paper-mid">
        <div className="menu-lines">
          {Array.from({ length: 7 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
      <div className="paper paper-front">
        <div className="print-mark">MGP</div>
        <div className="swatches">
          <span className="bg-cyan" />
          <span className="bg-magenta" />
          <span className="bg-yellow" />
          <span className="bg-orange" />
        </div>
        <div className="card-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function ColorStrip() {
  return (
    <div className="color-strip" aria-hidden="true">
      <span className="bg-cyan" />
      <span className="bg-magenta" />
      <span className="bg-yellow" />
      <span className="bg-orange" />
    </div>
  );
}
