import { Component, OnInit } from '@angular/core';
import { SelectItem } from './models/select-item.model';
import { CharacterList } from './shared/select-items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedChar: string = 'amber';
  selectedLevelBase: string = '1';
  selectedLevelToGo: string = '90';

  characterList: SelectItem[] = CharacterList.characterList;
  levelBaseList: SelectItem[] = CharacterList.levelBase;
  levelToGoList: SelectItem[] = CharacterList.levelToGo;

  constructor() { };

  ngOnInit() { 
  };

}
