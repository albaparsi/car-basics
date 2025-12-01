<script>
  import { onMount } from 'svelte';

  // Task data structure
  let tasks = [
    {
      id: 'jump-start',
      title: 'Jump-start a car',
      description: 'Get your car running when the battery dies using jumper cables and another vehicle.',
      difficulty: 'Medium',
      time: '10–15 minutes',
      safetyBanner: 'Only do this if: you have proper jumper cables, another working vehicle, and a safe location away from traffic.',
      tools: [
        { name: 'Jumper cables', checked: false },
        { name: 'Working vehicle', checked: false },
        { name: 'Safety gloves (optional)', checked: false }
      ],
      steps: [
        {
          title: 'Position the vehicles',
          content: 'Park both vehicles close enough for cables to reach, but not touching. Turn off both engines and set parking brakes.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Connect red (positive) cable',
          content: 'Connect one red clamp to the dead battery\'s positive terminal (+), then connect the other red clamp to the working battery\'s positive terminal (+).',
          completed: false,
          safetyNote: 'Safety tip: Never let the red and black clamps touch each other while connected to batteries.'
        },
        {
          title: 'Connect black (negative) cable',
          content: 'Connect one black clamp to the working battery\'s negative terminal (-), then connect the other black clamp to an unpainted metal surface on the dead car (like a bolt on the engine block), NOT to the negative terminal.',
          completed: false,
          safetyNote: 'Safety tip: Always clamp the black cable last and to an unpainted metal surface, not the battery terminal.'
        },
        {
          title: 'Start the working vehicle',
          content: 'Start the engine of the working vehicle and let it run for a few minutes to charge the dead battery.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Start the dead vehicle',
          content: 'Try starting the dead vehicle. If it starts, let both vehicles run for a few minutes before disconnecting.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Disconnect in reverse order',
          content: 'Remove cables in reverse order: black from dead car, black from working car, red from working car, red from dead car. Drive the jumped car for at least 15 minutes to recharge the battery.',
          completed: false,
          safetyNote: 'Safety tip: Remove cables carefully to avoid sparks.'
        }
      ],
      checklist: [
        { item: 'Parking brake on', checked: false },
        { item: 'Car in Park (or Neutral for manual)', checked: false },
        { item: 'Flat surface', checked: false },
        { item: 'Engine off', checked: false }
      ]
    },
    {
      id: 'change-tire',
      title: 'Change a tire',
      description: 'Replace a flat tire with your spare using basic tools that come with your car.',
      difficulty: 'Medium',
      time: '20–30 minutes',
      safetyBanner: 'Only do this if: you\'re in a safe location away from traffic, have a spare tire, and feel comfortable lifting the car.',
      tools: [
        { name: 'Spare tire', checked: false },
        { name: 'Jack', checked: false },
        { name: 'Lug wrench', checked: false },
        { name: 'Wheel chocks (optional)', checked: false }
      ],
      steps: [
        {
          title: 'Find a safe location',
          content: 'Pull over to a flat, level surface away from traffic. Turn on hazard lights and set the parking brake.',
          completed: false,
          safetyNote: 'Safety tip: Never change a tire on a slope or near moving traffic.'
        },
        {
          title: 'Loosen lug nuts',
          content: 'Before jacking up the car, use the lug wrench to loosen (but don\'t remove) the lug nuts on the flat tire. Turn counterclockwise.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Jack up the car',
          content: 'Place the jack under the car\'s designated jack point (check your owner\'s manual). Raise the car until the flat tire is off the ground.',
          completed: false,
          safetyNote: 'Safety tip: Never get under a car supported only by a jack. Use jack stands if you need to get underneath.'
        },
        {
          title: 'Remove the flat tire',
          content: 'Remove the lug nuts completely and pull the flat tire off. Place it flat on the ground.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Mount the spare tire',
          content: 'Lift the spare tire onto the wheel studs. Hand-tighten the lug nuts in a star pattern.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Lower and tighten',
          content: 'Lower the car until the tire touches the ground. Tighten the lug nuts in a star pattern with the wrench. Lower the car completely and give the lug nuts a final tightening.',
          completed: false,
          safetyNote: 'Safety tip: Check lug nut tightness after driving a short distance.'
        }
      ],
      checklist: [
        { item: 'Parking brake on', checked: false },
        { item: 'Car in Park', checked: false },
        { item: 'Flat surface', checked: false },
        { item: 'Hazard lights on', checked: false }
      ]
    },
    {
      id: 'refill-wiper-fluid',
      title: 'Refill wiper fluid',
      description: 'Keep your windshield clean by refilling the washer fluid reservoir.',
      difficulty: 'Easy',
      time: '5 minutes',
      safetyBanner: 'Only do this if: the engine is cool and you can locate the washer fluid reservoir cap.',
      tools: [
        { name: 'Windshield washer fluid', checked: false },
        { name: 'Funnel (optional)', checked: false }
      ],
      steps: [
        {
          title: 'Locate the reservoir',
          content: 'Open the hood and find the washer fluid reservoir. It\'s usually a white or translucent plastic container with a cap marked with a windshield/washer icon.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Check the fluid level',
          content: 'Look at the side of the reservoir to see the current fluid level. If it\'s low or empty, proceed to fill it.',
          completed: false,
          safetyNote: 'Safety tip: Make sure the engine is cool before opening the hood.'
        },
        {
          title: 'Add washer fluid',
          content: 'Remove the cap and pour windshield washer fluid into the reservoir. Fill it to the "Full" line, but don\'t overfill.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Replace the cap',
          content: 'Screw the cap back on securely. Close the hood and test the windshield washers to make sure they work.',
          completed: false,
          safetyNote: null
        }
      ],
      checklist: [
        { item: 'Engine off', checked: false },
        { item: 'Engine cool', checked: false },
        { item: 'Parking brake on', checked: false }
      ]
    },
    {
      id: 'replace-wiper-blades',
      title: 'Replace wiper blades',
      description: 'Install new wiper blades to maintain clear visibility in rain and snow.',
      difficulty: 'Easy',
      time: '10 minutes',
      safetyBanner: 'Only do this if: you have the correct blade size for your vehicle (check your owner\'s manual or auto parts store).',
      tools: [
        { name: 'New wiper blades (correct size)', checked: false },
        { name: 'Owner\'s manual (for size reference)', checked: false }
      ],
      steps: [
        {
          title: 'Lift the wiper arm',
          content: 'Turn off the car and lift the wiper arm away from the windshield. Most arms will lock in an upright position.',
          completed: false,
          safetyNote: 'Safety tip: Be careful not to let the wiper arm snap back onto the windshield, as it can crack the glass.'
        },
        {
          title: 'Remove the old blade',
          content: 'Find the release mechanism on the wiper arm (usually a small tab or button). Press it and slide the old blade off the arm.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Install the new blade',
          content: 'Slide the new blade onto the wiper arm until you hear a click or feel it lock into place. Make sure it\'s secure.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Lower the wiper arm',
          content: 'Gently lower the wiper arm back onto the windshield. Repeat for the other wiper blade if needed.',
          completed: false,
          safetyNote: null
        },
        {
          title: 'Test the wipers',
          content: 'Turn on the car and test the wipers to make sure they work properly and don\'t skip or chatter.',
          completed: false,
          safetyNote: null
        }
      ],
      checklist: [
        { item: 'Engine off', checked: false },
        { item: 'Correct blade size', checked: false },
        { item: 'Parking brake on', checked: false }
      ]
    }
  ];

  // State management
  /**
   * @type {string | null}
   */
  let expandedCard = null;
  /**
   * @type {{ [key: string]: { notes?: string; steps?: { completed: boolean }[]; tools?: { checked: boolean }[]; checklist?: { checked: boolean }[] } }}
   */
  let taskStates = {};

  // Load saved data from localStorage
  onMount(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('diy-basics-data');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          taskStates = data.taskStates || {};
          
          // Restore task states
          tasks.forEach(task => {
            if (taskStates[task.id]) {
              const saved = taskStates[task.id];
              task.steps.forEach((step, idx) => {
                if (saved.steps && saved.steps[idx]) {
                  step.completed = saved.steps[idx].completed || false;
                }
              });
              task.tools.forEach((tool, idx) => {
                if (saved.tools && saved.tools[idx]) {
                  tool.checked = saved.tools[idx].checked || false;
                }
              });
              task.checklist.forEach((item, idx) => {
                if (saved.checklist && saved.checklist[idx]) {
                  item.checked = saved.checklist[idx].checked || false;
                }
              });
            }
          });
        } catch (e) {
          console.error('Error loading saved data:', e);
        }
      }
    }
  });

  // Save data to localStorage
  function saveData() {
    if (typeof window !== 'undefined') {
      /**
       * @type {Record<string, { steps?: { completed: boolean }[]; tools?: { checked: boolean }[]; checklist?: { checked: boolean }[]; notes?: string }>}
       */
      const taskStatesData = {};
      
      tasks.forEach(task => {
        taskStatesData[task.id] = {
          steps: task.steps.map(s => ({ completed: s.completed })),
          tools: task.tools.map(t => ({ checked: t.checked })),
          checklist: task.checklist.map(c => ({ checked: c.checked })),
          notes: taskStates[task.id]?.notes || ''
        };
      });
      
      // Preserve notes
      Object.keys(taskStates).forEach(id => {
        if (taskStates[id]?.notes) {
          taskStatesData[id] = taskStatesData[id] || {};
          taskStatesData[id].notes = taskStates[id]?.notes;
        }
      });
      
      const data = {
        taskStates: taskStatesData
      };
      
      localStorage.setItem('diy-basics-data', JSON.stringify(data));
    }
  }

  /**
   * @param {string} taskId
   */
  function toggleCard(taskId) {
    expandedCard = expandedCard === taskId ? null : taskId;
  }

  /**
   * @param {string} taskId
   * @param {number} stepIndex
   * @param {Event | undefined} event
   */
  function toggleStepCompleted(taskId, stepIndex, event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const task = tasks.find(t => t.id === taskId);
    if (task && task.steps[stepIndex] !== undefined) {
      // Toggle the step completion
      task.steps[stepIndex].completed = !task.steps[stepIndex].completed;
      // Trigger reactivity by creating a new array reference
      task.steps = [...task.steps];
      // Also trigger reactivity on the tasks array by reassigning
      tasks = tasks;
      saveData();
    }
  }


  /**
   * @param {string} taskId
   * @param {string} notes
   */
  function updateNotes(taskId, notes) {
    if (!taskStates[taskId]) {
      taskStates[taskId] = {};
    }
    taskStates[taskId].notes = notes;
    saveData();
  }

  /**
   * @param {string} taskId
   * @returns {string}
   */
  function getNotes(taskId) {
    return taskStates[taskId]?.notes || '';
  }

  // Helper function to get progress for a specific task (reactive)
  /**
   * @param {string} taskId
   * @returns {number}
   */
  function getTaskProgress(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task || !task.steps || task.steps.length === 0) return 0;
    // Only count completed steps - explicitly check for true
    const completedSteps = task.steps.filter(step => step.completed === true);
    return Math.round((completedSteps.length / task.steps.length) * 100);
  }

  // Auto-save when tools or checklist change
  $: {
    if (typeof window !== 'undefined') {
      saveData();
    }
  }
