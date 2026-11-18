"use client";

import { motion } from "framer-motion";

import { AppScreen } from "@/components/mockup/AppScreen";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <Container className="grid items-center gap-12 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
          Offline puzzle
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-teal-950 sm:text-6xl">
          Weave one path through every open tile.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-teal-950/70">
          PathWeave is a single-stroke logic game. Start at the glowing tile, stay off the stones, and cover the board
          without crossing your own line.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#how">See how a board works</Button>
          <Button href="/contact" variant="outline">
            Ask about the game
          </Button>
        </div>
      </motion.div>
      <AppScreen />
    </Container>
  );
}
