const names = [
  "Laura",
  "Juan",
  "Lukas",
  "Rick",
  "Morty",
  "David",
  "Stasis",
  "Apollo",
  "Roxy",
];

export const pickRandomNames = () => {
  const randomIndex = Math.floor(Math.random() * (names.length - 0)) + 0;
  return names[randomIndex];
};
