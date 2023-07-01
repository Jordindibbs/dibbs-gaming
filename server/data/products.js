const products = [
  {
    _id: "1",
    name: "Brass: Birmingham",
    image:
      "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepagezoom/img/7a0LOL48K-7JNIOSGtcsNsIxkN0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3490053.jpg",
    description:
      "Brass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.",
    year: 2018,
    category: "Economic",
    price: 79.99,
    countInStock: 16,
    rating: 8.4,
    numReviews: 38936,
  },
  {
    _id: "2",
    name: "Pandemic Legacy: Season 1",
    image:
      "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__imagepage/img/qZybAu8uJ9_sZlU2A65DIF6Y2Zw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2452831.png",
    description:
      "Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand.",
    year: 2015,
    category: "Enviromental",
    price: 79.99,
    countInStock: 20,
    rating: 8.3,
    numReviews: 50760,
  },
  {
    _id: "3",
    name: "Gloomhaven",
    image:
      "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepagezoom/img/tzd7s5trxMU7W01HxXd4PPSwEfM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2437871.jpg",
    description:
      "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.",
    year: 2017,
    category: "Adventure",
    price: 165.0,
    countInStock: 20,
    rating: 8.3,
    numReviews: 58620,
  },
  {
    _id: "4",
    name: "Ark Nova",
    image:
      "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__imagepagezoom/img/3AiTYsFmreOKB3V2xTmolY1JiOo=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6293412.jpg",
    description:
      "In Ark Nova, you will plan and design a modern, scientifically managed zoo. With the ultimate goal of owning the most successful zoological establishment, you will build enclosures, accommodate animals, and support conservation projects all over the world. Specialists and unique buildings will help you in achieving this goal.",
    year: 2021,
    category: "Economic",
    price: 31.44,
    countInStock: 20,
    rating: 8.3,
    numReviews: 31644,
  },
  {
    _id: "5",
    name: "Twilight Imperium: Fourth Edition",
    image:
      "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__imagepagezoom/img/XukF6G6yGYG06y-ODGk7usmxZ-U=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3727516.jpg",
    description:
      "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.",
    year: 2017,
    category: "Civilization",
    price: 164.99,
    countInStock: 20,
    rating: 8.2,
    numReviews: 21030,
  },
  {
    _id: "6",
    name: "Terraforming Mars",
    image:
      "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg",
    description:
      "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.",
    year: 2016,
    category: "Economic",
    price: 69.95,
    countInStock: 20,
    rating: 8.2,
    numReviews: 90441,
  },
  {
    _id: "7",
    name: "Gloomhaven: Jaws of the Lion",
    image:
      "https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__imagepagezoom/img/BnpSrhl1Xcn5dJIo0d-1kNOf_jE=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5055631.jpg",
    description:
      "Gloomhaven: Jaws of the Lion is a standalone game that takes place before the events of Gloomhaven. The game includes four new characters — Valrath Red Guard (tank, crowd control), Inox Hatchet (ranged damage), Human Voidwarden (support, mind-control), and Quatryl Demolitionist (melee damage, obstacle manipulation) — that can also be used in the original Gloomhaven game.",
    year: 2020,
    category: "Adventure",
    price: 49.99,
    countInStock: 20,
    rating: 8.2,
    numReviews: 29194,
  },
  {
    _id: "8",
    name: "Dune: Imperium",
    image:
      "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepagezoom/img/iJVF13_ajmH4G8Ku7RQetoRQHUU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5666597.jpg",
    description:
      "Dune: Imperium is a game that finds inspiration in elements and characters from the Dune legacy, both the new film from Legendary Pictures and the seminal literary series from Frank Herbert, Brian Herbert, and Kevin J. Anderson. As a leader of one of the Great Houses of the Landsraad, raise your banner and marshal your forces and spies. War is coming, and at the center of the conflict is Arrakis – Dune, the desert planet.",
    year: 2020,
    category: "Deck-building",
    price: 47.99,
    countInStock: 20,
    rating: 8.1,
    numReviews: 35094,
  },
  {
    _id: "9",
    name: "War of the Ring: Second Edition",
    image:
      "https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__imagepagezoom/img/1pFa7snI0RdKNxFzmoG8iOUWbo4=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic1215633.jpg",
    description:
      "In War of the Ring, one player takes control of the Free Peoples (FP), the other player controls Shadow Armies (SA). Initially, the Free People Nations are reluctant to take arms against Sauron, so they must be attacked by Sauron or persuaded by Gandalf or other Companions, before they start to fight properly: this is represented by the Political Track, which shows if a Nation is ready to fight in the War of the Ring or not.",
    year: 2011,
    category: "Adventure",
    price: 89.99,
    countInStock: 20,
    rating: 8.1,
    numReviews: 19233,
  },
  {
    _id: "10",
    name: "Star Wars: Rebellion",
    image:
      "https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__imagepagezoom/img/cvaTGqGnEhAvZ2tYnlu2IOp6fP0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4325841.jpg",
    description:
      "Star Wars: Rebellion is a board game of epic conflict between the Galactic Empire and Rebel Alliance for two to four players. Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and you'll need to adjust your play style depending on who you represent.",
    year: 2016,
    category: "War",
    price: 89.99,
    countInStock: 20,
    rating: 8.1,
    numReviews: 30073,
  },
  {
    _id: "11",
    name: "Spirit Island",
    image:
      "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__imagepagezoom/img/XMJcthqDMCK1NQl04WW33U2Zy5c=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic7013651.jpg",
    description:
      "Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers. Every turn, players simultaneously choose which of their power cards to play, paying energy to do so. Using combinations of power cards that match a spirit's elemental affinities can grant free bonus effects. Faster powers take effect immediately, before the Invaders spread and ravage, but other magics are slower, requiring forethought and planning to use effectively. In the Spirit phase, spirits gain energy, and choose how / whether to Grow: to reclaim used power cards, to seek for new power, or to spread presence into new areas of the island.",
    year: 2017,
    category: "Territory Building",
    price: 89.99,
    countInStock: 20,
    rating: 8.1,
    numReviews: 44635,
  },
  {
    _id: "12",
    name: "Gaia Project",
    image:
      "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__imagepagezoom/img/lhc5bvymQDapD8MckZaFU5SkQQ0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5375625.png",
    description:
      "Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. In addition, Gaia planets can be used by all factions for colonization, and Transdimensional planets can be changed into Gaia planets.",
    year: 2017,
    category: "Civilization",
    price: 99.95,
    countInStock: 20,
    rating: 8.1,
    numReviews: 24690,
  },
  {
    _id: "13",
    name: "Through the Ages: A New Story of Civilization",
    image:
      "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__imagepagezoom/img/t3eAk2lBOUS8VdEEHtXaDn3qbOk=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2663291.jpg",
    description:
      "Through the Ages: A New Story of Civilization is the new edition of Through the Ages: A Story of Civilization, with many changes small and large to the game's cards over its three ages and extensive changes to how military works. Through the Ages is a civilization building game. Each player attempts to build the best civilization through careful resource management, discovering new technologies, electing the right leaders, building wonders and maintaining a strong military. Weakness in any area can be exploited by your opponents. The game takes place throughout the ages beginning in the age of antiquity and ending in the modern age.",
    year: 2015,
    category: "Civilization",
    price: 43.95,
    countInStock: 20,
    rating: 8,
    numReviews: 29720,
  },
  {
    _id: "14",
    name: "Twilight Struggle",
    image:
      "https://cf.geekdo-images.com/pNCiUUphnoeWOYfsWq0kng__imagepagezoom/img/WNIKo8BdPon4vsBwnlrRE_ooFfc=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3530661.jpg",
    description:
      "Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower. As with GMT's other card-driven games, decision-making is a challenge; how to best use one's cards and units given consistently limited resources?",
    year: 2005,
    category: "Political",
    price: 64.99,
    countInStock: 20,
    rating: 8,
    numReviews: 46760,
  },
  {
    _id: "15",
    name: "Great Western Trail",
    image:
      "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__imagepagezoom/img/cJyIiNTccBaE7UjYIsP2c-nkssE=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4887376.jpg",
    description:
      "America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the Great Western Trail not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line. If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game.",
    year: 2016,
    category: "Economic",
    price: 69.95,
    countInStock: 20,
    rating: 8,
    numReviews: 38608,
  },
  {
    _id: "16",
    name: "Scythe ",
    image:
      "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepagezoom/img/0dn7QcDY2l5ljFXv6OYk46irzZg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3163924.jpg",
    description:
      "Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their faction's stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs.",
    year: 2016,
    category: "Economic",
    price: 79.99,
    countInStock: 20,
    rating: 8,
    numReviews: 77081,
  },
  {
    _id: "17",
    name: "The Castles of Burgundy",
    image:
      "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__imagepage/img/hGdIQZbCqxvEyQ5s8ETrmypyIlA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1176894.jpg",
    description:
      "The game is set in the Burgundy region of High Medieval France. Each player takes on the role of an aristocrat, originally controlling a small princedom. While playing they aim to build settlements and powerful castles, practice trade along the river, exploit silver mines, and use the knowledge of travelers. The game is about players taking settlement tiles from the game board and placing them into their princedom which is represented by the player board. Every tile has a function that starts when the tile is placed in the princedom. The princedom itself consists of several regions, each of which demands its own type of settlement tile.",
    year: 2011,
    category: "Territory Building",
    price: 49.99,
    countInStock: 20,
    rating: 8,
    numReviews: 58052,
  },
  {
    _id: "18",
    name: "7 Wonders Duel",
    image:
      "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__imagepagezoom/img/hqfSL-b3mF1jzj3KKYadPyASCuM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2576399.jpg",
    description:
      "In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders. What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.",
    year: 2015,
    category: "Civilization",
    price: 29.99,
    countInStock: 20,
    rating: 7.9,
    numReviews: 85495,
  },
  {
    _id: "19",
    name: "Nemesis",
    image:
      "https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__imagepagezoom/img/EdbcoIjK0fbLtbvadXuMATf7ubA=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5073276.jpg",
    description:
      "Playing Nemesis will take you into the heart of sci-fi survival horror in all its terror. A soldier fires blindly down a corridor, trying to stop the alien advance. A scientist races to find a solution in his makeshift lab. A traitor steals the last escape pod in the very last moment. Intruders you meet on the ship are not only reacting to the noise you make but also evolve as the time goes by. The longer the game takes, the stronger they become. During the game, you control one of the crew members with a unique set of skills, personal deck of cards, and individual starting equipment. These heroes cover all your basic SF horror needs. For example, the scientist is great with computers and research, but will have a hard time in combat. The soldier, on the other hand...",
    year: 2018,
    category: "Adventure",
    price: 149.99,
    countInStock: 20,
    rating: 7.9,
    numReviews: 26556,
  },
  {
    _id: "20",
    name: "Brass: Lancashire",
    image:
      "https://cf.geekdo-images.com/tHVtPzu82mBpeQbbZkV6EA__imagepagezoom/img/48ahzluGaNs12es1gL6XgGccVYc=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3469216.jpg",
    description:
      "Brass: Lancashire — first published as Brass — is an economic strategy game that tells the story of competing cotton entrepreneurs in Lancashire during the industrial revolution. You must develop, build, and establish your industries and network so that you can capitalize demand for iron, coal and cotton. The game is played over two halves: the canal phase and the rail phase. To win the game, score the most victory points (VPs), which are counted at the end of each half. VPs are gained from your canals, rails, and established (flipped) industry tiles.",
    year: 2007,
    category: "Economic",
    price: 69.3,
    countInStock: 20,
    rating: 7.9,
    numReviews: 23580,
  },
  {
    _id: "21",
    name: "Eclipse: Second Dawn for the Galaxy",
    image:
      "https://cf.geekdo-images.com/Oh3kHw6lweg6ru71Q16h2Q__imagepagezoom/img/f5DzGiV--191s8QNZMqB0j-DQyU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5235277.jpg",
    description:
      "A game of Eclipse places you in control of a vast interstellar civilization, competing for success with its rivals. You explore new star systems, research technologies, and build spaceships with which to wage war. There are many potential paths to victory, so you need to plan your strategy according to the strengths and weaknesses of your species, while paying attention to the other civilizations' endeavors.",
    year: 2020,
    category: "Civilization",
    price: 142.02,
    countInStock: 20,
    rating: 7.9,
    numReviews: 10867,
  },
  {
    _id: "22",
    name: "Concordia",
    image:
      "https://cf.geekdo-images.com/CzwSm8i7tkLz6cBnrILZBg__imagepagezoom/img/g3w_7AtYcrpbY1d3V4iKdcAz_Ts=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3453267.jpg",
    description:
      "Concordia is a peaceful strategy game of economic development in Roman times for 2-5 players aged 13 and up. Instead of looking to the luck of dice or cards, players must rely on their strategic abilities. Be sure to watch your rivals to determine which goals they are pursuing and where you can outpace them! In the game, colonists are sent out from Rome to settle down in cities that produce bricks, food, tools, wine, and cloth. Each player starts with an identical set of playing cards and acquires more cards during the game. ",
    year: 2013,
    category: "Economic",
    price: 64.99,
    countInStock: 20,
    rating: 7.9,
    numReviews: 37562,
  },
  {
    _id: "23",
    name: "A Feast for Odin",
    image:
      "https://cf.geekdo-images.com/s9oGMCo1fcfV4Dk3EnqLZw__imagepagezoom/img/0ud6d1m1P8vnNEA3_SRditMKinw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3146943.png",
    description:
      "A Feast for Odin is a saga in the form of a board game. You are reliving the cultural achievements, mercantile expeditions, and pillages of those tribes we know as Viking today — a term that was used quite differently towards the end of the first millennium. In this game, you will raid and explore new territories. You will also experience their day-to-day activities: collecting goods to achieve a financially secure position in society. In the end, the player whose possessions bear the greatest value will be declared the winner.",
    year: 2016,
    category: "Economic",
    price: 95.98,
    countInStock: 20,
    rating: 7.9,
    numReviews: 25619,
  },
  {
    _id: "24",
    name: "Clank!: Legacy Acquisitions Incorporated",
    image:
      "https://cf.geekdo-images.com/hc2NDafu5c24iLJh_IZmyg__imagepagezoom/img/oVz6aIKXwzfivFKUIjgRf8814RY=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4885780.png",
    description:
      "Clank! Legacy: Acquisitions Incorporated extends the deck-building fun of Clank! with legacy-style gameplay! Found your own franchise of the legendary adventuring company Acquisitions Incorporated, and shepherd your fledgling treasure-hunters to immortal corporate glory over the course of multiple games. Your game board, your deck, and your world change as you play to create a unique campaign tailored to your adventuring party. Be cunning, be bold, and most importantly be ready...",
    year: 2019,
    category: "Deck-Building",
    price: 94.0,
    countInStock: 20,
    rating: 7.9,
    numReviews: 8143,
  },
  {
    _id: "25",
    name: "Wingspan",
    image:
      "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepagezoom/img/yS4vL6iTCvHSvGySxyOjV_-R3dI=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4458123.jpg",
    description:
      "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez. You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). ",
    year: 2019,
    category: "Deck-Building",
    price: 47.58,
    countInStock: 20,
    rating: 7.9,
    numReviews: 80305,
  },
];

export default products;
