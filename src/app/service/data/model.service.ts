import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  private attribute: object = {
    max_value: undefined,
    current_value: undefined,
    min_value: undefined,
  }

  private proficiency: object = {
    name: undefined,
    max_value: undefined,
    current_value: undefined,
    min_value: undefined,
  }

  private attributes: object = {
    arcana: this.attribute,
    chaos: this.attribute,
    constitution: this.attribute,
    dexterity: this.attribute,
    soul: this.attribute,
    force: this.attribute,
    stealth: this.attribute,
    Immunity: this.attribute,
    initiative: this.attribute,
    intelligence: this.attribute,
    magika: this.attribute,
    medicine: this.attribute,
    perception: this.attribute,
    persuasion: this.attribute,
    resistance: this.attribute,
    rituals: this.attribute,
    runic: this.attribute,
    hollow: this.attribute,
  }

  public status: object = {
    current_pv: undefined,
    max_pv: undefined,
    current_me: undefined,
    max_me: undefined,
    defense: undefined,
    current_san: undefined,
    max_san: undefined,
    current_vig: undefined,
    max_vig: undefined,
  }

  public player: object = {
    name: undefined,
    age: undefined,
    height: undefined,
    gender: undefined,
    race: undefined, // obj
    origin: undefined,
    magic: undefined,
    profession: undefined,
    specialization: undefined, // obj
    title: undefined, // obj
    experience: undefined, // obj
    proficiencies: [] as Array<{
      name: undefined,
      max_value: undefined,
      current_value: undefined,
      min_value: undefined,
    }>,
  };

  /*
  public addProficiency(newProficiency: {
    name: string | undefined,
    max_value: number | undefined,
    current_value: number | undefined,
    min_value: number | undefined
  }): void {
    (this.player.proficiencies as Array<any>).push(newProficiency);
  }
  */

}
