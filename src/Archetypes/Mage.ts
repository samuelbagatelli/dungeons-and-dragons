import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}

export default Mage;