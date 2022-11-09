import { PlayerCreation } from './../src/js/player-creation';

// describe('whatever whatever', () => {
  
//   test('should correctly test for whatever you want', () => {
//     let code = whatever();
//     expect(whatever()).toEqual('whatever');
//   });
// });

describe('playerCreation', () => {

  test('call, create object with properties: name, archetype, basestats',  () => {
    let name = "Alex";
    let archetype = "Goliath";
    let player = new PlayerCreation(name, archetype);
    expect(player.playerName).toEqual(name);
    expect(player.archetype).toEqual(archetype);
    expect(player.baseStats).toEqual([]);
  });

  test('monster base stats are assigned based on their archetype choice', () => {
    let archetype = "Goliath";
    let archetype2 = "Human";
    let player = new PlayerCreation(archetype);
    let player2 = new PlayerCreation(archetype2);
    player.assignBaseStats(archetype);
    player2.assignBaseStats(archetype2);
    expect(player.baseStats).toEqual([3, 5, 7, 3, 10]);
    expect(player2.baseStats).toEqual([0, 0, 0, 0, 0]);
  });
  
//reference:
//lo 3, med 5, hi 7, exp, 10
// tanky: goliath
// [0]focus - low
// [1]dexterity - medium
// [2]vitality - expert
// [3]intelligence - low
// [4]intimidation factor - high
  
});

