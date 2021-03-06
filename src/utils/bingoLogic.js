// TODO: check for a Bingo in relation to n (which is the size of the grid n*n)

const grid = [
  { de: "Fahrrad", en: "bike", flipped: false },
  { de: "Bus", en: "bus", flipped: false },
  { de: "Auto", en: "car", flipped: false },
  { de: "Flugzeug", en: "plane", flipped: false },
  { de: "Zug", en: "train", flipped: true },
  { de: "Motarrad", en: "motorbike", flipped: false },
  { de: "Strasse", en: "street", flipped: true },
  { de: "Ampel", en: "trafficlight", flipped: true },
  { de: "Mama braucht Kaffee", en: "coffeeshop", flipped: true },
];

export function win(grid) {
  console.log("GRID: ", grid);
  console.log("GRID.length: ", grid.length);
  const n = Math.sqrt(grid.length);
  console.log("n = ", n);
  let allBingos = [];

  if (n === 0) return;

  // /* Horizonal */
  for (let i = 0; i <= (n - 1) * n; i += n) {
    if (!grid.slice(i, n + i).find((element) => !element.flipped)) {
      // index of first horizontal element which causes bingo!
      allBingos.push({ orientation: "horizontal", index: i });
    }
  }

  // // 0, 3, 6
  // // 1, 4, 7
  // // 2, 5, 8
  // /* Vertical */
  for (let a = 0; a < n; a++) {
    // vertical
    let verticalArray = [];
    for (let b = a; b <= 2 * n + a; b = b + n) {
      // horizontal
      verticalArray.push(grid[b]);
    }
    if (!verticalArray.find((element) => !element.flipped)) {
      // index of first vertical element which causes bingo!
      allBingos.push({ orientation: "vertical", index: a });
    }
  }

  // // Diagonal left obove, right down
  // //0, n+1, 2*n+2, 3*n+3, ..., (n-1)*n+n  n*n - n + n

  let diagonalArrayLR = [];
  for (let d1 = 0; d1 < n; d1++) {
    diagonalArrayLR.push(grid[d1 * n + d1]);
  }

  if (!diagonalArrayLR.find((element) => !element.flipped)) {
    allBingos.push({ orientation: "LR", index: null });
  }

  // // 2, 4, 6,  (3)  1n-1, 2n -2, 3n -3
  // // 3, 6, 9, 12  (4)
  let diagonalArrayRL = [];
  for (let d2 = 1; d2 <= n; d2++) {
    diagonalArrayRL.push(grid[d2 * n - d2]);
  }

  if (!diagonalArrayRL.find((element) => !element.flipped)) {
    // return { orientation: "RL", index: null };
    allBingos.push({ orientation: "RL", index: null });
  }

  return allBingos;
}
// console.log("Bingo Found Here: ", win(grid));
