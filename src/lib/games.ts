export interface Game {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  controls: string;
  thumbnail: string;
  embedPath: string;
  aspectRatio: string;
}

const GAMES: Game[] = [
  // ===== Puzzle (8) =====
  {
    slug: "2048",
    title: "2048",
    description:
      "Combine numbered tiles to reach 2048 in this addictive number puzzle game. Slide tiles, merge matches, and keep going for the highest score.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Arrow keys or swipe to move tiles",
    thumbnail: "/thumbnails/2048.png",
    embedPath: "/games/2048/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "jigsaw-puzzle",
    title: "Jigsaw Puzzle",
    description:
      "Piece together beautiful images in this classic jigsaw puzzle game. Drag and drop pieces into place and complete the picture.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Click and drag pieces to move them",
    thumbnail: "/thumbnails/jigsaw-puzzle.png",
    embedPath: "/games/jigsaw-puzzle/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "klotski",
    title: "Klotski",
    description:
      "Slide the blocks to free the red piece in this ancient Chinese puzzle. Plan your moves carefully — it's trickier than it looks.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Click a block to slide it into the empty space",
    thumbnail: "/thumbnails/klotski.png",
    embedPath: "/games/klotski/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "maze-escape",
    title: "Maze Escape",
    description:
      "Find your way out of increasingly complex mazes. Navigate twists and turns to reach the exit as fast as you can.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Arrow keys to move through the maze",
    thumbnail: "/thumbnails/maze-escape.png",
    embedPath: "/games/maze-escape/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    description:
      "The classic logic puzzle — clear the minefield without detonating any bombs. Use number clues to flag every hidden mine.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Click to reveal, right-click to flag mines",
    thumbnail: "/thumbnails/minesweeper.png",
    embedPath: "/games/minesweeper/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "spot-difference",
    title: "Spot the Difference",
    description:
      "Compare two images side by side and find all the subtle differences before time runs out. Great for sharpening observation skills.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Click on the differences you spot",
    thumbnail: "/thumbnails/spot-difference.png",
    embedPath: "/games/spot-difference/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "sudoku",
    title: "Sudoku",
    description:
      "Fill the 9×9 grid so each row, column, and 3×3 box contains digits 1–9. The world's most popular number puzzle.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Click a cell and type a number 1–9",
    thumbnail: "/thumbnails/sudoku.png",
    embedPath: "/games/sudoku/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "tilting-maze",
    title: "Tilting Maze",
    description:
      "Tilt the board to roll the ball through the maze. Avoid the holes and reach the goal in this physics-based puzzle.",
    category: "puzzle",
    categoryLabel: "Puzzle",
    controls: "Arrow keys or tilt your device to roll the ball",
    thumbnail: "/thumbnails/tilting-maze.png",
    embedPath: "/games/tilting-maze/index.html",
    aspectRatio: "1/1",
  },

  // ===== Action (11) =====
  {
    slug: "archery",
    title: "Archery",
    description:
      "Test your aim in this archery challenge. Adjust for wind and distance, then release to hit the bullseye.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click and drag to aim, release to shoot",
    thumbnail: "/thumbnails/archery.png",
    embedPath: "/games/archery/index.html",
    aspectRatio: "16/9",
  },
  {
    slug: "breakout",
    title: "Breakout",
    description:
      "Bounce the ball to smash every brick on the screen. A timeless arcade classic — don't let the ball fall past your paddle.",
    category: "action",
    categoryLabel: "Action",
    controls: "Arrow keys or mouse to move the paddle",
    thumbnail: "/thumbnails/breakout.png",
    embedPath: "/games/breakout/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "crossy-road",
    title: "Crossy Road",
    description:
      "Cross roads, rivers, and train tracks without getting hit. How far can you go in this endless arcade runner?",
    category: "action",
    categoryLabel: "Action",
    controls: "Arrow keys or swipe to hop forward and sideways",
    thumbnail: "/thumbnails/crossy-road.png",
    embedPath: "/games/crossy-road/index.html",
    aspectRatio: "16/9",
  },
  {
    slug: "emoji-catcher",
    title: "Emoji Catcher",
    description:
      "Catch falling emojis in your basket before they hit the ground. Quick reflexes and a steady hand win the day.",
    category: "action",
    categoryLabel: "Action",
    controls: "Arrow keys or touch to move the basket",
    thumbnail: "/thumbnails/emoji-catcher.png",
    embedPath: "/games/emoji-catcher/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "flappy-bird",
    title: "Flappy Bird",
    description:
      "Tap to flap and navigate through the pipes. The deceptively simple game that took the world by storm — how many pipes can you clear?",
    category: "action",
    categoryLabel: "Action",
    controls: "Space bar, click, or tap to flap",
    thumbnail: "/thumbnails/flappy-bird.png",
    embedPath: "/games/flappy-bird/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "fruit-slicer",
    title: "Fruit Slicer",
    description:
      "Swipe to slice flying fruit while avoiding the bombs. Fast, juicy, and satisfying — a true Fruit Ninja-style experience.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click and drag or swipe to slice fruit",
    thumbnail: "/thumbnails/fruit-slicer.png",
    embedPath: "/games/fruit-slicer/index.html",
    aspectRatio: "16/9",
  },
  {
    slug: "insect-catch",
    title: "Insect Catch",
    description:
      "Click on the scurrying insects before they escape. Speed and accuracy are key in this bug-hunting reaction game.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click or tap on insects to catch them",
    thumbnail: "/thumbnails/insect-catch.png",
    embedPath: "/games/insect-catch/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "piano-tiles",
    title: "Piano Tiles",
    description:
      "Tap the black tiles as they scroll down — but never touch the white ones. A rhythm-based reflex test set to music.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click or tap the black tiles only",
    thumbnail: "/thumbnails/piano-tiles.png",
    embedPath: "/games/piano-tiles/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "ping-pong",
    title: "Ping Pong",
    description:
      "Classic two-player Pong — or play against the computer. Bounce the ball past your opponent to score.",
    category: "action",
    categoryLabel: "Action",
    controls: "W/S or Arrow Up/Down to move your paddle",
    thumbnail: "/thumbnails/ping-pong.png",
    embedPath: "/games/ping-pong/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "shape-clicker",
    title: "Shape Clicker",
    description:
      "Click the target shapes as fast as you can. A rapid-fire reaction game that tests your hand-eye coordination.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click or tap on shapes as they appear",
    thumbnail: "/thumbnails/shape-clicker.png",
    embedPath: "/games/shape-clicker/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "whack-a-mole",
    title: "Whack-a-Mole",
    description:
      "Moles pop up — whack them before they hide again. The classic carnival game, now in your browser.",
    category: "action",
    categoryLabel: "Action",
    controls: "Click or tap moles as they pop up",
    thumbnail: "/thumbnails/whack-a-mole.png",
    embedPath: "/games/whack-a-mole/index.html",
    aspectRatio: "1/1",
  },

  // ===== Arcade (8) =====
  {
    slug: "bubble-shooter",
    title: "Bubble Shooter",
    description:
      "Aim, shoot, and match three or more bubbles of the same color to clear the board. Don't let the bubbles reach the bottom.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Mouse or touch to aim, click to shoot",
    thumbnail: "/thumbnails/bubble-shooter.png",
    embedPath: "/games/bubble-shooter/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "candy-crush",
    title: "Candy Crush",
    description:
      "Swap colorful candies to match three in a row. Clear levels, earn combos, and satisfy your sweet tooth.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Click two adjacent candies to swap them",
    thumbnail: "/thumbnails/candy-crush.png",
    embedPath: "/games/candy-crush/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "jump-game",
    title: "Jump Game",
    description:
      "Jump from platform to platform, climbing ever higher. Time your jumps perfectly — one slip and you fall.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Click, tap, or press space to jump",
    thumbnail: "/thumbnails/jump-game.png",
    embedPath: "/games/jump-game/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "pac-man",
    title: "Pac-Man",
    description:
      "The legendary arcade icon — gobble dots, dodge ghosts, and grab power pellets to turn the tables. Waka waka!",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Arrow keys to move Pac-Man",
    thumbnail: "/thumbnails/pac-man.png",
    embedPath: "/games/pac-man/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "snake",
    title: "Snake",
    description:
      "Guide the snake to eat food and grow longer — but don't hit the walls or yourself. Three difficulty levels, infinite replayability.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Arrow keys to steer, P to pause",
    thumbnail: "/thumbnails/snake.png",
    embedPath: "/games/snake/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "space-invaders",
    title: "Space Invaders",
    description:
      "Defend Earth from waves of descending aliens. Shoot them down before they reach your base in this retro arcade shooter.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Arrow keys to move, space to shoot",
    thumbnail: "/thumbnails/space-invaders.png",
    embedPath: "/games/space-invaders/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "tetris",
    title: "Tetris",
    description:
      "Rotate and drop falling blocks to complete solid rows. The perfect puzzle — simple rules, endless depth, iconic soundtrack.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Arrow keys to move and rotate, space to hard drop",
    thumbnail: "/thumbnails/tetris.png",
    embedPath: "/games/tetris/index.html",
    aspectRatio: "9/16",
  },
  {
    slug: "tower-blocks",
    title: "Tower Blocks",
    description:
      "Stack blocks as high as you can. Align each new block perfectly — overhanging pieces get sliced off, making the stack narrower.",
    category: "arcade",
    categoryLabel: "Arcade",
    controls: "Click or tap to drop the block",
    thumbnail: "/thumbnails/tower-blocks.png",
    embedPath: "/games/tower-blocks/index.html",
    aspectRatio: "9/16",
  },

  // ===== Board (3) =====
  {
    slug: "gomoku",
    title: "Gomoku",
    description:
      "The classic five-in-a-row strategy game. Place your stones and connect five before your opponent does — play against a friend or the AI.",
    category: "board",
    categoryLabel: "Board",
    controls: "Click on the board to place a stone",
    thumbnail: "/thumbnails/gomoku.png",
    embedPath: "/games/gomoku/index.html",
    aspectRatio: "1/1",
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description:
      "The ultimate hand-game showdown. Pick rock, paper, or scissors and see if you can outsmart the computer in a best-of-series match.",
    category: "board",
    categoryLabel: "Board",
    controls: "Click your choice — rock, paper, or scissors",
    thumbnail: "/thumbnails/rock-paper-scissors.png",
    embedPath: "/games/rock-paper-scissors/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "The timeless X-and-O game. Play against the computer or challenge a friend on the same screen.",
    category: "board",
    categoryLabel: "Board",
    controls: "Click an empty square to place your mark",
    thumbnail: "/thumbnails/tic-tac-toe.png",
    embedPath: "/games/tic-tac-toe/index.html",
    aspectRatio: "1/1",
  },

  // ===== Memory (4) =====
  {
    slug: "color-match",
    title: "Color Match",
    description:
      "Memorize and reproduce color sequences. Each round adds a new color — how long a sequence can you remember?",
    category: "memory",
    categoryLabel: "Memory",
    controls: "Click the colors in the correct order",
    thumbnail: "/thumbnails/color-match.png",
    embedPath: "/games/color-match/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "match-pairs",
    title: "Match Pairs",
    description:
      "Flip cards to find matching pairs. Clear the board in as few moves as possible — concentration and memory are your best tools.",
    category: "memory",
    categoryLabel: "Memory",
    controls: "Click cards to flip them",
    thumbnail: "/thumbnails/match-pairs.png",
    embedPath: "/games/match-pairs/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "memory-card",
    title: "Memory Card",
    description:
      "Flip and match pairs of cards in this classic memory game. Multiple difficulty levels — the more cards, the harder it gets.",
    category: "memory",
    categoryLabel: "Memory",
    controls: "Click cards to flip and reveal them",
    thumbnail: "/thumbnails/memory-card.png",
    embedPath: "/games/memory-card/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "simon-says",
    title: "Simon Says",
    description:
      "Watch the pattern, then repeat it. Each round adds one more step to the sequence — how far can your memory take you?",
    category: "memory",
    categoryLabel: "Memory",
    controls: "Click the colored buttons in sequence",
    thumbnail: "/thumbnails/simon-says.png",
    embedPath: "/games/simon-says/index.html",
    aspectRatio: "4/3",
  },

  // ===== Typing (4) =====
  {
    slug: "hangman",
    title: "Hangman",
    description:
      "Guess the hidden word one letter at a time before the hangman is fully drawn. A classic word game that builds vocabulary.",
    category: "typing",
    categoryLabel: "Typing",
    controls: "Type letters on your keyboard to guess",
    thumbnail: "/thumbnails/hangman.png",
    embedPath: "/games/hangman/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "speed-typing",
    title: "Speed Typing",
    description:
      "Type the displayed text as fast and accurately as you can. Race against the clock and improve your WPM score.",
    category: "typing",
    categoryLabel: "Typing",
    controls: "Type the text shown on screen",
    thumbnail: "/thumbnails/speed-typing.png",
    embedPath: "/games/speed-typing/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "type-master",
    title: "Type Master",
    description:
      "Master the keyboard with typing exercises that get progressively harder. Build speed, accuracy, and confidence.",
    category: "typing",
    categoryLabel: "Typing",
    controls: "Type the words as they appear",
    thumbnail: "/thumbnails/type-master.png",
    embedPath: "/games/type-master/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "typing-speed-challenge",
    title: "Typing Speed Challenge",
    description:
      "Push your typing speed to the limit. Random words appear — type them correctly before they stack up and overflow.",
    category: "typing",
    categoryLabel: "Typing",
    controls: "Type the falling words before they reach the bottom",
    thumbnail: "/thumbnails/typing-speed-challenge.png",
    embedPath: "/games/typing-speed-challenge/index.html",
    aspectRatio: "4/3",
  },

  // ===== Casual (4) =====
  {
    slug: "dice-roll-simulator",
    title: "Dice Roll Simulator",
    description:
      "Roll virtual dice for board games, tabletop RPGs, or just for fun. Customize the number of dice and sides.",
    category: "casual",
    categoryLabel: "Casual",
    controls: "Click to roll the dice",
    thumbnail: "/thumbnails/dice-roll-simulator.png",
    embedPath: "/games/dice-roll-simulator/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "quiz",
    title: "Quiz",
    description:
      "Test your knowledge with trivia questions across multiple categories. Answer fast for a higher score.",
    category: "casual",
    categoryLabel: "Casual",
    controls: "Click the correct answer from the options",
    thumbnail: "/thumbnails/quiz.png",
    embedPath: "/games/quiz/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "speak-number-guessing",
    title: "Speak Number Guessing",
    description:
      "Think of a number and the game guesses it using voice prompts. A fun twist on the classic number guessing game.",
    category: "casual",
    categoryLabel: "Casual",
    controls: "Click to respond and follow the voice prompts",
    thumbnail: "/thumbnails/speak-number-guessing.png",
    embedPath: "/games/speak-number-guessing/index.html",
    aspectRatio: "4/3",
  },
  {
    slug: "type-number-guessing",
    title: "Number Guessing",
    description:
      "Guess the secret number within a range. Get hints after each guess — higher, lower, or spot on.",
    category: "casual",
    categoryLabel: "Casual",
    controls: "Type a number and press enter to guess",
    thumbnail: "/thumbnails/type-number-guessing.png",
    embedPath: "/games/type-number-guessing/index.html",
    aspectRatio: "4/3",
  },
];

export default GAMES;

export function getGamesByCategory(category: string): Game[] {
  return GAMES.filter((g) => g.category === category);
}

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getAllCategories(): { slug: string; label: string; count: number }[] {
  const cats = new Map<string, { label: string; count: number }>();
  for (const g of GAMES) {
    if (!cats.has(g.category)) {
      cats.set(g.category, { label: g.categoryLabel, count: 0 });
    }
    cats.get(g.category)!.count++;
  }
  return Array.from(cats.entries()).map(([slug, { label, count }]) => ({
    slug,
    label,
    count,
  }));
}

export function getRelatedGames(game: Game, count: number = 4): Game[] {
  return GAMES.filter((g) => g.slug !== game.slug)
    .sort((a, b) => {
      // Same category first
      if (a.category === game.category && b.category !== game.category) return -1;
      if (b.category === game.category && a.category !== game.category) return 1;
      return 0;
    })
    .slice(0, count);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase();
  return GAMES.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.categoryLabel.toLowerCase().includes(q)
  );
}
