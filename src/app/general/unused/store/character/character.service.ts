import { Injectable } from '@angular/core';
import { CharacterStore } from './character.store';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    constructor(protected store: CharacterStore) {}
}
