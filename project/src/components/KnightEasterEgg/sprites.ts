// Sprite frame definitions for the knight and enemies
export const SPRITE_FRAMES = {
  knight: {
    idle: [0, 1, 2, 3], // Frame indices for idle animation
    walk: [4, 5, 6, 7], // Walking animation frames
    attack: [8, 9, 10, 11], // Attack animation frames
    lookAround: [12, 13, 14, 15], // Looking around animation
    victory: [16, 17, 18, 19] // Victory pose animation
  },
  enemies: {
    skeleton: {
      idle: [0, 1, 2, 3],
      walk: [4, 5, 6, 7],
      attack: [8, 9, 10, 11],
      death: [12, 13, 14, 15]
    },
    dragon: {
      idle: [0, 1, 2, 3],
      fly: [4, 5, 6, 7],
      attack: [8, 9, 10, 11],
      death: [12, 13, 14, 15]
    },
    goblin: {
      idle: [0, 1, 2, 3],
      walk: [4, 5, 6, 7],
      attack: [8, 9, 10, 11],
      death: [12, 13, 14, 15]
    },
    zombie: {
      idle: [0, 1, 2, 3],
      walk: [4, 5, 6, 7],
      attack: [8, 9, 10, 11],
      death: [12, 13, 14, 15]
    }
  }
};