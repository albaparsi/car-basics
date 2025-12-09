# Project Description

This project is a SvelteKit web application designed to make car ownership more accessible by providing educational content, practical tools, and resources for people without mechanical expertise.

The application features five main sections:

- **Car Basics**: Explains fundamental components like engines, batteries, brakes, and fluids in simple terms
- **Common Problems**: Helps users identify and understand typical car issues
- **Repair Costs**: Offers insights into typical repair expenses
- **DIY Basics**: Covers simple maintenance tasks users can safely perform themselves
- **Mechanic Checklist**: An interactive tool that helps users prepare for mechanic visits with checklists for symptoms, questions to ask, and red flags to watch for

Built with SvelteKit and Bootstrap, the application includes reusable components such as accordions, checklists, info cards, and a navigation bar. The mechanic checklist features local storage persistence to save user progress.

The project aims to empower car owners with knowledge and tools to make informed decisions about vehicle maintenance, understand what mechanics are talking about, and avoid being taken advantage of during repairs.


# [Design Work](./Design%20Work/)

# Interviews

To understand user needs, interviews were conducted with potential users. Below are responses from two participants:

## Participant 1: 

**Q1: What challenges do you face when dealing with car maintenance or repairs?**
"I never know if a mechanic is being honest with me. When they start talking about parts and problems, I feel completely lost and just have to trust whatever they say. I also don't know what's urgent versus what can wait, so I end up paying for things I might not need right away."

**Q2: What information would help you feel more confident when taking your car to a mechanic?**
"I'd love to have a checklist of questions to ask, and maybe some idea of what typical repairs cost. Also, if I could understand basic car terms before going in, I wouldn't feel so intimidated. A simple guide to what different parts do would be really helpful."

**Q3: How do you currently handle car problems or maintenance?**
"I usually just Google symptoms and hope for the best, but the information is overwhelming and I don't know what's reliable. Sometimes I ask friends, but they're not mechanics either. I wish there was one place that explained things simply without all the technical jargon."

## Participant 2: 

**Q1: What challenges do you face when dealing with car maintenance or repairs?**
"I'm pretty good with technology, but cars are a black box to me. When something goes wrong, I have no idea if it's something I could fix myself or if I need a professional. I also worry about getting ripped off because I don't know what things should cost."

**Q2: What information would help you feel more confident when taking your car to a mechanic?**
"I want to know what questions to ask so I can verify the mechanic knows what they're talking about. Also, having a reference for repair costs would help me spot if someone is overcharging. And I'd like to know what basic maintenance I can do myself safely."

**Q3: How do you currently handle car problems or maintenance?**
"I watch YouTube videos sometimes, but they're hit or miss. I've tried a few simple things like changing wiper blades, but I'm always worried I'll break something. I usually just take it to a shop and hope for the best, but I'd love to be more self-sufficient."

## User Needs & Design Requirements

### User Needs:
- Users need to understand basic car terminology and components without feeling overwhelmed
- Users need to know what questions to ask mechanics to verify their expertise and avoid being taken advantage of
- Users need reference information about typical repair costs to identify potential overcharging
- Users need to identify which car problems are urgent versus which can wait
- Users need guidance on what basic maintenance tasks they can safely perform themselves
- Users need a simple, trustworthy source of car information without technical jargon
- Users need to prepare for mechanic visits with relevant information about their car's symptoms and history

### Design Requirements:
- Display car components with simple, plain-language explanations (no technical jargon)
- Provide a checklist of questions to ask mechanics with checkboxes for tracking
- Show typical repair cost ranges with breakdowns of parts and labor
- Include severity indicators (urgent, serious, normal) for different car problems
- Create step-by-step DIY guides with safety warnings and tool checklists
- Use visual elements (icons, color coding) to make information more accessible
- Include text input fields for users to document symptoms, car history, and other relevant information before mechanic visits
- Implement local storage to save user progress and notes
- Design a clean, card-based layout that doesn't overwhelm users with information
- Use clear visual hierarchy and consistent styling throughout

# Feedback

After sharing the initial design work sketches and an initial simple UI with the same participants, the following feedback was received: (The comments were rephrased to fit the UI language.)

