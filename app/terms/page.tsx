import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using PathWeave, an offline single-stroke puzzle game.",
};

export default function TermsPage() {
  return (
    <main>
      <Container className="max-w-3xl py-16">
        <p className="text-sm text-teal-800">Last updated November 18, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-teal-950">Terms of Use</h1>
        <div className="mt-8 space-y-5 text-[15px] leading-7 text-teal-950/80">
          <p>
            These terms cover the PathWeave mobile app and the pages on this website. By installing the app or reading
            the site, you agree to them. If you do not agree, do not install the app and do not rely on the site for
            anything other than general information about the game.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">The game</h2>
          <p>
            PathWeave gives you a set of single-stroke logic puzzles, a daily board derived from the date, and local
            records of what you have finished. You may install it for personal, non-commercial play on devices you own
            or control. You may not resell the app, scrape the campaign into another product, or present the boards as
            your own game.
          </p>
          <p>
            The puzzles are designed to have one intended solution. A hint restores your line onto that solution and
            then shows the next step. Using a hint is part of the game. Sharing a written solution with a friend is fine.
            Publishing the full campaign as a walkthrough that replaces the app is not.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">Local progress</h2>
          <p>
            Stars, completed levels, and the daily streak live on the device. Uninstalling the app, clearing storage, or
            losing the phone removes them. PathWeave does not promise a cloud backup, because the current version does
            not have one. You are responsible for the device you play on.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">The website</h2>
          <p>
            The pages here describe the game, explain the rules, and give you an address to write to. They are not a
            store checkout and they are not a place to create an account. Availability of the website can change while
            we replace a blank page with the finished one, move hosts, or attach a custom domain. The game on your
            phone does not depend on this website staying online.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">Intellectual property</h2>
          <p>
            The PathWeave name, the app icon, the board art, the campaign layouts, and the text on this site belong to
            their owner. You receive a license to play, not an assignment of those rights. Feedback you email us may be
            used to fix a level or adjust a sentence. You keep the copyright in a message you wrote, and you allow us to
            use the substance of a bug report to improve the game.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">As-is</h2>
          <p>
            PathWeave is provided as it is. We work to ship boards that can be finished, and we correct mistakes that
            are reported, but we do not warrant that every device, every operating system update, or every future store
            policy will leave the app unchanged. To the extent the law allows, we are not liable for lost local progress
            or for time spent on a puzzle. Some places do not allow certain limitations, and in those places the
            limitation applies only as far as the law permits.
          </p>
          <p>
            Questions about these terms go to {site.email}.
          </p>
        </div>
      </Container>
    </main>
  );
}
