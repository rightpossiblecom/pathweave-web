import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PathWeave handles information. The game stores progress on the device and does not collect an account.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Container className="max-w-3xl py-16">
        <p className="text-sm text-teal-800">Last updated November 18, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-teal-950">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-[15px] leading-7 text-teal-950/80">
          <p>
            PathWeave is an offline puzzle game. This policy describes what the app and this website do with information.
            The short version is that the game does not ask for an account, does not send your puzzles to a server, and
            does not sell information about you. The longer version below is the one that applies.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">The game on your device</h2>
          <p>
            When you play PathWeave, the app keeps campaign progress, stars, the daily streak, and settings such as theme,
            haptics, and the step-number overlay in local storage on that device. That storage is used so the next time
            you open the app you can continue from the board you left. It is not uploaded as part of ordinary play. If
            you uninstall the app or clear its data from the system settings, that local record is gone. PathWeave cannot
            restore it, because a copy was never sent to us.
          </p>
          <p>
            The daily board is chosen from the date on the device. Generating that board does not require a network
            request, and finishing it does not report a score to PathWeave. There is no leaderboard and no player name.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">What we do not collect in the app</h2>
          <p>
            The Android and iOS builds do not include an account system, advertising SDK, analytics SDK, crash-reporting
            SDK, or location request. They do not read your contacts, photos, or microphone. They do not ask you to sign
            in with Google, Apple, or any other identity provider. Puzzle solutions are packaged with the app so a hint
            can be shown without calling a service.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">This website</h2>
          <p>
            pathweave-web.vercel.app is a static marketing site. It does not have a login, a comment form that stores a
            profile, or a cookie banner that tracks you across other sites. Your browser will request the pages you open,
            and the host that serves those pages may keep ordinary connection logs such as IP address, time, and the URL
            requested. Those logs are used to operate and protect the site. We do not use them to build a PathWeave
            player profile, because the game and the website are not linked by an account.
          </p>
          <p>
            If you email {site.email}, that message contains whatever you choose to write, along with your email address
            and the time it was sent. We use it to answer the question. We do not add that address to a marketing list.
            Please do not send passwords, payment card numbers, or government ID numbers. The game does not need them.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">Children</h2>
          <p>
            PathWeave is a logic puzzle with no chat, no user profiles, and no purchases. It is suitable for a general
            audience. We do not knowingly collect personal information from children through the app, because the app
            does not collect personal information from anyone.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-teal-950">Changes</h2>
          <p>
            If a future version of PathWeave starts to send data off the device, this page will be updated before that
            version is offered, and the in-app legal screen will be updated to match. Until that happens, the description
            above is the one the current build follows.
          </p>
          <p>
            Questions about this policy can be sent to {site.email}.
          </p>
        </div>
      </Container>
    </main>
  );
}
