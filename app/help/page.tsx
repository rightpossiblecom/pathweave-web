import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Help",
  description: "How to play PathWeave, what the daily board is, and where progress is stored.",
};

const topics = [
  {
    title: "Playing a board",
    body: "Put a finger on the glowing origin and drag through adjacent open tiles. You can also tap the next tile. Dragging back along your own line unwinds it. Stones are blocked, and the line cannot cross itself. The board is finished when every open tile has been visited once.",
  },
  {
    title: "Numbered anchors",
    body: "From the later chapters, some tiles show a step number. Your line must land on that tile on that exact count. If the number is 7, it has to be the seventh tile in the path. The hint button walks your line back to the last correct prefix and then reveals the next step.",
  },
  {
    title: "Daily weave",
    body: "The daily board is a 6×5 generated from the date. It is the same board if you reopen that day. The streak counts consecutive days you finish it, and it is stored only on the device.",
  },
  {
    title: "Progress and settings",
    body: "Completed levels, stars, the streak, theme, haptics, and the step overlay are saved locally. Clearing data in Settings, or removing the app, deletes them. There is no account to sign into on another phone.",
  },
];

export default function HelpPage() {
  return (
    <main>
      <Container className="max-w-3xl py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-teal-950">Help</h1>
        <p className="mt-4 text-teal-950/70">
          PathWeave is a single-stroke puzzle. These notes match the controls in the app.
        </p>
        <div className="mt-10 space-y-8">
          {topics.map((topic) => (
            <section key={topic.title}>
              <h2 className="text-xl font-semibold text-teal-950">{topic.title}</h2>
              <p className="mt-2 leading-7 text-teal-950/75">{topic.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-teal-950/70">
          Still stuck on a level? <Link href="/contact" className="font-semibold text-teal-800">Write to us</Link> with
          the chapter and the level number.
        </p>
      </Container>
    </main>
  );
}
