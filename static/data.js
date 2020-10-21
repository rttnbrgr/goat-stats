export const playerMike = {
  id: 0,
  name: "Mike",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jordami01.jpg",
  stats: [
    { name: "Pts", value: 30.1 },
    { name: "Reb", value: 6.2 },
    { name: "Ast", value: 5.3 },
  ],
};

export const playerKobe = {
  id: 1,
  name: "Kobe",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/bryanko01.jpg",

  stats: [
    { name: "Pts", value: 25.0 },
    { name: "Reb", value: 5.2 },
    { name: "Ast", value: 4.7 },
  ],
};

export const playerBron = {
  id: 2,
  name: "Bron",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jamesle01.jpg",
  stats: [
    { name: "Pts", value: 27.1 },
    { name: "Reb", value: 7.4 },
    { name: "Ast", value: 7.4 },
  ],
};

const players = [playerMike, playerKobe, playerBron];

export default players;
