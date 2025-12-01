export const costs = [
  {
    id: 'oil-change',
    service: 'Oil Change',
    priceRange: '$60–$120',
    description: 'Regular engine oil replacement to keep your engine running smoothly.',
    frequency: 'Every 5–7k miles',
    frequencyTag: 'Regular',
    whatIsIt: [
      'Replacing old engine oil and oil filter',
      'Removes contaminants and maintains engine lubrication',
      'Prevents engine wear and overheating'
    ],
    signsYouNeedIt: [
      'Oil change light appears on dashboard',
      'Engine sounds louder or rougher',
      'Dark, dirty oil on dipstick',
      'Mileage since last change exceeds 5,000–7,000 miles'
    ],
    priceBreakdown: {
      parts: '$20–$50',
      labor: '$40–$70',
      total: '$60–$120'
    },
    frequencyMeter: 5 // 1-5 scale, 5 = most frequent
  },
  {
    id: 'brake-pads',
    service: 'Brake Pads',
    priceRange: '$150–$300',
    description: 'Replacement of worn brake pads to maintain safe stopping power.',
    frequency: 'Every 30–50k miles',
    frequencyTag: 'Regular',
    whatIsIt: [
      'Replacing friction pads that press against rotors',
      'Essential for safe braking and stopping distance',
      'Front pads typically wear faster than rear'
    ],
    signsYouNeedIt: [
      'Squeaking or grinding noise when braking',
      'Brake pedal feels soft or spongy',
      'Vehicle pulls to one side when braking',
      'Brake warning light on dashboard'
    ],
    priceBreakdown: {
      parts: '$80–$150',
      labor: '$70–$150',
      total: '$150–$300'
    },
    frequencyMeter: 3
  },
  {
    id: 'rotors',
    service: 'Brake Rotors',
    priceRange: '$200–$400',
    description: 'Replacement or resurfacing of brake rotors when they become warped or worn.',
    frequency: 'Every 50–70k miles',
    frequencyTag: 'Occasional',
    whatIsIt: [
      'Metal discs that brake pads clamp onto',
      'Can be resurfaced if not too worn, or replaced',
      'Critical for even braking and preventing vibration'
    ],
    signsYouNeedIt: [
      'Steering wheel shakes when braking',
      'Pulsing or vibration in brake pedal',
      'Visible grooves or scoring on rotors',
      'Replaced brake pads but still have issues'
    ],
    priceBreakdown: {
      parts: '$100–$200',
      labor: '$100–$200',
      total: '$200–$400'
    },
    frequencyMeter: 2
  },
  {
    id: 'battery',
    service: 'Battery Replacement',
    priceRange: '$100–$200',
    description: 'Installing a new car battery when the old one can no longer hold a charge.',
    frequency: 'Every 3–5 years',
    frequencyTag: 'Occasional',
    whatIsIt: [
      'Replacing the 12-volt battery that starts your engine',
      'Provides power when engine is off',
      'Most batteries last 3–5 years depending on climate'
    ],
    signsYouNeedIt: [
      'Engine cranks slowly or won\'t start',
      'Battery warning light on dashboard',
      'Headlights dim when idling',
      'Battery is more than 3–4 years old'
    ],
    priceBreakdown: {
      parts: '$80–$150',
      labor: '$20–$50',
      total: '$100–$200'
    },
    frequencyMeter: 2
  },
  {
    id: 'spark-plugs',
    service: 'Spark Plugs',
    priceRange: '$100–$300',
    description: 'Replacing spark plugs that ignite the fuel-air mixture in your engine.',
    frequency: 'Every 30–100k miles',
    frequencyTag: 'Occasional',
    whatIsIt: [
      'Small components that create the spark to start combustion',
      'Worn plugs reduce fuel efficiency and power',
      'Modern plugs can last 100k miles, older ones need replacement sooner'
    ],
    signsYouNeedIt: [
      'Rough idling or engine misfires',
      'Reduced fuel economy',
      'Difficulty starting the engine',
      'Check engine light appears',
      'Mileage exceeds manufacturer recommendation'
    ],
    priceBreakdown: {
      parts: '$50–$150',
      labor: '$50–$150',
      total: '$100–$300'
    },
    frequencyMeter: 2
  },
  {
    id: 'tire-rotation',
    service: 'Tire Rotation',
    priceRange: '$30–$80',
    description: 'Moving tires to different positions to ensure even wear across all four tires.',
    frequency: 'Every 5–7k miles',
    frequencyTag: 'Regular',
    whatIsIt: [
      'Swapping tire positions (front to back, side to side)',
      'Promotes even tread wear',
      'Extends overall tire life'
    ],
    signsYouNeedIt: [
      'Uneven tire wear visible on tread',
      'Vehicle pulls to one side',
      'Regular maintenance schedule (every oil change)',
      'One tire wearing faster than others'
    ],
    priceBreakdown: {
      parts: '$0',
      labor: '$30–$80',
      total: '$30–$80'
    },
    frequencyMeter: 5
  },
  {
    id: 'air-filter',
    service: 'Air Filter',
    priceRange: '$20–$50',
    description: 'Replacing the engine air filter to maintain proper airflow and fuel efficiency.',
    frequency: 'Every 15–30k miles',
    frequencyTag: 'Regular',
    whatIsIt: [
      'Filters dirt and debris from air entering the engine',
      'Clean filter improves fuel economy and engine performance',
      'Simple, inexpensive maintenance item'
    ],
    signsYouNeedIt: [
      'Reduced gas mileage',
      'Engine feels sluggish or less powerful',
      'Visible dirt or debris on filter',
      'Mileage since last change exceeds 15,000 miles'
    ],
    priceBreakdown: {
      parts: '$15–$30',
      labor: '$5–$20',
      total: '$20–$50'
    },
    frequencyMeter: 4
  },
  {
    id: 'transmission-fluid',
    service: 'Transmission Fluid',
    priceRange: '$100–$200',
    description: 'Draining and replacing transmission fluid to maintain smooth shifting.',
    frequency: 'Every 30–60k miles',
    frequencyTag: 'Occasional',
    whatIsIt: [
      'Fluid that lubricates and cools transmission components',
      'Prevents wear and ensures smooth gear changes',
      'Some vehicles have "lifetime" fluid, but changing is still recommended'
    ],
    signsYouNeedIt: [
      'Rough or delayed shifting',
      'Transmission slips or jerks',
      'Burning smell from transmission',
      'Fluid is dark or has a burnt smell',
      'Mileage exceeds manufacturer recommendation'
    ],
    priceBreakdown: {
      parts: '$40–$80',
      labor: '$60–$120',
      total: '$100–$200'
    },
    frequencyMeter: 2
  },
  {
    id: 'coolant-flush',
    service: 'Coolant Flush',
    priceRange: '$80–$150',
    description: 'Draining and replacing engine coolant to prevent overheating and corrosion.',
    frequency: 'Every 2–5 years',
    frequencyTag: 'Occasional',
    whatIsIt: [
      'Replacing antifreeze/coolant that regulates engine temperature',
      'Prevents engine overheating and freezing',
      'Protects against rust and corrosion in cooling system'
    ],
    signsYouNeedIt: [
      'Engine runs hot or overheats',
      'Coolant is discolored or has particles',
      'Coolant level is consistently low',
      'More than 2–3 years since last flush',
      'Rust visible in coolant reservoir'
    ],
    priceBreakdown: {
      parts: '$30–$60',
      labor: '$50–$90',
      total: '$80–$150'
    },
    frequencyMeter: 2
  },
  {
    id: 'serpentine-belt',
    service: 'Serpentine Belt',
    priceRange: '$100–$250',
    description: 'Replacing the belt that drives multiple engine accessories like alternator and AC.',
    frequency: 'Every 60–100k miles',
    frequencyTag: 'Rare',
    whatIsIt: [
      'Single belt that powers alternator, power steering, AC, and water pump',
      'Cracked or worn belt can cause multiple systems to fail',
      'Preventive replacement is cheaper than emergency repair'
    ],
    signsYouNeedIt: [
      'Squealing noise from engine, especially on startup',
      'Visible cracks or fraying on belt',
      'AC, power steering, or charging system stops working',
      'Belt is more than 5–7 years old',
      'Mileage exceeds 60,000–100,000 miles'
    ],
    priceBreakdown: {
      parts: '$30–$80',
      labor: '$70–$170',
      total: '$100–$250'
    },
    frequencyMeter: 1
  }
];
