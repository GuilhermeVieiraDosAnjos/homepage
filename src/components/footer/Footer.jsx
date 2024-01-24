import './footer.css';

function Footer() {
  return (
    <section className="grid-container">
      <div className="footer-1 footer">
        <img
          src="src\images\image-retro-pcs.jpg"
          alt=""
          className="f-image images"
        />
        <div className="texts">
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <article>
            What happens when old PCs are given modern upgrades?
          </article>
        </div>
      </div>
      <div className="footer-2 footer">
        <img
          src="src\images\image-top-laptops.jpg"
          alt=""
          className="s-image images"
        />
        <div className="texts">
          <h3>02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <article>Our best picks for various needs and budgets.</article>
        </div>
      </div>
      <div className="footer-3 footer">
        <img
          src="src\images\image-gaming-growth.jpg"
          alt=""
          className="t-image images"
        />
        <div className="texts">
          <h3>03</h3>
          <h4>The Growth of Gaming</h4>
          <article>How the pandemic has sparked fresh opportunities.</article>
        </div>
      </div>
    </section>
  );
}

export default Footer;
