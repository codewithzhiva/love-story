<script>
  import { reveal } from './reveal.js';
</script>

<section class="letter-section">
  <div class="bg" />

  <div class="inner">
    <p class="section-num" use:reveal>III</p>
    <h2 use:reveal={{ delay: 80 }}>A Letter</h2>

    <div class="card" use:reveal={{ delay: 160 }}>
      <div class="corner tl">✦</div>
      <div class="corner tr">✦</div>
      <div class="corner bl">✦</div>
      <div class="corner br">✦</div>

      <p class="date">Written the morning of our first meeting.</p>
      <p class="salutation">My dearest chaotic human,</p>

      <div class="body">
        <p>
          I've been trying to figure out how to start this for a while now. Every version I wrote felt too formal, too careful  and you are neither of those things. So I'll just say it plainly: I like you. Genuinely, openly, no-take-backs like you.
        </p>
        <p>
          It started at a wedding, of all places. Abi and Vishnu's, surrounded by flowers and music and people dancing with great confidence and questionable coordination. Somewhere in the middle of that gorgeous chaos, you looked at me. And I looked back. And that was the beginning of everything.
        </p>
        <p>
          Since then, we've been this wonderful, ridiculous thing  two people who are maybe a little too much, a little too loud, a little too prone to sending unhinged texts at midnight  and somehow perfectly matched in that.
        </p>
        <p>
          On March 10th, when I said, ‘The moon is beautiful today, isn’t it?’ I knew you understood. And just like that, everything felt surreal.
        </p>
        <p>
          So today, when we finally stand in the same room  I just want you to know: you were thought of, carefully, before this moment ever arrived. You were worth every ridiculous, chaotic, heart-racing second of anticipation.
        </p>
        <p>
          Come as you are. Goofy, chaotic, and entirely yourself.<br />
          That's exactly who I want to meet.
        </p>
      </div>

      <div class="signature">
        With the moon as witness,
        <strong> yours 🌙</strong>
      </div>
    </div>
  </div>
</section>

<style>
  .letter-section {
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
    background: radial-gradient(ellipse 60% 70% at 75% 40%, #1a0205 0%, #080102 65%);
  }

  .inner {
    max-width: 680px;
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
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    color: var(--text);
    margin-bottom: 2.5rem;
  }

  .card {
    background: linear-gradient(145deg, #190407, #0d0102);
    border: 1px solid rgba(139,0,0,0.22);
    border-radius: 2px;
    padding: clamp(2rem, 5vw, 3.5rem);
    position: relative;
    box-shadow:
      0 0 80px rgba(139,0,0,0.08),
      inset 0 0 60px rgba(0,0,0,0.25);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(201,168,76,0.06);
    pointer-events: none;
  }

  .corner {
    position: absolute;
    color: var(--gold);
    opacity: 0.25;
    font-size: 0.7rem;
  }
  .tl { top: 0.8rem; left: 0.8rem; }
  .tr { top: 0.8rem; right: 0.8rem; }
  .bl { bottom: 0.8rem; left: 0.8rem; }
  .br { bottom: 0.8rem; right: 0.8rem; }

  .date {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--text-faint);
    margin-bottom: 1.5rem;
    opacity: 0.7;
  }

  .salutation {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.95rem;
    color: var(--crimson);
    margin-bottom: 1.4rem;
    letter-spacing: 0.05em;
  }

  .body {
    font-family: 'IM Fell English', serif;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    line-height: 2.05;
    color: rgba(237, 221, 208, 0.85);
  }

  .body p { margin-bottom: 1.3rem; }

  .body em {
    color: var(--moon);
    font-style: italic;
  }

  .signature {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: var(--text-dim);
    text-align: right;
    margin-top: 2rem;
  }
  .signature strong {
    display: block;
    font-family: 'Cinzel Decorative', serif;
    font-size: 1rem;
    color: var(--crimson);
    margin-top: 0.3rem;
    letter-spacing: 0.05em;
  }
</style>
