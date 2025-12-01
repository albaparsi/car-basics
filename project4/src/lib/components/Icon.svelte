<script>
  export let name = '';
  export let size = 26;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  {#if name === 'engine'}
    <!-- Simple engine block icon -->
    <rect x="3" y="7" width="14" height="10" rx="2" ry="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M7 5h6" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M5 11h4" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M11 11h4" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'battery'}
    <!-- Battery icon -->
    <rect x="3" y="8" width="16" height="8" rx="2" ry="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <rect x="8" y="5" width="4" height="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M7 11h2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M15 11h-2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'brakes'}
    <!-- Brake disc icon -->
    <circle cx="12" cy="12" r="5" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M12 7a5 5 0 0 1 5 5" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="12" cy="12" r="1.2" fill="var(--color-primary)" />
  {:else if name === 'fluids'}
    <!-- Drop icon -->
    <path
      d="M12 5c-1.8 2.6-3.5 4.7-3.5 7A3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 15.5 12C15.5 9.7 13.8 7.6 12 5Z"
      stroke="var(--color-primary)"
      stroke-width="1.6"
      fill="none"
    />
  {:else if name === 'check-engine'}
    <!-- Simple check-engine-style outline -->
    <rect x="4" y="8" width="14" height="8" rx="2" ry="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M7 7l2-2h4l2 2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'oil-pressure'}
    <!-- Oil can icon -->
    <path
      d="M4 11h4l2-2 3 1.5h3"
      stroke="var(--color-primary)"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M7 9v-1.5" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M6 15h9" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'battery-warning'}
    <!-- Charging / battery warning -->
    <rect x="4" y="8" width="14" height="8" rx="2" ry="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M11 9.5l-2 3h2l-1 3" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'temp'}
    <!-- Temperature / coolant -->
    <path
      d="M10 6a2 2 0 0 1 4 0v6a3 3 0 1 1-4 0Z"
      stroke="var(--color-primary)"
      stroke-width="1.6"
      fill="none"
    />
    <path d="M12 7v7" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'brake-warning'}
    <!-- Brake warning circle + exclamation -->
    <circle cx="12" cy="12" r="5" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M12 9v3" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="12" cy="14.2" r="0.7" fill="var(--color-primary)" />
  {:else if name === 'tire-pressure'}
    <!-- Tire / TPMS-like icon -->
    <path
      d="M7 7v6a5 5 0 0 0 10 0V7"
      stroke="var(--color-primary)"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 10v3" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'sound'}
    <!-- Sound wave icon -->
    <path d="M8 9v6" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M11 7v10" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M14 9v6" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M17 5v14" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'steering'}
    <!-- Steering wheel icon -->
    <circle cx="12" cy="12" r="6" stroke="var(--color-primary)" stroke-width="1.6" />
    <circle cx="12" cy="12" r="2" stroke="var(--color-primary)" stroke-width="1.6" />
    <path d="M12 6v-2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M12 18v2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M6 12h-2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <path d="M18 12h2" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
  {:else if name === 'info'}
    <!-- Info icon -->
    <circle cx="12" cy="12" r="10" stroke="var(--color-primary)" stroke-width="1.6" fill="none" />
    <path d="M12 8v4" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="12" cy="16" r="1" fill="var(--color-primary)" />
  {:else}
    <!-- Fallback dot -->
    <circle cx="12" cy="12" r="3" fill="var(--color-primary)" />
  {/if}
</svg>

<style>
  svg {
    display: block;
  }
</style>


