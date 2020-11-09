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
  selectedLevelBase: string = '1';
  selectedLevelToGo: string = '90';

  selectedChar: Character = CharacterModels.amber;

  characterList: SelectItem[] = CharacterList.characterList;
  levelBaseList: SelectItem[] = CharacterList.levelBase;
  levelToGoList: SelectItem[] = CharacterList.levelToGo;

  constructor() { };

  ngOnInit() { 
  };

}
