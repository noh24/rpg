import PlayerCreation from './../src/js/player-creation';
import { Weapon } from './../src/js/inventory';

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

  test('base stats are assigned based on their choice of "goliath"', () => {
    let archetype = "Goliath";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([3, 5, 10, 3, 7]);
  });
  
  test('base stats and item are assigned based on their choice of "Slasher"', () => {
    let archetype = "Slasher";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([7, 10, 5, 3, 3]);
  });
  
  test('base stats and item are assigned based on their choice of "Mystic"', () => {
    let archetype = "Mystic";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([5, 3, 3, 10, 7]);
  });
  
  test('base stats and item are assigned based on their choice of "Brainiac"', () => {
    let archetype = "Brainiac";
    let player = new PlayerCreation(archetype);
    player.initializeCharacter(archetype);
    expect(player.baseStats).toEqual([5, 5, 3, 7, 10]);
  });
  
  test('should add item to player\'s inventory ', () => {
    let archetype = "Brainiac";
    let glock = new Weapon('glock', 1000, "intimidation-factor", 2);
    let player = new PlayerCreation(archetype);
    player.addToInventory(glock);
    expect(player.inventory).toEqual([glock]);
    console.log('glock should be an object', glock)
  });     
  
  test('prevent adding to inventory that holds more than 5 items', () => {
    let archetype = "Brainiac";
    let player = new PlayerCreation(archetype);
    let player2 = new PlayerCreation(archetype);
    player.inventory = ["one", "two", "three", "four", ];
    player2.inventory = ["one", "two", "three", "four", "five"]
    let item = new Weapon('glock', 1000, "intimidation-factor", 2);
    player.addToInventory(item);
    expect(player.inventory).toEqual(["one", "two", "three", "four", item]);
    expect(player2.addToInventory(item)).toEqual("too much stuff");
  });
}); 
  
  //   test('will remove specified item from inventory', () => {
  //     let archetype = "Goliath"
  //     let player = new PlayerCreation(archetype);
  //     player.inventory = ["glock", "two", "three", "four", "five"];
  //     player.removeItem("glock");
  //     expect(player.inventory).toEqual(["two", "three", "four", "five"]);
  
  //   });
