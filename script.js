const activities = {
  indoor: [
    { name: "Kartbahn Werther", icon: "🏎️", hours: "15–22 Uhr", note: "Ca. 20–25 Min. Fahrt; Slot reservieren.", url: "https://www.kartbahn-werther.de/kontakt/", description: "Indoor-Kartfahren in Werther." },
    { name: "GolfZone Bielefeld", icon: "⛳", hours: "15–22 Uhr", note: "3D-Schwarzlicht-Minigolf – früher GlowZone.", url: "https://golfzone.de/kontakt-anfahrt/", description: "Zusammen durch leuchtende 3D-Minigolfwelten spielen." },
    { name: "PixelZone Bielefeld", icon: "🔥", hours: "15–22 Uhr", note: "LED-Boden, auch zu zweit spielbar.", url: "https://pixel-zone.de/pixelgames-bielefeld/", description: "Der Boden ist Lava – ein schnelles Spiel auf dem LED-Feld." },
    { name: "LaserZone Bielefeld", icon: "🔫", hours: "15–21 Uhr", note: "Am selben Standort wie GolfZone und PixelZone.", url: "https://laserzone.de/lasertag-bielefeld/", description: "Lasertag in einer großen Indoor-Arena." },
    { name: "Gamer – Die Gameshow", icon: "🎮", hours: "16–21:30 Uhr", note: "Für zwei Personen geeignet; eine gute Date-Idee.", url: "https://www.gamer.now/bielefeld/date", description: "In kurzen Duellen gegeneinander antreten." },
    { name: "VUTURIA Arena", icon: "🥽", hours: "Termine nach Buchung", note: "Mehrere Spielarten; freien Slot für Donnerstag prüfen.", url: "https://www.vuturia.de/", description: "Gemeinsam in immersive Spiele eintauchen." },
    { name: "Superfly Bielefeld", icon: "🤸", hours: "14–19 Uhr", note: "Sportlich und ziemlich intensiv.", url: "https://superfly.de/bielefeld/", description: "Eine Stunde Trampolin- und Actionpark." },
    { name: "The Strike", icon: "🎳", hours: "15–23 Uhr", note: "Bowling am Hauptbahnhof.", url: "https://the-strike.de/bielefeld/location/", description: "Bowling-Date direkt am Bielefelder Hauptbahnhof." },
    { name: "Elite Bowling", icon: "🎳", hours: "16–22:30 Uhr", note: "Zweite Bielefelder Bowlingoption.", url: "https://elite-bowling.de/preise-und-zeiten/", description: "Eine Stunde Bowling zu zweit in Bielefeld." },
    { name: "Raum&Zeit", icon: "🧩", hours: "Freie Slots prüfen", note: "Escape Rooms zentral in Bielefeld; zuvor Space & Time genannt.", url: "https://www.raumundzeit-owl.de/escape-rooms/", description: "Gemeinsam einen Escape Room lösen." },
    { name: "Sinister Rooms", icon: "🧩", hours: "Freie Slots prüfen", note: "Stärker inszenierter Escape Room; The Night Flight startet laut Anbieter am 01.10.", url: "https://www.sinister-rooms.de/", description: "Ein atmosphärischer Escape-Room-Abend." },
    { name: "BlocBuster", icon: "🧗", hours: "10–22 Uhr", note: "Bouldern in Bielefeld.", url: "https://bb.blocbuster.net/bouldern-in-bielefeld", description: "Zusammen bouldern und euch gegenseitig anfeuern." },
    { name: "Adventure Games Herford", icon: "🧩", hours: "10–20 Uhr", note: "Escape Rooms; ca. 20–25 Min. Fahrt, Slot prüfen.", url: "https://www.adventuregames-herford.de/", description: "Escape-Room-Abenteuer in Herford." },
    { name: "H2O Herford", icon: "🏊", hours: "Freizeitbad 10–21 Uhr", note: "Entspanntere Ergänzung; ca. 20–25 Min. Fahrt.", url: "https://www.h2o-herford.de/rund-ums-h2o/oeffnungszeiten", description: "Zusammen schwimmen und einen entspannten Tag verbringen." },
    { name: "Red Bowl Bünde", icon: "🎳", hours: "16–22 Uhr", note: "Weitere Bowlingoption, grob 35–40 Min. Fahrt.", url: "https://www.redbowl-buende.de/", description: "Bowling-Ausflug nach Bünde." },
    { name: "funXperience Bad Oeynhausen", icon: "✨", hours: "15–21 Uhr", note: "NeonGolf, Pixel Games, Lasertag und Escape Rooms; mit 40–45 Min. Fahrt ein Grenzfall.", url: "https://www.funxperience.de/badoeynhausen/anfahrt-oeffnungszeiten/", description: "Verschiedene Indoor-Spiele an einem Ort." },
    { name: "Kunsthalle Bielefeld", icon: "🎨", hours: "11–18 Uhr", note: "Ruhiges Date mit Ausstellung und Café.", url: "https://kunsthalle-bielefeld.de/besuchen/", description: "Gemeinsam Kunst anschauen und danach ins Café." },
    { name: "Naturkunde-Museum Bielefeld", icon: "🦋", hours: "10–17 Uhr", note: "Naturkunde-Museum mitten in Bielefeld.", url: "https://namu-ev.de/das-museum/besuchen/", description: "Eine entspannte Runde durchs Naturkunde-Museum." }
  ],
  outdoor: [
    { name: "Bauer Bernd", icon: "🌽", hours: "10–18:45 Uhr", price: "Ticketpreis prüfen", note: "Borgholzhausen, ca. 30–35 Min.; Maislabyrinth, Gokarts und Fußballgolf. Feste Schuhe mitnehmen.", url: "https://maislabyrinth-borgholzhausen.de/", description: "Maislabyrinth, Gokarts, Fußballgolf und mehr auf dem Erlebnishof." },
    { name: "Discgolf am Obersee", icon: "🥏", hours: "Frei zugänglich; Schnuppertraining Do. 17 Uhr", price: "Kostenlos, Leihscheiben 3 €", note: "Direkt in Bielefeld; Scheiben können beim Seekrug ausgeliehen werden.", url: "https://www.tus-ost.de/sportarten/discgolf-2", description: "Ein kleines Discgolf-Duell rund um den Obersee." },
    { name: "Externsteine", icon: "🪨", hours: "Felsenbesteigung 10–18 Uhr", price: "5 €; Gelände frei", note: "Horn-Bad Meinberg, ca. 35–40 Min.; bei schlechtem Wetter kann die Besteigung schließen.", url: "https://www.externsteine-info.de/tickets-und-anreise/tickets/", description: "Felsen erklimmen und die Aussicht genießen – sofern das Wetter mitspielt." },
    { name: "Adlerwarte Berlebeck", icon: "🦅", hours: "9:30–17 Uhr; Shows 11, 13 und 15 Uhr", price: "8,50 €", note: "Detmold, ca. 35–45 Min.; Flugshows können bei Starkregen ausfallen.", url: "https://www.detmold-adlerwarte.de/programme-preise/", description: "Greifvögel bei einer Flugshow hautnah erleben." },
    { name: "Maislabyrinth Hof Broeker", icon: "🌽", hours: "8 Uhr bis Sonnenuntergang", price: "5 €", note: "Stukenbrock, ca. 25–30 Min.; neun Quizstationen und kleines Kürbisland. Bei Regen matschig.", url: "https://hof-broeker.de/maislabyrinth/", description: "Gemeinsam durchs Maislabyrinth und die Quizstationen rätseln." },
    { name: "Kürbisparade Hof Ordelheide", icon: "🎃", hours: "8–18 Uhr", price: "Eintritt nicht ausgewiesen", note: "Steinhagen, ca. 20–25 Min.; gemütlicher Kürbisausflug statt Action.", url: "https://www.hof-ordelheide.de/", description: "Kürbisse entdecken und Herbststimmung auf dem Hof genießen." },
    { name: "LWL-Freilichtmuseum Detmold", icon: "🏡", hours: "9–18 Uhr", price: "12 €", note: "Detmold, ca. 35–40 Min.; draußen unterwegs, zwischendurch historische Häuser besuchen.", url: "https://www.lwl-freilichtmuseum-detmold.de/", description: "Durch ein historisches Dorf spazieren und die Häuser erkunden." },
    { name: "Minigolf am Obersee", icon: "⛳", hours: "Zu den Seekrug-Öffnungszeiten", price: "5,50 €", note: "Direkt in Bielefeld; der Platz ist laut Betreiber ganzjährig geöffnet.", url: "https://seekrug.com/freizeit-sport/", description: "Eine entspannte Minigolf-Partie am Obersee spielen." }
  ]
};

