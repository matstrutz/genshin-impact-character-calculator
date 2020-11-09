import { Character } from '../models/character.model';

export class CharacterModels {
    static amber: Character = new Character('amber', 'Amber', 'assets/char-image/amber.jpeg', 'pyro');
    static mona: Character = new Character('mona', 'Mona', 'assets/char-image/mona.jpeg', 'cryo');
}