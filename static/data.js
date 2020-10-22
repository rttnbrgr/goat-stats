export const statisticMaster = [
  { id: "STAT-PTS", name: "PTS", visible: true },
  { id: "STAT-AST", name: "AST", visible: true },
  { id: "STAT-REB", name: "REB", visible: true },
  { id: "STAT-4", name: "Stat 4", visible: true },
  { id: "STAT-5", name: "Stat 5", visible: true },
  { id: "STAT-6", name: "Stat 6", visible: true },
  { id: "STAT-7", name: "Stat 7", visible: true },
  { id: "STAT-8", name: "Stat 8", visible: true },
  { id: "STAT-9", name: "Stat 9", visible: true },
];

export const playerMike = {
  id: 0,
  name: "Mike",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jordami01.jpg",
  stats: [
    { name: "foo", id: "STAT-PTS", value: 30.1 },
    { name: "foo", id: "STAT-AST", value: 6.2 },
    { name: "foo", id: "STAT-REB", value: 5.3 },
    { name: "foo", id: "STAT-4", value: 0.0 },
    { name: "foo", id: "STAT-5", value: 0.0 },
    { name: "foo", id: "STAT-6", value: 0.0 },
    { name: "foo", id: "STAT-7", value: 0.0 },
    { name: "foo", id: "STAT-8", value: 0.0 },
    { name: "foo", id: "STAT-9", value: 0.0 },
  ],
};

export const playerKobe = {
  id: 1,
  name: "Kobe",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/bryanko01.jpg",

  stats: [
    { name: "foo", id: "STAT-PTS", value: 25.0 },
    { name: "foo", id: "STAT-AST", value: 5.2 },
    { name: "foo", id: "STAT-REB", value: 4.7 },
    { name: "foo", id: "STAT-4", value: 0.0 },
    { name: "foo", id: "STAT-5", value: 0.0 },
    { name: "foo", id: "STAT-6", value: 0.0 },
    { name: "foo", id: "STAT-7", value: 0.0 },
    { name: "foo", id: "STAT-8", value: 0.0 },
    { name: "foo", id: "STAT-9", value: 0.0 },
  ],
};

export const playerBron = {
  id: 2,
  name: "Bron",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jamesle01.jpg",
  stats: [
    { name: "foo", id: "STAT-PTS", value: 27.1 },
    { name: "foo", id: "STAT-AST", value: 7.4 },
    { name: "foo", id: "STAT-REB", value: 7.4 },
    { name: "foo", id: "STAT-4", value: 0.0 },
    { name: "foo", id: "STAT-5", value: 0.0 },
    { name: "foo", id: "STAT-6", value: 0.0 },
    { name: "foo", id: "STAT-7", value: 0.0 },
    { name: "foo", id: "STAT-8", value: 0.0 },
    { name: "foo", id: "STAT-9", value: 0.0 },
  ],
};

const players = [playerMike, playerKobe, playerBron];

export default players;