</script>

<div class="container py-5" style="min-height: 80vh;">
  <h1 class="display-5 fw-bold mb-4" style="color: var(--color-primary);">DIY Basics</h1>
  <p class="lead mb-5" style="color: var(--color-text-muted);">Learn essential car maintenance tasks with step-by-step guidance.</p>

  <!-- Task Cards Grid (Task Chooser) -->
  <div class="row g-4 mb-5">
    {#each tasks as task}
      <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div
          class="card section-card task-card w-100 d-flex flex-column"
          class:active={expandedCard === task.id}
          class:inactive={expandedCard !== null && expandedCard !== task.id}
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
            on:click={() => toggleCard(task.id)}
            type="button"
          >
            <h3 class="card-title fw-bold mb-3" style="color: var(--color-text-main); line-height: 1.3;">{task.title}</h3>
            <div class="d-flex gap-2 flex-wrap mb-2">
              <span 
                style="
                  font-size: 0.7rem;
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
                {task.time}
              </span>
            </div>
            <p class="card-text flex-grow-1 mb-0" style="color: var(--color-text-muted); line-height: 1.5;">{task.description}</p>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Fixed Detail Panel (Work Area) -->
  {#if expandedCard}
    {@const selectedTask = tasks.find(t => t.id === expandedCard)}
    {#if selectedTask}
      <div 
        class="detail-panel"
        style="
          border: 2px solid var(--color-primary);
          border-radius: 1rem;
          background-color: var(--color-surface);
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(27, 169, 245, 0.15);
        "
      >
        <!-- Progress Bar -->
        <div class="mb-4">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="small fw-bold" style="color: var(--color-text-main);">Progress</span>
            <span class="small" style="color: var(--color-text-muted);">{getTaskProgress(selectedTask.id)}%</span>
          </div>
          <div 
            class="progress"
            style="height: 10px; background-color: var(--color-border); border-radius: 5px; overflow: hidden;"
          >
            <div 
              class="progress-bar"
              style="
                width: {getTaskProgress(selectedTask.id)}%;
                background-color: var(--color-primary);
                transition: width 0.3s ease;
              "
            ></div>
          </div>
        </div>

        <!-- Safety Banner -->
        <div 
          class="alert mb-4"
          style="
            background-color: rgba(255, 193, 7, 0.1);
            border-left: 4px solid var(--color-warning);
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
          "
        >
          <div class="d-flex align-items-start">
            <span class="me-2" style="font-size: 1.2rem;">⚠️</span>
            <p class="mb-0 small" style="color: var(--color-text-main);">{selectedTask.safetyBanner}</p>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="row g-4">
          <!-- Left Column: Tools & Checklist -->
          <div class="col-12 col-lg-4">
            <!-- Tools Needed -->
            <div class="mb-4">
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Tools needed</h4>
              <div class="d-flex flex-column gap-2">
                {#each selectedTask.tools as tool}
                  <label 
                    class="d-flex align-items-center" 
                    style="cursor: pointer;"
                    on:click|stopPropagation
                  >
                    <input 
                      type="checkbox" 
                      class="form-check-input me-2"
                      style="accent-color: var(--color-primary);"
                      bind:checked={tool.checked}
                      on:change={(e) => {
                        e.stopPropagation();
                        saveData();
                      }}
                      on:click|stopPropagation
                    />
                    <span 
                      class="{tool.checked ? 'text-decoration-line-through opacity-50' : ''}"
                      style="color: var(--color-text-main); font-size: 0.9rem;"
                    >
                      {tool.name}
                    </span>
                  </label>
                {/each}
              </div>
            </div>

            <!-- Checklist Before You Start -->
            <div class="mb-4">
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Checklist before you start</h4>
              <div class="d-flex flex-column gap-2">
                {#each selectedTask.checklist as item}
                  <label 
                    class="d-flex align-items-center" 
                    style="cursor: pointer;"
                    on:click|stopPropagation
                  >
                    <input 
                      type="checkbox" 
                      class="form-check-input me-2"
                      style="accent-color: var(--color-primary);"
                      bind:checked={item.checked}
                      on:change={(e) => {
                        e.stopPropagation();
                        saveData();
                      }}
                      on:click|stopPropagation
                    />
                    <span 
                      class="{item.checked ? 'text-decoration-line-through opacity-50' : ''}"
                      style="color: var(--color-text-main); font-size: 0.9rem;"
                    >
                      {item.item}
                    </span>
                  </label>
                {/each}
              </div>
            </div>

            <!-- Notes Box -->
            <div>
              <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Your notes for next time</h4>
              <textarea
                class="form-control"
                rows="7"
                placeholder="Add any personal notes, tips, or reminders here..."
                style="
                  border: 1px solid var(--color-border);
                  border-radius: 0.5rem;
                  background-color: var(--color-bg);
                  color: var(--color-text-main);
                  font-size: 0.9rem;
                  min-height: 120px;
                "
                value={getNotes(selectedTask.id)}
                on:input={(e) => {
                  const target = e.target;
                  if (target instanceof HTMLTextAreaElement) {
                    updateNotes(selectedTask.id, target.value);
                  }
                }}
              ></textarea>
            </div>
          </div>

          <!-- Right Column: Steps -->
          <div class="col-12 col-lg-8">
            <h4 class="h6 fw-bold mb-3" style="color: var(--color-text-main);">Step-by-step instructions</h4>
            <div class="d-flex flex-column gap-3">
              {#each selectedTask.steps as step, index}
                <div 
                  class="step-item"
                  style="
                    border: 1px solid var(--color-border);
                    border-radius: 0.5rem;
                    background-color: var(--color-bg);
                    padding: 1rem;
                  "
                >
                  <!-- Step Header -->
                  <div class="d-flex align-items-start mb-2">
                    <label 
                      class="d-flex align-items-center me-3"
                      style="cursor: pointer; margin-top: 0.25rem;"
                      on:click|stopPropagation
                    >
                      <input 
                        type="checkbox" 
                        class="form-check-input"
                        style="
                          width: 20px;
                          height: 20px;
                          accent-color: var(--color-primary);
                        "
                        checked={step.completed}
                        on:change={(e) => {
                          e.stopPropagation();
                          toggleStepCompleted(selectedTask.id, index, e);
                        }}
                        on:click|stopPropagation
                      />
                    </label>
                    <h5 
                      class="mb-0 fw-bold flex-grow-1"
                      style="
                        color: var(--color-text-main);
                        text-decoration: {step.completed ? 'line-through' : 'none'};
                        opacity: {step.completed ? 0.6 : 1};
                      "
                    >
                      Step {index + 1} - {step.title}
                    </h5>
                  </div>

                  <!-- Step Content -->
                  <p 
                    class="mb-2"
                    style="
                      color: var(--color-text-muted);
                      font-size: 0.9rem;
                    "
                  >
                    {step.content}
                  </p>

                  <!-- Safety Note (if present) -->
                  {#if step.safetyNote}
                    <div 
                      class="safety-note mt-2"
                      style="
                        background-color: rgba(255, 193, 7, 0.1);
                        border-left: 3px solid var(--color-warning);
                        border-radius: 0.25rem;
                        padding: 0.75rem;
                      "
                    >
                      <div class="d-flex align-items-start">
                        <span class="me-2" style="font-size: 0.9rem;">⚠️</span>
                        <p class="mb-0 small" style="color: var(--color-text-main);">{step.safetyNote}</p>
                      </div>
                    </div>
                  {/if}
                </div>
              {/each}
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

  .task-card:hover:not(.inactive) {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(58, 58, 58, 0.08);
    cursor: pointer;
  }

  /* Active card styling */
  .task-card.active {
    transform: scale(1.05);
    border: 2px solid var(--color-primary);
    box-shadow: 0 12px 24px rgba(27, 169, 245, 0.2);
  }

  .task-card.active::before {
    width: 8px;
    opacity: 1;
  }

  /* Inactive cards (fade when one is active) */
  .task-card.inactive {
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

  .step-item {
    transition: all 0.2s ease;
  }

  .step-item:hover {
    border-color: var(--color-primary);
    box-shadow: 0 2px 8px rgba(27, 169, 245, 0.1);
  }
</style>
