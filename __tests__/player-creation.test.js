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
    let baseStats = [3, 5, 7, 3, 10];
    let player = new PlayerCreation(name, archetype, baseStats);
    expect(player.playerName).toEqual(name);
    expect(player.archetype).toEqual(archetype);
    expect(player.baseStats).toEqual(baseStats);
  });

//additional tests go here

  // test('PlayerCharacter has an archetype child object with value of goliath', () => {
  //   expect(player.archetype).toEqual('goliath');
  // })

  // test('PlayerCharacter has an archetype child object with stats and name', ()=> {
  //   expect(player.archetype).toEqual('goliath');
  //   expect(player.baseStats).toEqual([3,5,7,3,10])
  // })


//reference:
//lo 3, med 5, hi 7, exp, 10
// tanky: goliath
// [0]focus - low
// [1]dexterity - medium
// [2]vitality - expert
// [3]intelligence - low
// [4]intimidation factor - high
  
});

