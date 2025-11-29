<script>
  import InfoCard from '$lib/components/InfoCard.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { basics } from '$lib/data/basics';

  const fluids = [
    { name: 'Engine oil', note: 'Lubricates and protects the engine. Change regularly.' },
    { name: 'Coolant', note: 'Keeps the engine from overheating.' },
    { name: 'Brake fluid', note: 'Transfers force from the pedal to the brakes.' },
    { name: 'Wiper fluid', note: 'Helps keep your windshield clear.' }
  ];

  const warningLights = [
    {
      name: 'Check Engine',
      icon: 'check-engine',
      meaning: 'Something in the engine or emissions system needs attention. Not always an emergency, but don’t ignore it.'
    },
    {
      name: 'Oil Pressure',
      icon: 'oil-pressure',
      meaning: 'Low oil or low oil pressure. Pull over safely and turn the car off as soon as you can.'
    },
    {
      name: 'Battery / Charging',
      icon: 'battery-warning',
      meaning: 'The battery isn’t charging properly. Your car may eventually lose power.'
    },
    {
      name: 'Temperature / Coolant',
      icon: 'temp',
      meaning: 'The engine is too hot. Safely pull over and let it cool before driving further.'
    },
    {
      name: 'Brake System',
      icon: 'brake-warning',
      meaning: 'There may be a problem with the brakes or brake fluid. Treat this as urgent.'
    },
    {
      name: 'Tire Pressure (TPMS)',
      icon: 'tire-pressure',
      meaning: 'One or more tires are low on air. Check tire pressure soon.'
    }
  ];
</script>

<div class="container py-5" style="min-height: 80vh;">
  <header class="mb-4">
    <h1 class="display-5 fw-bold mb-3" style="color: var(--color-primary);">Car Basics</h1>
    <p class="lead" style="color: var(--color-text-main); max-width: 720px;">
      Start here to learn the core parts of your car and what they actually do, in plain language.
    </p>
  </header>

  <!-- Core systems cards -->
  <section class="mb-5">
    <h2 class="h4 fw-bold mb-3" style="color: var(--color-text-main);">Key Parts of Your Car</h2>
    <div class="row g-4">
      {#each basics as item}
        <div class="col-md-6 col-lg-4">
          <InfoCard title={item.title} description={item.description} icon={item.icon} />
        </div>
      {/each}
    </div>
  </section>

  <!-- Fluids list -->
  <section class="mb-5">
    <h2 class="h4 fw-bold mb-3" style="color: var(--color-text-main);">Essential Fluids</h2>
    <p class="mb-3" style="color: var(--color-text-muted); max-width: 720px;">
      These fluids are simple to check and make a big difference in how long your car lasts.
    </p>
    <div class="row">
      <div class="col-lg-8">
        <div
          class="card fluid-card"
        >
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              {#each fluids as fluid}
                <li class="mb-2">
                  <span class="fw-bold" style="color: var(--color-text-main);">{fluid.name}:</span>
                  <span style="color: var(--color-text-muted);">{fluid.note}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Dashboard warning lights -->
  <section>
    <h2 class="h4 fw-bold mb-3" style="color: var(--color-text-main);">
      Common Dashboard Warning Lights
    </h2>
    <p class="mb-3" style="color: var(--color-text-muted); max-width: 720px;">
      These are some of the lights you’re most likely to see on your dashboard, and what they mean.
    </p>
    <div class="row">
      <div class="col-lg-10">
        <div class="list-group">
          {#each warningLights as light}
            <div
              class="list-group-item d-flex align-items-start warning-item"
            >
              <div
                class="me-3 d-flex align-items-center justify-content-center"
                style="width: 32px; height: 32px;"
              >
                <Icon name={light.icon} size={26} />
              </div>
              <div>
                <h3 class="h6 fw-bold mb-1" style="color: var(--color-text-main);">
                  {light.name}
                </h3>
                <p class="mb-0" style="color: var(--color-text-muted);">{light.meaning}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .fluid-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    position: relative;
    padding-left: 0.75rem;
  }

  .fluid-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: var(--color-primary);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  .warning-item {
    border: 1px solid var(--color-border);
    background-color: var(--color-surface);
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    position: relative;
    overflow: hidden;
  }

  .warning-item::before {
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
