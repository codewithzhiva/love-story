<script>
  import { onMount } from 'svelte';

  let petals = [];
  let showScroll = false;

  onMount(() => {
    petals = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 7 + Math.random() * 9,
      delay: Math.random() * 8,
      size: 4 + Math.random() * 5,
      rotate: Math.random() * 360
    }));
    setTimeout(() => showScroll = true, 2400);
  });
</script>

<section class="cover">
  <div class="cover-bg" />

  <!-- Falling petals -->
  <div class="petals" aria-hidden="true">
    {#each petals as p}
      <div
        class="petal"
        style="
          left:{p.left}%;
          animation-duration:{p.duration}s;
          animation-delay:{p.delay}s;
          width:{p.size}px;
          height:{p.size * 1.6}px;
          --rot:{p.rotate}deg;
        "
      />
    {/each}
  </div>

  <!-- Stars -->
  <div class="stars" aria-hidden="true">
    {#each Array(60) as _, i}
      <div class="star" style="
        top:{Math.random()*100}%;
        left:{Math.random()*100}%;
        animation-delay:{Math.random()*4}s;
        width:{1 + Math.random()*2}px;
        height:{1 + Math.random()*2}px;
      " />
    {/each}
  </div>

  <div class="content">
    <p class="eyebrow"> a gift, for you </p>

    <h1>
      <span class="h1-for">For</span>
      <span class="h1-name">Her</span>
    </h1>

    <div class="divider" aria-hidden="true">
      <span class="line" />
      <span class="glyph">✦</span>
      <span class="line" />
    </div>

    <p class="tagline">
      Two chaotic souls, one dance floor,<br />
      and a look that started everything.
    </p>
  </div>

  {#if showScroll}
    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-line" />
      <span>scroll</span>
    </div>
  {/if}
</section>

<style>
  .cover {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
  }

  .cover-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 50% 35%, #3b0809 0%, #180204 45%, #070101 100%);
  }

  /* Petals */
  .petals {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .petal {
    position: absolute;
    top: -20px;
    background: radial-gradient(ellipse at 40% 40%, #a00010, #4a0008);
    border-radius: 50% 0 50% 0;
    opacity: 0;
    animation: petalFall linear infinite;
    transform-origin: center;
  }

  @keyframes petalFall {
    0%   { transform: translateY(-30px) rotate(var(--rot)); opacity: 0; }
    8%   { opacity: 0.65; }
    88%  { opacity: 0.2; }
    100% { transform: translateY(105vh) rotate(calc(var(--rot) + 540deg)); opacity: 0; }
  }

  /* Stars */
  .stars { position: absolute; inset: 0; pointer-events: none; }
  .star {
    position: absolute;
    background: #f5e6c8;
    border-radius: 50%;
    animation: twinkle ease-in-out infinite;
    animation-duration: 3s;
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.3); }
  }

  /* Content */
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    animation: fadeUp 1s ease both;
  }

  .eyebrow {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(0.55rem, 1.5vw, 0.7rem);
    letter-spacing: 0.5em;
    color: var(--gold);
    opacity: 0.6;
    margin-bottom: 1.8rem;
    animation: fadeUp 1s ease 0.1s both;
  }

  h1 {
    line-height: 1;
    margin-bottom: 0.2rem;
    animation: fadeUp 1s ease 0.3s both;
  }

  .h1-for {
    display: block;
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: clamp(2rem, 6vw, 3.5rem);
    color: var(--text-dim);
    font-weight: 300;
  }

  .h1-name {
    display: block;
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(4rem, 14vw, 9rem);
    color: var(--text);
    text-shadow:
      0 0 80px rgba(139,0,0,0.7),
      0 0 30px rgba(139,0,0,0.3);
    letter-spacing: 0.05em;
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem auto;
    animation: fadeUp 1s ease 0.5s both;
  }
  .line {
    display: block;
    width: 80px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold));
  }
  .divider .line:last-child {
    background: linear-gradient(to left, transparent, var(--gold));
  }
  .glyph { color: var(--crimson); font-size: 1rem; }

  .tagline {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: clamp(1rem, 3vw, 1.25rem);
    color: var(--text-dim);
    line-height: 1.9;
    max-width: 420px;
    animation: fadeUp 1s ease 0.7s both;
  }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    z-index: 2;
    animation: fadeUp 0.8s ease both;
    color: var(--text-faint);
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
  }

  .scroll-line {
    width: 1px;
    height: 44px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 1.8s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
