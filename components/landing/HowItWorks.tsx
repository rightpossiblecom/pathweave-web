import { Container } from "@/components/ui/container";

const steps = [
  {
    title: "Start on the glowing tile",
    body: "Every board has one origin. That tile is the only legal first step.",
  },
  {
    title: "Cover every open square",
    body: "Move up, down, left, or right. Stones are closed. Your line cannot cross itself.",
  },
  {
    title: "Land the numbered anchors",
    body: "On later boards, a marked tile is only correct on that exact step count. Finish on the last open square.",
  },
];

export function HowItWorks() {
  return (
    <Container id="how" className="mt-24">
      <h2 className="text-3xl font-semibold tracking-tight text-teal-950">How a puzzle is solved</h2>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-3xl bg-teal-900 px-6 py-7 text-teal-50">
            <p className="font-mono text-sm text-amber-200">0{index + 1}</p>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-teal-100/80">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
