import { Component, OnInit } from '@angular/core';
import { SelectItem } from './models/select-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedChar: string;

  characterList: SelectItem[] = [
    {value: 'amber', label: 'Amber'},
    {value: 'diluc', label: 'Diluc'},
    {value: 'fisch', label: 'Fisch'}
  ];

  constructor() { };

  ngOnInit() { 
    console.log(this.characterList);
  };

}
