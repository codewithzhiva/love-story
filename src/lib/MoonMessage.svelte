<script>
  import { reveal } from './reveal.js';
  import { onMount } from 'svelte';

  let revealed = false;
  let typed = '';
  const msg = '"The moon is beautiful today, isn\'t it?"';

  function typeMessage() {
    if (revealed) return;
    revealed = true;
    let i = 0;
    const interval = setInterval(() => {
      typed = msg.slice(0, ++i);
      if (i >= msg.length) clearInterval(interval);
    }, 45);
  }

  let moonEl;
  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { typeMessage(); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (moonEl) obs.observe(moonEl);
    return () => obs.disconnect();
  });
</script>

<section class="moon-section" bind:this={moonEl}>
  <div class="bg" />

  <!-- Orbiting stars -->
  <div class="orbit" aria-hidden="true">
    {#each Array(8) as _, i}
      <div class="orbit-star" style="--i:{i}" />
    {/each}
  </div>

  <div class="moon-glow" aria-hidden="true" />
  <div class="moon" aria-hidden="true">🌙</div>

  <div class="content">
    <p class="label" use:reveal>March 10th  The Text</p>

    <div class="message-bubble" use:reveal={{ delay: 200 }}>
      <p class="message-text">{typed}<span class="cursor" class:blink={typed.length < msg.length}>|</span></p>
    </div>

    <div class="translation" use:reveal={{ delay: 400 }}>
      <p class="trans-label">✦ &nbsp; what it actually means &nbsp; ✦</p>
      <p class="trans-text">
        In Japanese, "the moon is beautiful" is the most poetic way to say<br />
        <em>"I love you"</em>  without ever saying those words directly.
      </p>
      <p class="trans-chaos">
        ( you probably didn't know that. or maybe you did. either way  noted 👀 )
      </p>
    </div>
  </div>
</section>

<style>
  .moon-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    position: relative;
    text-align: center;
  }

  .bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle 500px at 50% 35%, #1a1000 0%, #080102 70%);
  }

  /* Moon */
  .moon {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(5rem, 14vw, 8rem);
    filter: drop-shadow(0 0 40px rgba(245,230,200,0.25)) drop-shadow(0 0 80px rgba(245,200,120,0.12));
    animation: moonFloat 5s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes moonFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(-12px); }
  }

  .moon-glow {
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(245,230,200,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Orbit */
  .orbit {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 220px;
    pointer-events: none;
  }

  .orbit-star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #f5e6c8;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    animation: orbit calc(12s + var(--i) * 1.5s) linear infinite;
    --angle: calc(var(--i) * 45deg);
    transform: rotate(var(--angle)) translateX(100px);
    opacity: 0.4;
  }

  @keyframes orbit {
    from { transform: rotate(var(--angle)) translateX(100px); }
    to   { transform: rotate(calc(var(--angle) + 360deg)) translateX(100px); }
  }

  /* Content */
  .content {
    position: relative;
    z-index: 2;
    margin-top: 12rem;
    max-width: 600px;
    width: 100%;
  }

  .label {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.45em;
    color: var(--gold);
    opacity: 0.5;
    margin-bottom: 1.5rem;
  }

  .message-bubble {
    background: linear-gradient(135deg, #1f0508, #130205);
    border: 1px solid rgba(139,0,0,0.3);
    border-radius: 18px 18px 4px 18px;
    padding: 1.4rem 2rem;
    display: inline-block;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 60px rgba(139,0,0,0.08);
  }

  .message-text {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    color: var(--moon);
    line-height: 1.6;
    min-height: 2em;
  }

  .cursor {
    opacity: 0;
  }
  .cursor.blink {
    animation: blink 0.7s step-end infinite;
    opacity: 1;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .translation {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(201,168,76,0.1);
    border-radius: 2px;
    padding: 1.5rem 2rem;
  }

  .trans-label {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    opacity: 0.5;
    margin-bottom: 1rem;
  }

  .trans-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: var(--text-dim);
    line-height: 2;
  }

  .trans-text em {
    color: var(--crimson);
    font-size: 1.2rem;
    font-family: 'IM Fell English', serif;
  }

  .trans-chaos {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--text-faint);
    margin-top: 0.8rem;
  }
</style>
