<script>
  import Icon from '$lib/components/Icon.svelte';

  export let title;
  export let description;
  export let icon = '';
</script>

<div
  class="card mb-3 h-100 info-card"
  style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: 1rem; box-shadow: 0 6px 16px rgba(58, 58, 58, 0.05);"
>
  <div class="card-body d-flex">
    {#if icon}
      <div
        class="d-flex align-items-center justify-content-center me-3"
        style="width: 40px; height: 40px;"
      >
        <Icon name={icon} size={28} />
      </div>
    {/if}
    <div>
      <h3 class="card-title fw-bold mb-2" style="color: var(--color-text-main);">{title}</h3>
      <p class="card-text mb-0" style="color: var(--color-text-muted);">{description}</p>
    </div>
  </div>
</div>

<style>
  .info-card {
    position: relative;
    overflow: hidden;
  }

  .info-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: var(--color-primary);
    opacity: 0.8;
  }
</style>
