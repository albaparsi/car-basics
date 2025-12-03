<script>
  /**
   * @type {Array<{item: string, checked: boolean}>}
   */
  export let items = [];
</script>

<ul class="list-unstyled">
  {#each items as item}
    <li class="d-flex align-items-center mb-2">
      <input 
        type="checkbox" 
        class="form-check-input me-2" 
        style="accent-color: var(--color-primary);"
        bind:checked={item.checked} 
      />
      <span class="{item.checked ? 'text-decoration-line-through opacity-50' : ''}" style="color: var(--color-text-main);">
        {item.item}
      </span>
    </li>
  {/each}
</ul>