const state = {
  kind: null,
  spinning: false
};

const SPIN_DURATION_MS = 5800;

const choiceButtons = [...document.querySelectorAll(".choice-card")];
const roulettePanel = document.getElementById("roulette-panel");
const reel = document.getElementById("reel");
const spinButton = document.getElementById("spin");
const resultCard = document.getElementById("result");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-desc");
const resultLink = document.getElementById("result-link");
const resultBadge = document.getElementById("result-badge");
const kindLabel = document.getElementById("kind-label");
const indoorActivityList = document.getElementById("indoor-activities");
const outdoorActivityList = document.getElementById("outdoor-activities");
const revealLayer = document.getElementById("reveal-layer");
const revealCard = document.getElementById("reveal-card");
const revealIcon = document.getElementById("reveal-icon");
const revealName = document.getElementById("reveal-name");
const revealDescription = document.getElementById("reveal-description");
const revealLink = document.getElementById("reveal-link");
const revealClose = document.getElementById("reveal-close");

const wait = (milliseconds) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
let audioContext;
let masterVolume;

function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    try {
      audioContext = new AudioContextClass();
      masterVolume = audioContext.createGain();
      masterVolume.gain.value = 0.35;
      masterVolume.connect(audioContext.destination);
    } catch {
      return null;
    }
  }

  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

