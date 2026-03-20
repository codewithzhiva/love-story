<script>
  import { reveal } from './reveal.js';
  import { onMount } from 'svelte';

  const traits = [
    { label: "Sends 7 texts instead of one", icon: "📱" },
    { label: "Laughs at the wrong time", icon: "😂" },
    { label: "Makes everything a bit dramatic", icon: "🎭" },
    { label: "Googles random things at 1am", icon: "🔍" },
    { label: "Forgets what they were saying mid-sentence", icon: "💭" },
    { label: "Still somehow magnetic", icon: "✨" },
  ];

  let clicked = new Array(traits.length).fill(false);

  function toggle(i) {
    clicked[i] = !clicked[i];
    clicked = [...clicked];
  }

  let confettiPieces = [];

  function spawnConfetti() {
    confettiPieces = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      color: ['#8B0000','#C9A84C','#f5e6c8','#C0392B'][Math.floor(Math.random()*4)],
      duration: 1.5 + Math.random(),
      delay: Math.random() * 0.5,
      size: 4 + Math.random() * 6
    }));
    setTimeout(() => confettiPieces = [], 2500);
  }

  $: if (clicked.every(Boolean)) spawnConfetti();
</script>

<section class="chaos-section">
  <div class="bg" />

  <!-- confetti burst -->
  {#if confettiPieces.length}
    <div class="confetti-wrap" aria-hidden="true">
      {#each confettiPieces as p (p.id)}
        <div class="confetti-piece" style="
          left:{p.x}%;
          background:{p.color};
          animation-duration:{p.duration}s;
          animation-delay:{p.delay}s;
          width:{p.size}px;
          height:{p.size}px;
        " />
      {/each}
    </div>
  {/if}

  <div class="inner">
    <p class="section-num" use:reveal>IV</p>
    <h2 use:reveal={{ delay: 80 }}>The Chaos Report</h2>
    <p class="sub" use:reveal={{ delay: 140 }}>
      Two goofy disasters, one undeniable connection.<br />
      Tap every trait that applies to you both.
    </p>

    <div class="traits" use:reveal={{ delay: 200 }}>
      {#each traits as t, i}
        <button
          class="trait-btn"
          class:active={clicked[i]}
          on:click={() => toggle(i)}
          aria-pressed={clicked[i]}
        >
          <span class="trait-icon">{t.icon}</span>
          <span class="trait-label">{t.label}</span>
          {#if clicked[i]}
            <span class="trait-check">✓</span>
          {/if}
        </button>
      {/each}
    </div>

    {#if clicked.every(Boolean)}
      <div class="chaos-verdict" use:reveal>
        <p class="verdict-emoji">💥</p>
        <p class="verdict-text">Certified Chaos Couple.</p>
        <p class="verdict-sub">Congratulations. You're perfect for each other and also probably a lot to handle. Separately. Together? Unstoppable.</p>
      </div>
    {:else}
      <p class="hint" use:reveal={{ delay: 300 }}>
        ({ clicked.filter(Boolean).length }/{traits.length} checked  keep going)
      </p>
    {/if}
  </div>
</section>

<style>
  .chaos-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 1.5rem;
    position: relative;
  }

  .bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 55%, #200305 0%, #080102 65%);
  }

  .confetti-wrap {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 100;
    overflow: hidden;
  }

  .confetti-piece {
    position: absolute;
    top: -10px;
    border-radius: 2px;
    animation: confettiFall linear forwards;
    opacity: 0;
  }

  @keyframes confettiFall {
    0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(540deg); opacity: 0; }
  }

  .inner {
    max-width: 640px;
    width: 100%;
    position: relative;
    z-index: 2;
    text-align: center;
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
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    color: var(--text);
    margin-bottom: 0.6rem;
  }

  .sub {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    color: var(--text-dim);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }

  .traits {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.9rem;
    margin-bottom: 2rem;
  }

  .trait-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: #130205;
    border: 1px solid rgba(139,0,0,0.2);
    border-radius: 2px;
    padding: 0.9rem 1.1rem;
    color: var(--text-dim);
    font-family: 'IM Fell English', serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: left;
    position: relative;
  }

  .trait-btn:hover {
    border-color: rgba(139,0,0,0.5);
    background: #1a0306;
    transform: scale(1.02);
  }

  .trait-btn.active {
    border-color: var(--crimson);
    background: rgba(139,0,0,0.12);
    color: var(--text);
    box-shadow: 0 0 20px rgba(139,0,0,0.2);
  }

  .trait-icon { font-size: 1.1rem; flex-shrink: 0; }
  .trait-label { flex: 1; }
  .trait-check {
    color: var(--crimson);
    font-weight: bold;
    font-size: 1rem;
  }

  .hint {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--text-faint);
    margin-top: 0.5rem;
  }

  .chaos-verdict {
    background: linear-gradient(135deg, #200407, #140204);
    border: 1px solid rgba(139,0,0,0.35);
    border-radius: 2px;
    padding: 2rem;
    margin-top: 1rem;
    animation: fadeUp 0.6s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .verdict-emoji { font-size: 2.5rem; margin-bottom: 0.5rem; }

  .verdict-text {
    font-family: 'Cinzel Decorative', serif;
    font-size: 1.3rem;
    color: var(--crimson);
    margin-bottom: 0.7rem;
  }

  .verdict-sub {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    color: var(--text-dim);
    font-size: 1rem;
    line-height: 1.8;
  }
</style>
