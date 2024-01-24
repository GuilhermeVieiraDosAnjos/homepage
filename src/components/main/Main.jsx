import React from 'react';
import './main.css';

function Main() {
  return (
    <section className="container">
      <div className="main-img">
        <img
          src="src\images\image-web-3-desktop.jpg"
          alt=""
          className="blocks-img"
        />
      </div>
      <div className="second-content">
        <h2>New</h2>
        <h3> Hydrogen VS Electric Cars</h3>
        <article>Will hydrogen-fueled cars ever catch up to EVs?</article>
        <h3> The Downsides of AI Artistry</h3>
        <article>
          What are the possible adverse effects of on-demand AI image
          generation?
        </article>
        <h3> Is VC Funding Drying Up?</h3>
        <article>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </article>
      </div>
      <div className="main-content">
        <div className="content-title">
          <h2>The Bright Future of Web 3.0?</h2>
        </div>
        <div className="text-content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="submit">Read more</button>
        </div>
      </div>
    </section>
  );
}

export default Main;
