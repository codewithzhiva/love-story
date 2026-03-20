<script>
  import { onMount } from 'svelte';
  import Cover from '$lib/Cover.svelte';
  import Timeline from '$lib/Timeline.svelte';
  import MoonMessage from '$lib/MoonMessage.svelte';
  import Letter from '$lib/Letter.svelte';
  import ChaosSection from '$lib/ChaosSection.svelte';
  import Closing from '$lib/Closing.svelte';

  let mounted = false;
  onMount(() => { mounted = true; });
</script>

{#if mounted}
  <Cover />
  <Timeline />
  <MoonMessage />
  <Letter />
  <ChaosSection />
  <Closing />
{/if}
