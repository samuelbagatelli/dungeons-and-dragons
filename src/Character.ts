import Archetype, { Mage } from './Archetypes';
import IEnergy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _dexterity = getRandomInt(1, 10);
  private _race = new Elf(this.name, this._dexterity);
  private _archetype = new Mage(this.name);
  private _maxLifePoints = this._race.maxLifePoints / 2;
  private _lifePoints = this._maxLifePoints;
  private _strength = getRandomInt(1, 10);
  private _defense = getRandomInt(1, 10);
  private _energy = {
    type_: this._archetype.energyType,
    amount: getRandomInt(1, 10),
  };

  constructor(private name: string) { }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): IEnergy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints; 
    }

    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 2);
  }
}

export default Character;