function playTone(context, time, frequency, duration, volume, type = "sine", endFrequency = frequency) {
  const oscillator = context.createOscillator();
  const envelope = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, time);
  oscillator.frequency.exponentialRampToValueAtTime(endFrequency, time + duration);
  envelope.gain.setValueAtTime(0.0001, time);
  envelope.gain.exponentialRampToValueAtTime(volume, time + 0.008);
  envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  oscillator.connect(envelope);
  envelope.connect(masterVolume);
  oscillator.start(time);
  oscillator.stop(time + duration + 0.01);
}

function trackCardCrossings(context, rouletteWindow) {
  if (!context) return () => {};

  const firstTile = reel.children[0];
  const tilePitch = reel.children[1].offsetLeft - firstTile.offsetLeft;
  const markerX = rouletteWindow.getBoundingClientRect().left + rouletteWindow.clientWidth / 2;
  const crossedIndex = () => {
    const firstCenter = firstTile.getBoundingClientRect().left + firstTile.offsetWidth / 2;
    return Math.floor((markerX - firstCenter) / tilePitch);
  };

  let previousIndex = crossedIndex();
  let previousFrame = performance.now();
  let frameId;

  function followReel() {
    const now = performance.now();
    const currentIndex = crossedIndex();

    if (!document.hidden && now - previousFrame < 200 && currentIndex > previousIndex) {
      for (let index = previousIndex + 1; index <= currentIndex; index += 1) {
        const time = context.currentTime + (index - previousIndex - 1) * 0.012;
        playTone(context, time, index % 2 ? 610 : 720, 0.055, 0.075, "triangle", 390);
      }
    }

    previousIndex = currentIndex;
    previousFrame = now;
    frameId = requestAnimationFrame(followReel);
  }

  frameId = requestAnimationFrame(followReel);
  return () => cancelAnimationFrame(frameId);
}

function playLiftSound() {
  const context = getAudioContext();
  if (!context) return;
  playTone(context, context.currentTime, 220, 0.45, 0.055, "sine", 660);
}

function playRevealSound() {
  const context = getAudioContext();
  if (!context) return;

  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    playTone(context, context.currentTime + index * 0.11, frequency, 0.6, 0.13, "sine");
  });
}

function getCurrentPool() {
  if (state.kind === "outdoor") return activities.outdoor;
  return activities.indoor;
}

