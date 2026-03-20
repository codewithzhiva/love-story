<script>
  import { reveal } from './reveal.js';

  const events = [
    {
      date: 'February 9th',
      emoji: '💃',
      title: "Abi & Vishnu's Wedding",
      body: "Somewhere between the music and the marigolds, across a crowded dance floor — your eyes found mine. Neither of us looked away fast enough. And that was that.",
      accent: 'rose',
      chaos: "( neither of us will admit who looked first )"
    },
    {
      date: 'The Dance Floor',
      emoji: '👀',
      title: "The Look",
      body: "It wasn't planned. It wasn't scripted. Two chaotic people, mid-move, accidentally locked eyes and accidentally started everything. The universe has a weird sense of humour.",
      accent: 'gold',
      chaos: "( probably looked goofy. definitely worked. )"
    },
    {
      date: 'March 10th',
      emoji: '🌙',
      title: '"The Moon Is Beautiful Today, Isn\'t It?"',
      body: 'You said it like it was casual. It wasn\'t casual. "The moon is beautiful" — that\'s the oldest confession in the world, and you said it like you were talking about weather.',
      accent: 'moon',
      chaos: "( smooth. very smooth. 10/10. )"
    },
    {
      date: 'Today',
      emoji: '✨',
      title: "Finally, In Person",
      body: "Everything that started with a glance and grew through late-night chaos texts — it all arrives here. Right now. This moment.",
      accent: 'rose',
      chaos: "( yes this is still us being chaotic )"
    }
  ];
</script>

<section class="timeline-section">
  <div class="bg" />

  <div class="inner">
    <p class="section-num" use:reveal>II</p>
    <h2 use:reveal={{ delay: 80 }}>Our Ridiculous Beginning</h2>
    <p class="section-sub" use:reveal={{ delay: 140 }}>A timeline of chaos, eye contact, and one very poetic text message.</p>

    <div class="timeline">
      {#each events as ev, i}
        <div class="event" use:reveal={{ delay: i * 120 }}>
          <div class="event-left">
            <div class="event-dot dot-{ev.accent}" />
            {#if i < events.length - 1}
              <div class="event-line" />
            {/if}
          </div>

          <div class="event-card card-{ev.accent}">
            <div class="card-top">
              <span class="card-emoji">{ev.emoji}</span>
              <span class="card-date">{ev.date}</span>
            </div>
            <h3 class="card-title">{ev.title}</h3>
            <p class="card-body">{ev.body}</p>
            <p class="card-chaos">{ev.chaos}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .timeline-section {
    min-height: 100vh;
    padding: 6rem 1.5rem;
    position: relative;
  }

  .bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 70% at 20% 50%, #1f0306 0%, #0a0102 60%);
  }

  .inner {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .section-num {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.5em;
    color: var(--gold);
    opacity: 0.45;
    margin-bottom: 0.6rem;
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
    margin-bottom: 3.5rem;
  }

  .timeline { display: flex; flex-direction: column; gap: 0; }

  .event {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .event-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    flex-shrink: 0;
  }

  .event-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .dot-rose   { border-color: var(--crimson); background: rgba(139,0,0,0.3); box-shadow: 0 0 12px rgba(139,0,0,0.5); }
  .dot-gold   { border-color: var(--gold); background: rgba(201,168,76,0.2); box-shadow: 0 0 12px rgba(201,168,76,0.4); }
  .dot-moon   { border-color: #f5e6c8; background: rgba(245,230,200,0.15); box-shadow: 0 0 16px rgba(245,230,200,0.4); }

  .event-line {
    width: 1px;
    flex: 1;
    min-height: 2rem;
    background: linear-gradient(to bottom, rgba(139,0,0,0.3), transparent);
    margin: 4px 0;
  }

  .event-card {
    flex: 1;
    border: 1px solid;
    border-radius: 2px;
    padding: 1.4rem 1.5rem;
    margin-bottom: 1.5rem;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    background: #110204;
  }

  .event-card:hover {
    transform: translateX(6px);
    box-shadow: -4px 0 30px rgba(139,0,0,0.2);
  }

  .card-rose { border-color: rgba(139,0,0,0.25); }
  .card-gold { border-color: rgba(201,168,76,0.2); }
  .card-moon { border-color: rgba(245,230,200,0.15); }

  .card-top {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .card-emoji { font-size: 1.3rem; }

  .card-date {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    opacity: 0.6;
    text-transform: uppercase;
  }

  .card-title {
    font-family: 'IM Fell English', serif;
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: var(--text);
    font-weight: 400;
    margin-bottom: 0.7rem;
    font-style: italic;
  }

  .card-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: var(--text-dim);
    line-height: 1.85;
    margin-bottom: 0.6rem;
  }

  .card-chaos {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--text-faint);
    opacity: 0.7;
  }

  /* Reveal animations */
  :global(.reveal) {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  :global(.reveal.visible) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
