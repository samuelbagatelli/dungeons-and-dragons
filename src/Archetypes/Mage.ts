import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdAchetypeInstances(): number {
    return Mage._instances;
  }
}

export default Mage;