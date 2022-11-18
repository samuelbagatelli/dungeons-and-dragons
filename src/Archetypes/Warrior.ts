import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdAchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;