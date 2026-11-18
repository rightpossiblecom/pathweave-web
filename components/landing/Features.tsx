"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Forty boards, four chapters",
    description: "Breeze, Weave, Labyrinth, and Mastery grow from 4×4 warmups to 7×6 boards.",
  },
  {
    title: "A daily 6×5",
    description: "The same board for everyone on a given date, with a streak that stays on the phone.",
  },
  {
    title: "One finger, one line",
    description: "Drag across tiles, tap a step, or pull back to unwind. Undo and reset are always there.",
  },
  {
    title: "Anchors on an exact step",
    description: "From level 11, a numbered tile must be reached on that move. The hint puts you back on the path.",
  },
  {
    title: "Light, dark, and quiet",
    description: "Material 3 themes, optional step numbers, and haptics you can turn off.",
  },
  {
    title: "Nothing leaves the device",
    description: "No account, no ads, no analytics. Progress sits in local storage until you clear it.",
  },
];

export function Features() {
  return (
    <Container id="features" className="mt-24">
      <h2 className="text-3xl font-semibold tracking-tight text-teal-950">What is on the board</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-3xl border border-white bg-white/80 p-6"
          >
            <h3 className="text-lg font-semibold text-teal-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-teal-950/70">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}
