import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteId(id: string): void {
    this.onDelete.emit(id);
  }

  onDeleteCharacter(index: number): void {
    //TODO: Emitir el ID del personaje
    console.log(index);
  }
}

// emitCharacter(): void {
//     console.log(this.character);

//     if (this.character.name.length === 0) return;

//     this.onNewCharacter.emit(this.character);
//     this.character = { name: '', power: 0 };
//   }