## Participant 1 Feedback

"I really like the clean layout of the home page, the card-based design makes it easy to see all the options at once. 

The common problems page is helpful, but I think the the section could be even clearer, maybe add visual distinction between the different issues. Also, I love that the DIY page has a progress tracker. That's motivating!

One suggestion: on the repair costs page, it would be great if the price breakdown was more prominent. Right now it's a bit buried in the detail panel."

## Participant 2 Feedback

"The design sketches show a really intuitive flow. I appreciate that the car basics page starts simple with just a few core components, that's not overwhelming at all. The DIY basics page is particularly well thought out with the tools checklist and step-by-step instructions. 

The mechanic checklist is brilliant. Having all those questions laid out means I won't forget to ask important things. I also like that there's space for custom notes.

A few thoughts: The repair costs page could benefit from a quick comparison view, maybe showing multiple services side by side. And on the common problems page, the symptom picker cards at the top are great, but I'd want to make sure the scroll-to-section behavior is smooth. "

# Interface Description

## Navigation
- Horizontal navigation bar at the top with six links: Home, Car Basics, Common Problems, Repair Costs, DIY Basics, and Mechanic Checklist
- Active page highlighted with bold text and subtle background overlay
- Navigation links use hover effects on mouse interaction

## Home Page
- Hero section with project title and description
- Five clickable section cards in a grid layout (Car Basics, Common Problems, Repair Costs, DIY Basics, Mechanic Checklist)
- Cards feature hover animations that lift them slightly with enhanced shadows
- Each card displays title, brief description, and a call-to-action link

## Car Basics Page
- Information cards displaying four core car components (Engine, Battery, Brakes, Fluids)
- Each card shows an icon, title, and plain-language description
- Essential Fluids section with a list of four key fluids and their purposes
- Dashboard Warning Lights section showing six common warning lights with icons and explanations
- Content organized in card-based layouts with left-side colored accent bars

