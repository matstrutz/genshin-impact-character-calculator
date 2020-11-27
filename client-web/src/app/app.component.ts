import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';
import { SelectItem } from './models/select-item.model';
import { CharacterModels } from './shared/char-creation.component';
import { CharacterList } from './shared/select-items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  moraUrl: string = "assets/itens/Icon_Mora.png";
  selectedLevelBase: string = '1';
  selectedLevelToGo: string = '90';

  selectedChar: Character;

  levelBaseList: SelectItem[] = CharacterList.levelBase;
  levelToGoList: SelectItem[] = CharacterList.levelToGo;
  characterList: Character[] = CharacterModels.charList;

  constructor() { };

  ngOnInit() { 
    this.selectedChar = CharacterModels.amber;
  };

}
