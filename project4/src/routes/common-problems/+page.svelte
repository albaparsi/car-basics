<script>
  import Icon from '$lib/components/Icon.svelte';

  const symptoms = [
    {
      id: 'wont-start',
      title: "Won't start",
      description: 'Car won\'t turn on or start',
      icon: 'battery-warning'
    },
    {
      id: 'noises',
      title: 'Noises',
      description: 'Strange sounds from your car',
      icon: 'sound'
    },
    {
      id: 'shaking',
      title: 'Shaking',
      description: 'Vibration or shaking while driving',
      icon: 'steering'
    },
    {
      id: 'leaks',
      title: 'Leaks',
      description: 'Fluid puddles under your car',
      icon: 'fluids'
    }
  ];

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<div class="container py-5" style="min-height: 80vh;">
  <header class="mb-5">
    <h1 class="display-5 fw-bold mb-3" style="color: var(--color-primary);">Common Problems</h1>
    <div class="d-flex align-items-start gap-2 mb-4">
      <p class="lead mb-0" style="color: var(--color-text-main); max-width: 600px;">
        Pick the thing your car is doing
      </p>
      <button
        class="btn btn-link p-0"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="This is a guide to help you understand symptoms, not a full diagnosis tool. Always consult a mechanic for serious issues."
        style="color: var(--color-text-muted); text-decoration: none;"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
          <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="12" cy="16" r="0.8" fill="currentColor" />
        </svg>
      </button>
    </div>

    <!-- Symptom Picker -->
    <div class="row g-3">
      {#each symptoms as symptom}
        <div class="col-6 col-md-3">
          <button
            class="symptom-picker w-100"
            on:click={() => scrollToSection(symptom.id)}
            type="button"
          >
            <div class="d-flex flex-column align-items-center text-center p-3">
              <div class="mb-2">
                <Icon name={symptom.icon} size={32} />
              </div>
              <h3 class="h6 fw-bold mb-1" style="color: var(--color-text-main);">
                {symptom.title}
              </h3>
              <p class="small mb-0" style="color: var(--color-text-muted);">
                {symptom.description}
              </p>
            </div>
          </button>
        </div>
      {/each}
    </div>
  </header>

  <!-- Car won't start -->
  <section id="wont-start" class="mb-5">
    <div class="problem-card-visual">
      <div class="card-header-section">
        <div class="d-flex align-items-center gap-3">
          <div class="problem-icon-wrapper">
            <Icon name="battery-warning" size={40} />
          </div>
          <div>
            <h2 class="h4 fw-bold mb-1" style="color: var(--color-text-main);">Car won't start</h2>
            <p class="small mb-0" style="color: var(--color-text-muted);">Key turns but nothing happens</p>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="noise-subsection">
          <div>
            <h3 class="h6 text-uppercase small fw-semibold mb-2" style="color: var(--color-text-main);">
              What you notice
            </h3>
            <ul class="mb-0 small" style="color: var(--color-text-main);">
              <li>Key turns but nothing happens, or you hear a single click</li>
              <li>Lights or dashboard might be dim or completely off</li>
            </ul>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <h3 class="h6 text-uppercase small fw-semibold mb-2" style="color: var(--color-text-main);">
              What it might mean
            </h3>
            <ul class="mb-0 small" style="color: var(--color-text-main);">
              <li>Dead or weak battery</li>
              <li>Loose or corroded battery cables</li>
              <li>Out of fuel or very low fuel</li>
              <li>Key not fully turned, or car not in "Park"</li>
            </ul>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <h3 class="h6 text-uppercase small fw-semibold mb-2" style="color: var(--color-text-main);">
              Try this first
            </h3>
            <ul class="mb-0 small" style="color: var(--color-text-main);">
              <li>Check if interior lights or dashboard come on and if not, the battery may be dead</li>
              <li>Make sure there is fuel in the tank</li>
              <li>Move the gear selector firmly into "Park" and try again</li>
              <li>Lock and unlock the car, then try starting it once more</li>
              <li>Call a mechanic or roadside help if the car still won't start after these steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Strange noises -->
  <section id="noises" class="mb-5">
    <div class="problem-card-visual">
      <div class="card-header-section">
        <div class="d-flex align-items-center gap-3">
          <div class="problem-icon-wrapper">
            <Icon name="sound" size={40} />
          </div>
          <div>
            <h2 class="h4 fw-bold mb-1" style="color: var(--color-text-main);">Strange noises</h2>
            <p class="small mb-0" style="color: var(--color-text-muted);">New sounds when braking, turning, or accelerating</p>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Squealing when braking</p>
            <p class="mb-1 small text-muted">Often worn brake pads or a warning tab touching the rotor</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Usually drivable for a short time, but schedule a check soon.</p>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Grinding when braking</p>
            <p class="mb-1 small text-muted">Brake pads may be worn down completely, causing metal-on-metal contact</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Stop driving and have brakes inspected immediately.</p>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Clicking when turning</p>
            <p class="mb-1 small text-muted">Could be a worn CV joint or steering/suspension part</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Usually drivable for a short time, but schedule a check soon.</p>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Loud exhaust or rumbling</p>
            <p class="mb-1 small text-muted">Possible hole or break in the exhaust system</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Usually drivable for a short time, but schedule a check soon.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Shaking or vibrating -->
  <section id="shaking" class="mb-5">
    <div class="problem-card-visual">
      <div class="card-header-section">
        <div class="d-flex align-items-center gap-3">
          <div class="problem-icon-wrapper">
            <Icon name="steering" size={40} />
          </div>
          <div>
            <h2 class="h4 fw-bold mb-1" style="color: var(--color-text-main);">Shaking or vibrating</h2>
            <p class="small mb-0" style="color: var(--color-text-muted);">Steering wheel, seat, or whole car shakes</p>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Shaking at highway speeds</p>
            <p class="mb-1 small text-muted">Often tire balance, alignment, or a tire that's starting to fail</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Usually drivable for a short time, but schedule a check soon.</p>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Shaking when braking</p>
            <p class="mb-1 small text-muted">Commonly warped brake rotors or uneven brake wear</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> Drive gently and have brakes inspected soon.</p>
          </div>
        </div>

        <div class="noise-subsection">
          <div>
            <p class="mb-1 fw-bold" style="color: var(--color-text-main);">Shaking while stopped (at idle)</p>
            <p class="mb-1 small text-muted">Could be an engine misfire, worn mounts, or dirty components</p>
            <p class="mb-0 small text-muted"><strong>Is it safe?</strong> If the car feels rough, stalls, or the check engine light is on, get it checked soon.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Leaks by color -->
  <section id="leaks" class="mb-5">
    <div class="problem-card-visual">
      <div class="card-header-section">
        <div class="d-flex align-items-center gap-3">
          <div class="problem-icon-wrapper">
            <Icon name="fluids" size={40} />
          </div>
          <div>
            <h2 class="h4 fw-bold mb-1" style="color: var(--color-text-main);">Leaks by color</h2>
            <p class="small mb-0" style="color: var(--color-text-muted);">Puddles or spots under your car</p>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="leak-grid">
          <div class="leak-item">
            <span class="leak-swatch leak-clear"></span>
            <div class="leak-content">
              <p class="mb-1 fw-bold small" style="color: var(--color-text-main);">Clear water</p>
              <p class="mb-1 small text-muted">Usually A/C condensation</p>
            </div>
            <span class="leak-action">Normal</span>
          </div>

          <div class="leak-item">
            <span class="leak-swatch leak-coolant"></span>
            <div class="leak-content">
              <p class="mb-1 fw-bold small" style="color: var(--color-text-main);">Green / yellow / orange</p>
              <p class="mb-1 small text-muted">Likely coolant — can lead to overheating</p>
            </div>
            <span class="leak-action leak-action-serious">Serious</span>
          </div>

          <div class="leak-item">
            <span class="leak-swatch leak-oil"></span>
            <div class="leak-content">
              <p class="mb-1 fw-bold small" style="color: var(--color-text-main);">Brown / black</p>
              <p class="mb-1 small text-muted">Often engine oil — car may still drive</p>
            </div>
            <span class="leak-action leak-action-serious">Serious</span>
          </div>

          <div class="leak-item">
            <span class="leak-swatch leak-red"></span>
            <div class="leak-content">
              <p class="mb-1 fw-bold small" style="color: var(--color-text-main);">Red / pink</p>
              <p class="mb-1 small text-muted">Transmission, power steering, or brake fluid</p>
            </div>
            <span class="leak-action leak-action-urgent">Urgent</span>
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <!-- Safety Footer -->
  <section class="safety-footer">
    <div class="d-flex align-items-center gap-3 p-3">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
        <path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <div class="flex-grow-1">
        <p class="mb-0 small" style="color: var(--color-text-main);">
          <strong>When in doubt, get a mechanic to look at it.</strong> These guides are here to give you confidence,
          not to replace professional help.
        </p>
      </div>
      <a href="/mechanic-checklist" class="btn btn-sm" style="background-color: var(--color-primary); color: white; border: none; white-space: nowrap;">
        View Checklist
      </a>
    </div>
  </section>
</div>

<style>
  .symptom-picker {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(58, 58, 58, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    border: none;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .symptom-picker::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: var(--color-primary);
    opacity: 0.8;
  }

  .symptom-picker:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(58, 58, 58, 0.1);
  }

  .problem-card-visual {
    background-color: var(--color-surface);
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    box-shadow: 0 6px 16px rgba(58, 58, 58, 0.05);
    overflow: hidden;
    position: relative;
  }

  .problem-card-visual::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: var(--color-primary);
    opacity: 0.8;
    z-index: 1;
  }

  .card-header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
    background-color: rgba(255, 255, 255, 0.5);
  }

  .problem-icon-wrapper {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    border: 2px solid var(--color-border);
    background-color: var(--color-surface);
  }

  .card-body {
    padding: 1.5rem;
  }

  .noise-subsection {
    padding: 1rem;
    margin-bottom: 0.75rem;
    background-color: var(--color-surface);
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
  }

  .noise-subsection:last-child {
    margin-bottom: 0;
  }

  .leak-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }

  .leak-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: var(--color-surface);
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
  }

  .leak-swatch {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-top: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .leak-clear {
    background: linear-gradient(135deg, #f5f5f5, #ffffff);
  }

  .leak-coolant {
    background: linear-gradient(135deg, #8fd694, #f2d16b);
  }

  .leak-oil {
    background: linear-gradient(135deg, #6b4c2a, #1e1e1e);
  }

  .leak-red {
    background: linear-gradient(135deg, #ff6b6b, #f7a6c0);
  }

  .leak-content {
    flex-grow: 1;
  }

  .leak-action {
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-main);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .leak-action-serious {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-main);
  }

  .leak-action-urgent {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-main);
  }

  .safety-footer {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
  }

  .safety-footer::before {
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
