import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CharacterStore, CharacterState } from './character.store';

@Injectable({ providedIn: 'root' })
export class CharacterQuery extends QueryEntity<CharacterState> {

  constructor(protected store: CharacterStore) {
    super(store);
  }

}
