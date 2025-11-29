<script>
  export let title;
  let open = false;
</script>

<div class="accordion-item mb-2" style="border: 1px solid var(--color-border); border-radius: 0.5rem; background-color: var(--color-surface);">
  <button 
    class="accordion-button w-100 text-start py-3 fw-bold d-flex justify-content-between align-items-center"
    style="background-color: transparent; color: var(--color-text-main); border: none;"
    on:click={() => open = !open}
  >
    <span>{title}</span>
    <span>{open ? '−' : '+'}</span>
  </button>
  {#if open}
    <div class="px-3 pb-3" style="color: var(--color-text-muted);">
      <slot />
    </div>
  {/if}
</div>
