import { Container } from "@/components/ui/container";

const questions = [
  {
    q: "Do I need an account?",
    a: "No. PathWeave opens straight onto the puzzle list. There is no signup and no cloud save.",
  },
  {
    q: "Does it work on a plane?",
    a: "Yes. The campaign, the daily board, and your progress are all on the device. The game does not call a server to start a level.",
  },
  {
    q: "What is a daily weave?",
    a: "A 6×5 board chosen from the date. The same phone gets the same board if you open that date again.",
  },
  {
    q: "What happens if I clear data?",
    a: "Settings can erase local progress, stars, and the daily streak. That cannot be restored, because it was never uploaded.",
  },
  {
    q: "Are there ads or purchases?",
    a: "No ads and no in-app purchases in this version. The forty campaign boards and the daily puzzle are in the app.",
  },
  {
    q: "Who do I write if a board feels wrong?",
    a: "Email support@pathweave.app with the chapter and level number. The campaign solutions are checked before release.",
  },
];

export function FAQ() {
  return (
    <Container id="faq" className="mt-24">
      <h2 className="text-3xl font-semibold tracking-tight text-teal-950">Questions</h2>
      <div className="mt-8 divide-y divide-teal-900/10 rounded-3xl border border-teal-900/10 bg-white/70">
        {questions.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="cursor-pointer list-none font-semibold text-teal-950">{item.q}</summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-teal-950/70">{item.a}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
