import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  linkLabel?: string;
  note?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Ascended: Fitness Adventure',
    category: 'RPG FITNESS GAME / iOS',
    description:
      'An RPG fitness game that turns real workouts into character progression, with Apple Health-synced training, custom hero creation, and story-driven missions.',
    link: 'https://apps.apple.com/us/app/ascended-fitness-rpg/id6755092670',
    linkLabel: 'VIEW ON APP STORE',
    tech: ['Swift', 'SwiftUI', 'Apple HealthKit', 'RevenueCat', 'MapKit'],
    metrics: [
      { label: 'DESIGN', value: 'Full Game Design & Development' },
      { label: 'INTEGRATION', value: 'Apple HealthKit Sync' },
      { label: 'STATUS', value: 'Live on the App Store' },
    ],
  },
  {
    number: '02',
    title: 'Expo Pass',
    category: 'EVENT MANAGEMENT APP / iOS',
    description:
      'Large-scale offline-first app for international events with tens of thousands of attendees. Designed a Realm-based persistence and sync system with Operation Queues for background sync and local-first UI; migrated networking to a custom URLSession/Codable layer; built QR check-in and badge generation.',
    link: 'https://apps.apple.com/us/app/expo-pass/id921625648',
    linkLabel: 'VIEW ON APP STORE',
    tech: ['Swift', 'Realm', 'URLSession', 'Codable', 'Stripe SDK', 'AWS Amplify', 'Firebase', 'Firebase Crashlytics'],
    metrics: [
      { label: 'SCALE', value: '10,000s of Attendees' },
      { label: 'ARCHITECTURE', value: 'Offline-First Sync' },
      { label: 'CHECK-IN', value: 'QR + Badge Generation' },
    ],
  },
  {
    number: '03',
    title: 'Re-wear',
    category: 'P2P RESALE & RENTAL MARKETPLACE',
    description:
      'Built at UV Apps: users list clothing, jewelry, and shoes to sell or rent. Architected a conflict-safe booking system using PostgreSQL date-range exclusion constraints to guarantee zero double-bookings under concurrent requests, plus an append-only financial ledger for payments, deposits, and payouts.',
    note: 'In Beta Testing',
    tech: ['Flutter', 'Supabase', 'PostgreSQL'],
    metrics: [
      { label: 'BOOKING', value: 'Zero Double-Booking Guarantee' },
      { label: 'LEDGER', value: 'Append-Only Financial Records' },
      { label: 'STUDIO', value: 'Built at UV Apps' },
    ],
  },
  {
    number: '04',
    title: 'HealHub',
    category: 'HEALTH & WELLNESS APP / iOS',
    description:
      'Designed and built from concept to App Store release; architected a scalable MVVM + SOLID codebase. Built a dual-circle symptom selector with AI-powered search across structured backend data, plus a multi-part AVFoundation video-recording feature with countdown, segment recording, and trim/redo editing.',
    note: 'Private client project',
    tech: ['Swift', 'SwiftUI', 'AVFoundation', 'MVVM', 'RealityKit', 'Blender'],
    metrics: [
      { label: 'SEARCH', value: 'AI-Powered Symptom Search' },
      { label: 'UI', value: 'Custom Dual-Geometry Component' },
      { label: 'OWNERSHIP', value: 'Concept → Release' },
    ],
  },
  {
    number: '05',
    title: 'Party Companion',
    category: 'SOCIAL / PARTY GAMES APP',
    description:
      'A party games and tools app with six built-in games (Pictionary, Dumb Charades, Never Have I Ever, Would You Rather, Truth or Dare, Heads Up) plus utilities like a dice roller, timer, coin flip, and a smart team generator that parses an uploaded PDF or Excel file of names to auto-split teams. Designed solo in Figma and built end-to-end as Founder/CPO of UV Apps.',
    link: 'https://apps.apple.com/us/app/party-companion/id6756276508',
    linkLabel: 'VIEW ON APP STORE',
    tech: ['Flutter', 'Supabase', 'Lottie', '3D Animations', 'PDF/Excel Parsing'],
    metrics: [
      { label: 'GAMES', value: '6 Built-In Games' },
      { label: 'TEAMS', value: 'PDF/Excel-Driven Generation' },
      { label: 'UI', value: 'Lottie + 3D Animated' },
    ],
  },
  {
    number: '06',
    title: 'Conquer',
    category: 'TRAVEL & EXPLORATION APP',
    description:
      "A travel-tracking app built around an interactive 3D globe where users drop pins on places they've visited, attach up to 3 photos and 2 videos per location, collect country stamps in a passport screen, and unlock achievements based on travel history. Designed solo in Figma and built end-to-end as Founder/CPO of UV Apps.",
    note: 'Not yet published',
    tech: ['Flutter', 'Supabase', 'MapKit', 'Mapbox'],
    metrics: [
      { label: 'GLOBE', value: 'Interactive 3D Pin-Based Map' },
      { label: 'PASSPORT', value: 'Gamified Stamp System' },
      { label: 'ACHIEVEMENTS', value: 'Tied to Travel Activity' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>{project.linkLabel ?? 'VIEW PROJECT'}</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ) : project.note ? (
                      <div
                        className="inline-flex items-center justify-center px-6 py-3.5 border border-[#8C6D4F]/30 text-[#8C6D4F] text-[11px] font-medium tracking-[0.24em] uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>{project.note}</span>
                      </div>
                    ) : null}
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;