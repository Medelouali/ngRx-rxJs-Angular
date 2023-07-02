import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  @Input() dataArray: Array<number>=[];
  @Output() coreEmitter = new EventEmitter<number>();

  coreData:Array<number>=[];

  addNewNumber(n: number){
    this.coreData.push(n);
  }
}
