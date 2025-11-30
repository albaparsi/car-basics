<script>
  import { onMount } from 'svelte';
  import Checklist from '$lib/components/Checklist.svelte';

  // Before you go - Symptoms
  let symptomsItems = [
    { item: 'When does it happen? (starting, driving, braking)', checked: false },
    { item: 'At what speed? (low, high, all speeds)', checked: false },
    { item: 'Weather conditions when it happens', checked: false },
    { item: 'How long has it been happening?', checked: false }
  ];

  // Before you go - Noises
  let noisesItems = [
    { item: 'Noise when braking', checked: false },
    { item: 'Noise when turning', checked: false },
    { item: 'Noise when accelerating', checked: false },
    { item: 'Constant noise while driving', checked: false }
  ];

  // Before you go - Info
  let mileage = '';
  let lastOilChange = '';
  let warningLights = '';

  // At the shop - Questions
  let questionsItems = [
    { item: 'Can you explain the problem in simple terms?', checked: false },
    { item: 'What parts need to be replaced and why?', checked: false },
    { item: 'Is this repair urgent or can it wait?', checked: false },
    { item: 'Are there any alternatives to this repair?', checked: false },
    { item: 'What happens if I don\'t fix this now?', checked: false },
    { item: 'Do you offer a warranty on this work?', checked: false },
    { item: 'Can I see the old parts after replacement?', checked: false },
    { item: 'Can you show me what needs to be fixed?', checked: false }
  ];

  // At the shop - What to tell them
  let symptomsDescription = '';
  let carHistory = '';
  let budget = '';

  // Red flags
  let redFlagsItems = [
    'Pressure to make a decision immediately',
    'Vague or confusing explanations',
    'Refusal to show old parts',
    'Estimates that seem too high or too low',
    'No written estimate provided',
    'Being asked to pay upfront for expensive repairs'
  ];

  // User-added items
  /**
   * @type {string[]}
   */
  let allNotes = [];
  let notesInput = '';

  // Load from localStorage on mount
  onMount(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mechanic-checklist-data');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          mileage = data.mileage || '';
          lastOilChange = data.lastOilChange || '';
          warningLights = data.warningLights || '';
          symptomsDescription = data.symptomsDescription || '';
          carHistory = data.carHistory || '';
          budget = data.budget || '';
          allNotes = data.allNotes || [];
          symptomsItems = data.symptomsItems || symptomsItems;
          noisesItems = data.noisesItems || noisesItems;
          questionsItems = data.questionsItems || questionsItems;
          
          // Resize textareas after loading data
          setTimeout(() => {
            const textareas = document.querySelectorAll('.auto-resize');
            textareas.forEach((textarea) => {
              if (textarea instanceof HTMLTextAreaElement) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
              }
            });
          }, 100);
        } catch (e) {
          console.error('Error loading saved data:', e);
        }
      }
    }
  });

  // Save to localStorage whenever values change
  function saveData() {
    if (typeof window !== 'undefined') {
      const data = {
        mileage,
        lastOilChange,
        warningLights,
        symptomsDescription,
        carHistory,
        budget,
        allNotes,
        symptomsItems,
        noisesItems,
        questionsItems
      };
      localStorage.setItem('mechanic-checklist-data', JSON.stringify(data));
    }
  }

  // Auto-resize textarea function
  /**
   * @param {Event} event
   */
  function autoResize(event) {
    const textarea = event.target;
    if (textarea instanceof HTMLTextAreaElement) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  // Svelte action to initialize textarea height
  /**
   * @param {HTMLTextAreaElement} node
   */
  function initializeTextarea(node) {
    if (node) {
      node.style.height = 'auto';
      node.style.height = node.scrollHeight + 'px';
    }
    return {
      update() {
        if (node) {
          node.style.height = 'auto';
          node.style.height = node.scrollHeight + 'px';
        }
      }
    };
  }

  function addNoteItem() {
    if (notesInput.trim()) {
      allNotes = [...allNotes, notesInput.trim()];
      notesInput = '';
      saveData();
    }
  }

  /**
   * @param {number} index
   */
  function removeNoteItem(index) {
    allNotes = allNotes.filter((_, i) => i !== index);
    saveData();
  }

  function printPage() {
    window.print();
  }

  // Wrapper function for textarea input events
  /**
   * @param {Event} e
   */
  function handleTextareaInput(e) {
    autoResize(e);
    saveData();
  }

  // Handle checkbox changes
  function handleCheckboxChange() {
    saveData();
  }
</script>

<div class="container py-5" style="min-height: 80vh;">
  <!-- Hero Section -->
  <header class="mb-5">
    <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
      <h1 class="display-5 fw-bold mb-0" style="color: var(--color-primary);">Mechanic Checklist</h1>
      <button
        class="btn"
        style="background-color: var(--color-primary); color: white; border: none;"
        on:click={printPage}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
          <path d="M6 9V2h12v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 14h12v8H6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Print this page
      </button>
    </div>
    <p class="lead mb-0" style="color: var(--color-text-main); max-width: 600px;">
      Use this checklist to prepare for your mechanic visit and know what to ask when you're there.
    </p>
  </header>

  <!-- Three boxes side by side -->
  <section class="mb-5">
    <div class="row g-4">
      <!-- Before you go card -->
      <div class="col-md-4">
        <div class="problem-card-visual h-100">
          <div class="card-header-section">
            <h2 class="h4 fw-bold mb-0" style="color: var(--color-text-main);">Before you go</h2>
          </div>

          <div class="card-body">
            <!-- What symptoms to note -->
            <div class="noise-subsection mb-3">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                What symptoms to note
              </h3>
              <Checklist items={symptomsItems} />
            </div>

            <!-- What noises to record -->
            <div class="noise-subsection mb-3">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                What noises to record
              </h3>
              <Checklist items={noisesItems} />
              <p class="small text-muted mb-0 mt-2">
                 <strong>Tip:</strong> Use your phone's voice memo app to record any sounds your car makes.
              </p>
            </div>

            <!-- What info to know -->
            <div class="noise-subsection">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                What info to know
              </h3>
              <div class="mb-3">
                <label for="mileage" class="form-label small fw-semibold" style="color: var(--color-text-main);">Current mileage</label>
                <textarea
                  id="mileage"
                  class="form-control form-control-sm auto-resize"
                  rows="1"
                  bind:value={mileage}
                  placeholder="e.g., 45,000 miles"
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="lastOilChange" class="form-label small fw-semibold" style="color: var(--color-text-main);">Last oil change</label>
                <textarea
                  id="lastOilChange"
                  class="form-control form-control-sm auto-resize"
                  rows="1"
                  bind:value={lastOilChange}
                  placeholder="e.g., 3 months ago or 42,500 miles"
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
              <div>
                <label for="warningLights" class="form-label small fw-semibold" style="color: var(--color-text-main);">Warning lights</label>
                <textarea
                  id="warningLights"
                  class="form-control form-control-sm auto-resize"
                  rows="1"
                  bind:value={warningLights}
                  placeholder="e.g., Check Engine, Battery, etc."
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- At the shop card -->
      <div class="col-md-4">
        <div class="problem-card-visual h-100">
          <div class="card-header-section">
            <h2 class="h4 fw-bold mb-0" style="color: var(--color-text-main);">At the shop</h2>
          </div>

          <div class="card-body">
            <!-- Questions to ask -->
            <div class="noise-subsection mb-3">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                Questions to ask
              </h3>
              <ol class="ps-3 mb-0">
                {#each questionsItems as question}
                  <li class="d-flex align-items-start mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input me-2 mt-1"
                      style="accent-color: var(--color-primary);"
                      bind:checked={question.checked}
                      on:change={handleCheckboxChange}
                    />
                    <span class="{question.checked ? 'text-decoration-line-through opacity-50' : ''}" style="color: var(--color-text-main);">
                      {question.item}
                    </span>
                  </li>
                {/each}
              </ol>
            </div>

            <!-- What to tell them -->
            <div class="noise-subsection mb-3">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                What to tell them
              </h3>
              <div class="mb-3">
                <label for="symptomsDescription" class="form-label small fw-semibold" style="color: var(--color-text-main);">Describe the symptoms</label>
                <textarea
                  id="symptomsDescription"
                  class="form-control form-control-sm auto-resize"
                  rows="2"
                  bind:value={symptomsDescription}
                  placeholder="Write down what your car is doing..."
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="carHistory" class="form-label small fw-semibold" style="color: var(--color-text-main);">Recent car history</label>
                <textarea
                  id="carHistory"
                  class="form-control form-control-sm auto-resize"
                  rows="2"
                  bind:value={carHistory}
                  placeholder="Any recent repairs, accidents, or changes..."
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
              <div>
                <label for="budget" class="form-label small fw-semibold" style="color: var(--color-text-main);">Your budget (optional)</label>
                <textarea
                  id="budget"
                  class="form-control form-control-sm auto-resize"
                  rows="1"
                  bind:value={budget}
                  placeholder="e.g., $500 or flexible"
                  on:input={handleTextareaInput}
                  use:initializeTextarea
                ></textarea>
              </div>
            </div>

            <!-- Red flags / scam signs -->
            <div class="red-flags-section">
              <h3 class="h6 text-uppercase small fw-semibold mb-3" style="color: var(--color-text-main);">
                Red flags / scam signs
              </h3>
              <ul class="mb-0 small" style="color: var(--color-text-main);">
                {#each redFlagsItems as flag}
                  <li>{flag}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Your notes & to-dos card -->
      <div class="col-md-4">
        <div class="problem-card-visual h-100">
          <div class="card-header-section">
            <h2 class="h4 fw-bold mb-0" style="color: var(--color-text-main);">Your notes & to-dos</h2>
          </div>

          <div class="card-body">
            <div class="d-flex gap-2 mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                bind:value={notesInput}
                placeholder="Add your own note or to-do"
                on:keydown={(e) => e.key === 'Enter' && addNoteItem()}
              />
              <button
                class="btn btn-sm"
                style="background-color: var(--color-primary); color: white; border: none; white-space: nowrap; flex-shrink: 0;"
                on:click={addNoteItem}
              >
                Add
              </button>
            </div>
            {#if allNotes.length > 0}
              <ul class="list-unstyled mb-0">
                {#each allNotes as note, index}
                  <li class="d-flex align-items-center mb-2">
                    <span class="flex-grow-1" style="color: var(--color-text-main);">
                      {note}
                    </span>
                    <button
                      class="btn btn-link p-0 ms-2"
                      style="color: var(--color-text-muted); text-decoration: none; font-size: 1.2rem; line-height: 1;"
                      on:click={() => removeNoteItem(index)}
                    >
                      ×
                    </button>
                  </li>
                {/each}
              </ul>
            {:else}
              <p class="small text-muted mb-0">Add your own notes, reminders, or to-dos here.</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
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

  .red-flags-section {
    padding: 1rem;
    background-color: var(--color-surface);
    border-radius: 0.5rem;
    border: 2px solid var(--color-urgent);
  }

  ol {
    list-style: decimal;
    padding-left: 1.5rem;
  }

  ol li {
    margin-bottom: 0.5rem;
  }

  .auto-resize {
    resize: none;
    overflow: hidden;
    min-height: 38px;
  }

  @media print {
    .btn,
    .d-flex.gap-2 {
      display: none !important;
    }
    
    textarea {
      border: none !important;
      padding: 0 !important;
      background: transparent !important;
      resize: none !important;
      overflow: visible !important;
      height: auto !important;
      box-shadow: none !important;
    }
    
    textarea::placeholder {
      opacity: 0 !important;
    }
  }
</style>
