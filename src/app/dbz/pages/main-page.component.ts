import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public dbzService: DbzService) {
    {
    }
  }
}
