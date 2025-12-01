<script>
  import { page } from '$app/stores';
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Car Basics', href: '/car-basics' },
    { label: 'Common Problems', href: '/common-problems' },
    { label: 'Repair Costs', href: '/repair-costs' },
    { label: 'DIY Basics', href: '/diy-basics' },
    { label: 'Mechanic Checklist', href: '/mechanic-checklist' },
  ];
</script>

<nav class="navbar navbar-expand-lg" style="background-color: var(--color-primary);">
  <div class="container-fluid">
    <div class="navbar-nav d-flex flex-row flex-wrap gap-2">
      {#each navItems as item}
        <a
          href={item.href}
          class="nav-link text-white px-3 py-2 rounded
            {$page.url.pathname === item.href
              ? 'active fw-bold'
              : ''}"
          style="{$page.url.pathname === item.href
            ? 'background-color: rgba(255, 255, 255, 0.2);'
            : ''}"
        >
          {item.label}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
</style>

