<script>
  import { costs } from '$lib/data/costs.js';
  import { tick } from 'svelte';

  // State management
  /**
   * @type {string | null}
   */
  let expandedCard = null;

  /**
   * @param {string} serviceId
   */
  async function toggleCard(serviceId) {
    const wasExpanded = expandedCard === serviceId;
    expandedCard = expandedCard === serviceId ? null : serviceId;
    
    // If we're expanding a card (not collapsing), scroll to the detail panel
    if (!wasExpanded && expandedCard) {
      await tick(); // Wait for DOM to update
      scrollToDetailPanel();
    }
  }

  /**
   * Scrolls to the detail panel smoothly
   */
  function scrollToDetailPanel() {
    const element = document.getElementById('detail-panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * @param {number} frequencyMeter
   * @returns {string}
   */
  function getFrequencyLabel(frequencyMeter) {
    if (frequencyMeter >= 4) return 'Very Frequent';
    if (frequencyMeter >= 3) return 'Regular';
    if (frequencyMeter >= 2) return 'Occasional';
    return 'Rare';
  }

  /**
   * @param {string} tag
   * @returns {string}
   */
  function getTagColor(tag) {
    if (tag === 'Regular') return 'var(--color-primary)';
    if (tag === 'Occasional') return 'var(--color-warning)';
    return 'var(--color-text-muted)';
  }
</script>

<div class="container py-5" style="min-height: 80vh;">
  <!-- Hero Section -->
  <div class="mb-5">
    <h1 class="display-5 fw-bold mb-3" style="color: var(--color-primary);">Repair Cost Guide</h1>
    <p class="lead mb-2" style="color: var(--color-text-muted);">
      Understand typical costs for common car repairs and maintenance services.
    </p>
    <p class="small mb-0" style="color: var(--color-text-muted); font-style: italic;">
      Approximate ranges, actual costs vary.
    </p>
  </div>

  <!-- Cost Cards Grid -->
  <div class="row g-4 mb-5">
    {#each costs as cost}
      <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div
          class="card section-card cost-card w-100 d-flex flex-column"
          class:active={expandedCard === cost.id}
          class:inactive={expandedCard !== null && expandedCard !== cost.id}
          style="min-height: 100%;"
        >
          <button
            class="card-body w-100 text-start d-flex flex-column justify-content-start flex-grow-1"
            style="
              background-color: transparent;
              border: none;
              cursor: pointer;
              padding: 1.5rem;
            "
            on:click={() => toggleCard(cost.id)}
            type="button"
          >
            <!-- Top: Service Name and Price Range -->
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h3 class="card-title fw-bold mb-0" style="color: var(--color-text-main); line-height: 1.3; flex: 1;">
                {cost.service}
              </h3>
              <div class="ms-3" style="flex-shrink: 0;">
                <span 
                  class="fw-bold"
                  style="
                    color: var(--color-primary);
                    font-size: 1.1rem;
                    white-space: nowrap;
                  "
                >
                  {cost.priceRange}
                </span>
              </div>
            </div>

            <!-- Middle: Description and Frequency -->
            <p class="card-text mb-3" style="color: var(--color-text-muted); line-height: 1.5; font-size: 0.95rem;">
              {cost.description}
            </p>
            <div class="d-flex gap-2 flex-wrap mb-3">
              <span 
                style="
                  font-size: 0.8rem;
                  font-weight: 600;
                  padding: 0.25rem 0.5rem;
                  border-radius: 999px;
                  background-color: var(--color-surface);
                  border: 1px solid var(--color-border);
                  color: var(--color-text-main);
                  white-space: nowrap;
                  flex-shrink: 0;
                "
              >
                {cost.frequency}
              </span>
            </div>

            <!-- Bottom: View Details Affordance -->
            <div class="d-flex align-items-center mt-auto" style="color: var(--color-primary);">
              <span class="small fw-semibold me-2">Click to see more details</span>
            </div>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Fixed Detail Panel -->
  {#if expandedCard}
    {@const selectedCost = costs.find(c => c.id === expandedCard)}
    {#if selectedCost}
      <div 
        id="detail-panel"
        class="detail-panel"
        style="
          border: 2px solid var(--color-primary);
          border-radius: 1rem;
          background-color: var(--color-surface);
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(27, 169, 245, 0.15);
        "
      >
        <!-- Two Column Layout -->
        <div class="row g-4">
          <!-- Left Column: What This Service Is & Signs -->
          <div class="col-12 col-lg-6">
            <!-- What This Service Is -->
            <div class="mb-4">
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">What this service is</h4>
              <ul 
                class="mb-0 text-muted"
                style="line-height: 1.6;"
              >
                {#each selectedCost.whatIsIt as item}
                  <li class="mb-2">{item}</li>
                {/each}
              </ul>
            </div>

            <!-- Signs You Might Need It -->
            <div>
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Signs you might need it</h4>
              <ul 
                class="mb-0"
                style="
                  padding-left: 1.25rem;
                  color: var(--color-text-muted);
                  line-height: 1.6;
                "
              >
                {#each selectedCost.signsYouNeedIt as sign}
                  <li class="mb-2">{sign}</li>
                {/each}
              </ul>
            </div>
          </div>

          <!-- Right Column: Price Breakdown & Frequency -->
          <div class="col-12 col-lg-6">
            <!-- Typical Price Breakdown -->
            <div class="mb-4">
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Typical price breakdown</h4>
              <div 
                style="
                  border: 1px solid var(--color-border);
                  border-radius: 0.5rem;
                  background-color: var(--color-bg);
                  padding: 1rem;
                "
              >
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span style="color: var(--color-text-muted);">Parts:</span>
                  <span style="color: var(--color-text-main); font-weight: 600;">{selectedCost.priceBreakdown.parts}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span style="color: var(--color-text-muted);">Labor:</span>
                  <span style="color: var(--color-text-main); font-weight: 600;">{selectedCost.priceBreakdown.labor}</span>
                </div>
                <hr style="margin: 0.75rem 0; border-color: var(--color-border);" />
                <div class="d-flex justify-content-between align-items-center">
                  <span style="color: var(--color-text-main); font-weight: 600;">Total:</span>
                  <span 
                    style="
                      color: var(--color-primary);
                      font-weight: 700;
                      font-size: 1.1rem;
                    "
                  >
                    {selectedCost.priceBreakdown.total}
                  </span>
                </div>
              </div>
            </div>

            <!-- How Often It Happens -->
            <div>
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">How often it happens</h4>
              <div 
                style="
                  border: 1px solid var(--color-border);
                  border-radius: 0.5rem;
                  background-color: var(--color-bg);
                  padding: 1rem;
                "
              >
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span style="color: var(--color-text-muted);">Frequency:</span>
                    <span style="color: var(--color-text-main); font-weight: 600;">{getFrequencyLabel(selectedCost.frequencyMeter)}</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <span style="color: var(--color-text-muted);">Schedule:</span>
                    <span style="color: var(--color-text-main); font-weight: 600;">{selectedCost.frequency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</div>

<style>
  .section-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    box-shadow: 0 6px 16px rgba(58, 58, 58, 0.05);
    transition: all 0.3s ease;
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
    transition: opacity 0.3s ease;
  }

  .cost-card:hover:not(.inactive) {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(58, 58, 58, 0.08);
    cursor: pointer;
  }

  /* Active card styling */
  .cost-card.active {
    transform: scale(1.05);
    border: 2px solid var(--color-primary);
    box-shadow: 0 12px 24px rgba(27, 169, 245, 0.2);
  }

  .cost-card.active::before {
    width: 8px;
    opacity: 1;
  }

  /* Inactive cards (fade when one is active) */
  .cost-card.inactive {
    opacity: 0.5;
    filter: grayscale(0.3);
  }

  .detail-panel {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
