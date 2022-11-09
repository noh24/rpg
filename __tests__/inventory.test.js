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
  });
  //item types - consumables, weapons, armor, misc

// describe('Weapon', () => {

//   test('creates an object of weapon type with the weapon name, value, and stat modifying effect')
//   expect(item.name).toEqual("Glock");
//   expect(item.value).toEqual(500);
//   expect(item.modifier).toEqual(5);
// });