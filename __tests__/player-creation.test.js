import { PlayerCreation } from './../src/js/player-creation';

// describe('whatever whatever', () => {
  
//   test('should correctly test for whatever you want', () => {
//     let code = whatever();
//     expect(whatever()).toEqual('whatever');
//   });
// });

describe('playerCreation', () => {

  test('call, create object with properties: name, archetype, basestats, inventory',  () => {
    let name = "Alex";
    let archetype = "Goliath";
    let player = new PlayerCreation(name, archetype);
    expect(player.playerName).toEqual(name);
    expect(player.archetype).toEqual(archetype);
    expect(player.baseStats).toEqual([]);
    expect(player.inventory).toEqual([]);
  });

  test('starting base stats and item are assigned based on their choice of "goliath"', () => {
    let archetype = "Goliath";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([3, 5, 7, 3, 10]);
    expect(player.inventory).toEqual(["brass knuckles"]);
  });
  
  test('starting base stats and item are assigned based on their choice of "Slasher"', () => {
    let archetype = "Slasher";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([7, 10, 5, 3, 3]);
    expect(player.inventory).toEqual(["chef knives"]);
  });
  
  test('starting base stats and item are assigned based on their choice of "Mystic"', () => {
    let archetype = "Mystic";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([5, 3, 3, 10, 7]);
    expect(player.inventory).toEqual(["orb"]);
  });
  
  test('starting base stats and item are assigned based on their choice of "Brainiac"', () => {
    let archetype = "Brainiac";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([5, 5, 3, 7, 10]);
    expect(player.inventory).toEqual(["glock"]);
  });
});

