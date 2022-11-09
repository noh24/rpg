import PlayerCreation from './../src/js/player-creation';
import { Weapon } from './../src/js/inventory';

  describe('Weapon', () => {

    test('should create a weapon object with a name, value, and modifier properties', () => {
      let glock = new Weapon('glock', 1000, "intimidation-factor", 2);
      expect(glock.name).toEqual('glock');
      expect(glock.value).toEqual(1000);
      expect(glock.modifierProperty).toEqual("intimidation-factor");
      expect(glock.modifierValue).toEqual(2);
    });


  //   test('should add item to player\'s inventory ', () => {
  //     player.addToInventory(item);
  //     expect(player.inventory).toEqual(["glock", "chest-equipment"]);
  //   });
    
  //   test('prevent adding to inventory that holds more than 5 items', () => {
  //     let archetype = "Brainiac";
  //     let item = "fail-item";
  //     let player = new PlayerCreation(archetype);
  //     player.inventory = ["glock", "two", "three", "four", "five"];
  //     player.addToInventory(item);
  //     expect(player.inventory).toEqual(["glock", "two", "three", "four", "five"]);
  //     expect(player.addToInventory(item)).toEqual("too much stuff");
  //   });
  
  //   test('will remove specified item from inventory', () => {
  //     let archetype = "Goliath"
  //     let player = new PlayerCreation(archetype);
  //     player.inventory = ["glock", "two", "three", "four", "five"];
  //     player.removeItem("glock");
  //     expect(player.inventory).toEqual(["two", "three", "four", "five"]);
  
  //   });
  });
  //item types - consumables, weapons, armor, misc

// describe('Weapon', () => {

//   test('creates an object of weapon type with the weapon name, value, and stat modifying effect')
//   expect(item.name).toEqual("Glock");
//   expect(item.value).toEqual(500);
//   expect(item.modifier).toEqual(5);
// });