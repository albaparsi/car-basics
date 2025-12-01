<div class="container py-5" style="min-height: 80vh;">
  <!-- About Section -->
  <div class="mb-5">
    <h2 class="display-5 fw-bold mb-3" style="color: var(--color-primary);">About</h2>
    <p class="lead" style="color: var(--color-text-main); max-width: 800px;">
      Cars don't have to be confusing. This project gives you simple explanations, real examples, and practical tips so you can understand what's going on under the hood, without feeling overwhelmed.
    </p>
  </div>

  <!-- Section Cards -->
  <div class="row g-4 mt-4">
    <div class="col-md-6 col-lg-4">
      <a href="/car-basics" class="text-decoration-none">
        <div class="card section-card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main);">Car Basics</h3>
            <p class="card-text flex-grow-1" style="color: var(--color-text-muted);">
              Learn the fundamentals of how your car works and understand the essential components.
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-md-6 col-lg-4">
      <a href="/common-problems" class="text-decoration-none">
        <div class="card section-card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main);">Common Problems</h3>
            <p class="card-text flex-grow-1" style="color: var(--color-text-muted);">
              Identify and understand common car issues you might encounter.
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-md-6 col-lg-4">
      <a href="/repair-costs" class="text-decoration-none">
        <div class="card section-card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main);">Repair Costs</h3>
            <p class="card-text flex-grow-1" style="color: var(--color-text-muted);">
              Get an idea of typical repair costs so you know what to expect.
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-md-6 col-lg-4">
      <a href="/diy-basics" class="text-decoration-none">
        <div class="card section-card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main);">DIY Basics</h3>
            <p class="card-text flex-grow-1" style="color: var(--color-text-muted);">
              Simple maintenance tasks you can safely do yourself.
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="col-md-6 col-lg-4">
      <a href="/mechanic-checklist" class="text-decoration-none">
        <div class="card section-card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main);">Mechanic Checklist</h3>
            <p class="card-text flex-grow-1" style="color: var(--color-text-muted);">
              What to ask and check before going to the mechanic.
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<style>
  .section-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    box-shadow: 0 6px 16px rgba(58, 58, 58, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .section-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: var(--color-primary);
    opacity: 0.8;
  }

  .section-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(58, 58, 58, 0.08);
    cursor: pointer;
  }
</style>
