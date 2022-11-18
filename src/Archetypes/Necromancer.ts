import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdAchetypeInstances(): number {
    return Necromancer._instances;
  }
}

export default Necromancer;