function renderActivityList(kind, container) {
  const fragment = document.createDocumentFragment();

  activities[kind].forEach((activity) => {
    const item = document.createElement("article");
    item.className = "activity-item";

    const heading = document.createElement("div");
    heading.className = "activity-item-heading";
    const link = document.createElement("a");
    link.href = activity.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${activity.icon} ${activity.name} ↗`;
    heading.append(link);

    const details = document.createElement("p");
    details.className = "activity-details";
    details.textContent = [activity.hours, activity.price].filter(Boolean).join(" · ");
    const note = document.createElement("p");
    note.className = "activity-note";
    note.textContent = activity.note;
    item.append(heading, details, note);
    fragment.append(item);
  });

  container.replaceChildren(fragment);
}

function renderReel() {
  const pool = getCurrentPool();
  const repeatedItems = [];

  for (let round = 0; round < 10; round += 1) {
    repeatedItems.push(...pool);
  }

  reel.innerHTML = repeatedItems
    .map(() => `<article class="tile"><span class="tile-back">?</span></article>`)
    .join("");

  reel.style.transition = "none";
  reel.style.transform = "translateX(0px)";
}

function selectKind(kind, selectedButton) {
  if (state.spinning) return;

  state.kind = kind;

  choiceButtons.forEach((button) => {
    const active = button === selectedButton;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  roulettePanel.classList.add("ready");
  spinButton.disabled = false;
  kindLabel.textContent = kind === "indoor" ? "Drinnen ausgewählt" : "Draußen ausgewählt";
  resultCard.classList.remove("visible");

  renderReel();
}

function finishSpin(winner) {
  resultName.textContent = `${winner.icon} ${winner.name}`;
  resultDescription.textContent = winner.description;
  resultLink.hidden = !winner.url;
  if (winner.url) resultLink.href = winner.url;
  resultBadge.textContent = "Bielefeld & Umgebung";
  resultCard.classList.add("visible");
}

async function revealWinner(winner, targetTile, reducedMotion) {
  const tileRect = targetTile.getBoundingClientRect();
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const tileX = tileRect.left + tileRect.width / 2;
  const tileY = tileRect.top + tileRect.height / 2;

  revealIcon.textContent = winner.icon;
  revealName.textContent = winner.name;
  revealDescription.textContent = winner.description;
  revealLink.hidden = !winner.url;
  if (winner.url) revealLink.href = winner.url;
  revealClose.disabled = true;
  revealCard.classList.remove("is-flipped");
  revealLayer.classList.remove("is-leaving", "is-active", "is-settled");
  revealCard.style.transform = reducedMotion
    ? "none"
    : `translate(${tileX - centerX}px, ${tileY - centerY}px) scale(${tileRect.width / 270}, ${tileRect.height / 350})`;
  revealLayer.hidden = false;
  revealLayer.setAttribute("aria-hidden", "false");
  if (!reducedMotion) playLiftSound();

  await nextFrame();
  revealLayer.classList.add("is-active");

  if (!reducedMotion) {
    const movement = revealCard.animate(
      [
        { transform: revealCard.style.transform },
        { transform: "translate(0, 0) scale(1)" }
      ],
      { duration: 650, easing: "cubic-bezier(.18,.8,.25,1)", fill: "forwards" }
    );
    await movement.finished;
    revealCard.style.transform = "none";
    movement.cancel();
  } else {
    revealCard.style.transform = "none";
  }

  revealCard.classList.add("is-flipped");
  playRevealSound();
  await wait(reducedMotion ? 30 : 1150);

  targetTile.innerHTML = `<div class="tile-icon" aria-hidden="true">${winner.icon}</div><div class="tile-name">${winner.name}</div>`;
  targetTile.classList.add("winner");
  finishSpin(winner);
  revealClose.disabled = false;
  revealLayer.classList.add("is-settled");
  revealClose.focus();
}

async function closeReveal() {
  if (revealLayer.hidden || !revealLayer.classList.contains("is-settled")) return;

  revealLayer.classList.remove("is-settled");
  revealLayer.classList.add("is-leaving");
  await wait(350);
  revealLayer.hidden = true;
  revealLayer.setAttribute("aria-hidden", "true");
  revealLayer.classList.remove("is-active", "is-leaving");
  spinButton.disabled = false;
  state.spinning = false;
  spinButton.focus();
}

async function spinRoulette() {
  if (!state.kind || state.spinning) return;

  state.spinning = true;
  spinButton.disabled = true;
  resultCard.classList.remove("visible");
  renderReel();
  const context = getAudioContext();

  await nextFrame();
  await nextFrame();

  const pool = getCurrentPool();
  const winnerIndex = Math.floor(Math.random() * pool.length);
  const winner = pool[winnerIndex];

  const tiles = [...reel.children];
  const targetRound = 7;
  const targetIndex = targetRound * pool.length + winnerIndex;
  const targetTile = tiles[targetIndex];

  const rouletteWindow = document.querySelector(".roulette-window");
  const windowWidth = rouletteWindow.clientWidth;
  const targetCenter = targetTile.offsetLeft + targetTile.offsetWidth / 2;
  const finalOffset = targetCenter - windowWidth / 2;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  reel.style.transition = prefersReducedMotion
    ? "none"
    : `transform ${SPIN_DURATION_MS}ms cubic-bezier(.08,.68,.12,1)`;

  const stopCardSounds = prefersReducedMotion
    ? () => {}
    : trackCardCrossings(context, rouletteWindow);
  reel.style.transform = `translateX(${-finalOffset}px)`;

  await wait(prefersReducedMotion ? 80 : SPIN_DURATION_MS + 100);
  stopCardSounds();
  await revealWinner(winner, targetTile, prefersReducedMotion);
}

choiceButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => selectKind(button.dataset.kind, button));
});

spinButton.addEventListener("click", spinRoulette);
revealClose.addEventListener("click", closeReveal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !revealLayer.hidden) closeReveal();
});

renderActivityList("indoor", indoorActivityList);
renderActivityList("outdoor", outdoorActivityList);
renderReel();
