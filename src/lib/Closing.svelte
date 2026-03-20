<script>
  import { reveal } from './reveal.js';

  const promises = [
    {
      icon: "🤝",
      title: "Your hand, first.",
      body: "When I reach for someone's hand, it will be yours. When I lean in for the first time, it will be toward you. Every first  yours. Not because I have to, but because I want no one else."
    },
    {
      icon: "🌱",
      title: "Not just how you look.",
      body: "Yes, I noticed you at the dance floor. Of course I did. But that was the door, not the house. What keeps me here is the way your mind works, the chaos you carry, the warmth underneath all of it. Your glow comes from who you are  not just how you appear."
    },
    {
      icon: "🌊",
      title: "This goes deeper than the surface.",
      body: "Attraction fades if that's all there is. What I'm interested in is the long version of you  the messy mornings, the weird opinions, the things you're still figuring out. I want the depth, Rathi. Not just the highlight reel."
    },
    {
      icon: "🛡️",
      title: "Whatever comes  I'm here.",
      body: "I don't know what the future looks like. Nobody does. But I can tell you this: wherever we are, whatever happens between now and then  I will show up for you. Not perfectly. But honestly, and always."
    }
  ];
</script>

<section class="promises-section">
  <div class="pbg" />

  <div class="inner">
    <p class="section-num" use:reveal>V</p>
    <h2 use:reveal={{ delay: 80 }}>What I Want You To Know</h2>
    <p class="section-sub" use:reveal={{ delay: 140 }}>
      Not vows. Not pressure. Just the truth, said plainly.
    </p>

    <div class="promises-grid">
      {#each promises as p, i}
        <div class="promise-card" use:reveal={{ delay: i * 130 }}>
          <span class="p-icon">{p.icon}</span>
          <h3 class="p-title">{p.title}</h3>
          <p class="p-body">{p.body}</p>
        </div>
      {/each}
    </div>

    <div class="glow-block" use:reveal={{ delay: 600 }}>
      <p class="glow-quote">
        "The most attractive thing about you<br />
        has nothing to do with how you look.<br />
        It's the way you <em>light up a room</em> by simply being yourself."
      </p>
      <p class="glow-attr"> Shiva, to Rathi</p>
    </div>
  </div>
</section>

<section class="closing">
  <div class="cbg" />

  <div class="ring" aria-hidden="true">
    {#each Array(12) as _, i}
      <div class="ring-dot" style="--i:{i}" />
    {/each}
  </div>

  <div class="content">
    <div class="heart" aria-hidden="true">♥</div>

    <h2 class="closing-h2" use:reveal>Here we are, Rathi.</h2>

    <p class="text" use:reveal={{ delay: 120 }}>
      The waiting is over.<br />
      All the texts, all the chaos, all the<br />
      <em>perfectly ordinary extraordinary moments</em><br />
       they all led to this room.
    </p>

    <div class="divider" use:reveal={{ delay: 220 }} aria-hidden="true">
      <span class="dline" />
      <span class="glyph">🌙</span>
      <span class="dline dline-r" />
    </div>

    <p class="final" use:reveal={{ delay: 320 }}>
      Hi. I'm Shiva.<br />And I'm really glad you're here.
    </p>

    <p class="made-with" use:reveal={{ delay: 450 }}>
      ✦ &nbsp; made with chaos and love, by Shiva &nbsp; ✦
    </p>
  </div>
</section>

<style>
  /* ── PROMISES SECTION ── */
  .promises-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 1.5rem;
    position: relative;
  }

  .pbg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 75% 65% at 50% 45%, #1e0206 0%, #080102 65%);
  }

  .inner {
    max-width: 720px;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .section-num {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.5em;
    color: var(--gold);
    opacity: 0.45;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: clamp(1.6rem, 5vw, 2.5rem);
    color: var(--text);
    margin-bottom: 0.6rem;
  }

  .section-sub {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    color: var(--text-dim);
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .promises-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  .promise-card {
    background: #130205;
    border: 1px solid rgba(139,0,0,0.2);
    border-radius: 2px;
    padding: 1.6rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .promise-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 50px rgba(139,0,0,0.18);
    border-color: rgba(139,0,0,0.45);
  }

  .p-icon {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .p-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.8rem;
    color: var(--gold);
    letter-spacing: 0.05em;
    margin-bottom: 0.8rem;
    font-weight: 400;
  }

  .p-body {
    font-family: 'IM Fell English', serif;
    font-size: 1rem;
    color: var(--text-dim);
    line-height: 1.9;
    font-style: italic;
  }

  .glow-block {
    border-top: 1px solid rgba(201,168,76,0.1);
    border-bottom: 1px solid rgba(201,168,76,0.1);
    padding: 2.5rem 1rem;
    text-align: center;
  }

  .glow-quote {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: clamp(1.05rem, 3vw, 1.3rem);
    color: var(--text);
    line-height: 2;
    margin-bottom: 1rem;
  }

  .glow-quote em {
    color: var(--gold);
    font-style: italic;
  }

  .glow-attr {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.35em;
    color: var(--crimson);
    opacity: 0.6;
  }

  /* ── CLOSING SECTION ── */
  .closing {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    position: relative;
    text-align: center;
  }

  .cbg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 70% at 50% 55%, #2a0408 0%, #080102 60%);
  }

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    height: 320px;
    margin: -160px 0 0 -160px;
    pointer-events: none;
    animation: ringRotate 20s linear infinite;
  }

  @keyframes ringRotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .ring-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--crimson);
    border-radius: 50%;
    opacity: 0.2;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    --angle: calc(var(--i) * 30deg);
    transform: rotate(var(--angle)) translateX(155px);
    animation: dotPulse calc(2s + var(--i) * 0.2s) ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.5; }
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 520px;
  }

  .heart {
    display: block;
    font-size: clamp(3rem, 10vw, 5rem);
    color: var(--crimson);
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 30px rgba(139,0,0,0.6));
    animation: heartbeat 1.8s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    15%  { transform: scale(1.14); }
    30%  { transform: scale(1); }
    45%  { transform: scale(1.07); }
    60%  { transform: scale(1); }
  }

  .closing-h2 {
    font-size: clamp(1.8rem, 5.5vw, 3rem) !important;
    text-shadow: 0 0 40px rgba(139,0,0,0.3);
    margin-bottom: 1.5rem;
  }

  .text {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: var(--text-dim);
    line-height: 2;
    margin-bottom: 2rem;
  }

  .text em { color: var(--moon); }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem auto;
  }

  .dline {
    display: block;
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(201,168,76,0.3));
  }
  .dline-r {
    background: linear-gradient(to left, transparent, rgba(201,168,76,0.3));
  }

  .glyph { font-size: 1.2rem; }

  .final {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(0.95rem, 3vw, 1.3rem);
    color: var(--crimson);
    margin-bottom: 3rem;
    text-shadow: 0 0 30px rgba(139,0,0,0.4);
    line-height: 1.8;
  }

  .made-with {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.55rem;
    letter-spacing: 0.5em;
    color: var(--text-faint);
    opacity: 0.5;
  }
</style>
