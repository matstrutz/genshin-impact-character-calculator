import { Character } from '../models/character.model';

export class CharacterModels {
    static amber: Character = new Character('amber', 'Amber', 'assets/char-image/amber.jpeg', 'assets/vision/Element_Pyro.png');
    static barbara: Character = new Character('barbara', 'Barbara', 'assets/char-image/barbara.jpeg', 'assets/vision/Element_Hydro.png');
    static beidou: Character = new Character('beidou', 'Beidou', 'assets/char-image/beidou.jpeg', 'assets/vision/Element_Electro.png');
    static bennett: Character = new Character('bennett', 'Bennett', 'assets/char-image/bennett.jpeg', 'assets/vision/Element_Pyro.png');
    static chongyun: Character = new Character('chongyun', 'Chongyun', 'assets/char-image/chongyun.jpeg', 'assets/vision/Element_Cryo.png');
    static mona: Character = new Character('mona', 'Mona', 'assets/char-image/mona.jpeg', 'assets/vision/Element_Hydro.png');

    static charList: Character[] = [CharacterModels.amber,
        CharacterModels.barbara, 
        CharacterModels.beidou, 
        CharacterModels.bennett,
        CharacterModels.chongyun, 
        CharacterModels.mona]
}