// Show Me Instead of Telling Me
// Entry for make.fun — "A Day of One-Line Pitches" (u-ronigrv), by topan-kun.
//
// The sentence below is put together from four beats, the same way you
// would actually say it to a friend across a cafe table:
//
//   1. the habit  — the idea has already been pitched out loud many times
//   2. the ask    — say it once more tonight, in writing, where it counts
//   3. the build  — an AI agent turns that one sentence into a first version
//   4. the payoff — next time there is something to show, not just to tell
//
// Keeping the beats separate makes the line easy to tune: swap one beat
// and the rest of the sentence still lands.

const beats = {
  habit: "You have told me your app idea over coffee a dozen times",
  tonight: "tonight, tell it once more in one plain sentence on make.fun",
  built: "let an AI agent build your first version for free",
  payoff: "next time you can show me instead of telling me",
};

/** Join the four beats into the single pitch sentence. */
function stitch(habit: string, tonight: string, built: string, payoff: string): string {
  return `${habit} — ${tonight} and ${built}, so ${payoff}.`;
}

const pitch = stitch(beats.habit, beats.tonight, beats.built, beats.payoff);

// A one-line pitch has to stay one line and one sentence, so refuse to
// print anything else. The dot inside "make.fun" is part of a name, not
// a sentence ending, so mask it out before counting terminators.
if (pitch.includes("\n")) {
  throw new Error("pitch drifted off its single line");
}
const proseOnly = pitch.split("make.fun").join("makefun");
const endings = proseOnly.match(/[.!?]/g) ?? [];
if (endings.length !== 1 || !pitch.endsWith(".")) {
  throw new Error(`pitch must be a single sentence, found ${endings.length} endings`);
}
if (pitch.length !== 226) {
  throw new Error(`pitch is ${pitch.length} characters, expected 226`);
}

console.log(pitch);