## Common Problems Page
- Four symptom picker cards at the top (Won't start, Noises, Shaking, Leaks) that scroll to corresponding sections when clicked
- Each problem section contains:
  - Header with icon, title, and brief description
  - "What you notice" subsection
  - "What it might mean" subsection  
  - "Try this first" subsection with actionable steps
- Leaks section displays color-coded leak swatches (Clear, Green/Yellow/Orange, Brown/Black, Red/Pink) with severity labels (Normal, Serious, Urgent)
- Safety footer with reminder message and link to Mechanic Checklist
- Smooth scroll behavior when clicking symptom cards

## Repair Costs Page
- Grid of clickable service cards displaying service name, price range, description, and frequency tag
- Clicking a card expands a detail panel below with:
  - Two-column layout showing "What this service is", "Signs you might need it", "Typical price breakdown" (parts, labor, total), and "How often it happens"
- Active card scales up and highlights with border
- Inactive cards fade and desaturate when one is selected
- Detail panel animates in with slide-in effect
- Automatic smooth scroll to detail panel when card is expanded

## DIY Basics Page
- Grid of task cards (Jump-start a car, Change a tire, Refill wiper fluid, Replace wiper blades)
- Each task card shows title, time estimate, and description
- Clicking a task expands a detail panel with:
  - Progress bar showing completion percentage
  - Safety banner with warning message
  - Left column: Tools checklist, Pre-start checklist, Notes textarea (auto-saves to localStorage)
  - Right column: Step-by-step instructions with checkboxes
- Steps can be marked complete individually
- Progress updates automatically based on completed steps
- All checkboxes and notes persist in browser localStorage

## Mechanic Checklist Page
- Print button in header for printing the checklist
- Three-column layout with three main sections:
  - **Before you go**: Symptoms checklist, Noises checklist, Info fields (mileage, last oil change, warning lights)
  - **At the shop**: Questions to ask checklist, Text fields for symptoms description, car history, budget, Red flags list
  - **Your notes & to-dos**: Input field for adding custom notes, List of user-added notes with delete buttons
- Auto-resizing textareas that adjust height based on content
- All data (checklists, text inputs, custom notes) auto-saves to localStorage
- Checkboxes use strike-through styling when checked
- Print stylesheet hides interactive elements and formats content for printing

## Visual Design Elements
- Color scheme uses CSS custom properties for theming (primary blue, neutral grays, warning colors)
- Cards feature subtle shadows, rounded corners, and left-side accent bars
- Hover states on interactive elements with transform and shadow transitions
- Responsive grid layouts that adapt to screen size (Bootstrap breakpoints)
- Consistent spacing and typography hierarchy throughout
- Icons used for visual enhancement (car parts, warning lights, actions)

## Interactive Controls
- Clickable cards for navigation between sections
- Checkboxes for task tracking and checklists
- Text inputs and textareas for user notes and information entry
- Expandable/collapsible detail panels on Repair Costs and DIY Basics pages
- Smooth scrolling navigation within pages
- Print functionality for Mechanic Checklist
- Add/remove buttons for custom notes in Mechanic Checklist
- All interactive elements provide visual feedback (hover, active states, transitions)

## Data Persistence
- Mechanic Checklist: Saves all form data, checklists, and notes to localStorage
- DIY Basics: Saves task progress, tool checklists, step completion, and notes to localStorage
- Data automatically loads when pages are revisited
- No server-side storage required

# [Screenshots](./Screenshots/)

# Implementation

## Technologies & Libraries
- **SvelteKit** (v2.48.5) - Framework for routing and component structure
- **Svelte** (v5.43.8) - Reactive component framework
- **Bootstrap** (v5.3.3) - CSS framework for responsive layouts and utilities
- **Vite** (v7.2.2) - Build tool and development server
- **Vercel Adapter** - Deployment configuration for Vercel hosting

## Code Structure
- **File-based routing**: Pages located in `src/routes/` directory (e.g., `/car-basics/+page.svelte`)
- **Shared layout**: `+layout.svelte` wraps all pages with navigation and global styles
- **Reusable components**: Located in `src/lib/components/` (NavBar, Checklist, Accordion, InfoCard, Icon)
- **Data separation**: Content data stored in `src/lib/data/` as JavaScript modules (basics.js, costs.js, problems.js, etc.)
- **Styling**: Global CSS variables in `layout.css` for theming, component-scoped styles in Svelte files

## State Management
- **Client-side only**: No backend server or database
- **localStorage**: Used for persisting user input on Mechanic Checklist and DIY Basics pages
- **Reactive state**: Svelte's reactive declarations handle UI updates based on user interactions

## Build & Deployment
- Development: `npm run dev` starts Vite dev server
- Build: `npm run build` creates production bundle
- Deployment: Configured for Vercel with adapter

# Use of AI

AI was utilized in two main areas of this project:

- **Icons**: AI-generated SVG icons for car components, warning lights, and other visual elements used throughout the application
- **Mechanic Checklist Page**: AI assistance was used in the development and implementation of the mechanic checklist page, including its structure, layout, and interactive features

# Future Work

Planned enhancements for the application include:

- **AI Agent**: Implementation of an AI assistant that can provide personalized help and guidance to users based on their specific car issues and questions
- **Expanded Coverage**: Extend content to cover many more car makes, models, and vehicle-specific information
- **Mechanic Directory**: Integration of a directory system to connect users with trusted, verified mechanic shops in their area
- **User Accounts & Vehicle Profiles**: Allow users to save their vehicle information (make, model, year) for personalized content and recommendations
- **Maintenance Reminders**: Push notifications for scheduled maintenance tasks like oil changes, tire rotations, and other routine services
- **Search Functionality**: Site-wide search feature to quickly find information about problems, parts, or maintenance topics
- **Progressive Web App (PWA)**: Mobile app-like experience with offline capabilities for accessing content without an internet connection
- **Video Tutorials**: Embedded video guides for DIY tasks to complement the existing step-by-step instructions
- **Maintenance History Tracker**: Allow users to log past repairs and services for their vehicles to maintain a complete service record

# Links

- **GitHub Repo**: https://github.com/albaparsi/car-basics
- **Hosted Website**: https://car-basics.vercel.app/
- **Demo**: https://youtu.be/9aNBZ65KSBM