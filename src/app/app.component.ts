import { Component, computed, effect, signal } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name=signal("");
  names=signal<Array<string>>([]);
  wasAddClicked=signal<boolean>(false);
  
  nameChangeEffect=effect(()=>{
    console.log("The name was changed:\t"+this.name);
  })
  maxNameLengthComputed=computed(()=>this.name().length);

  onChange(e: Event){
    const name=(e.target as HTMLInputElement).value;
    this.name.set(name);
  }

  onAddNewName(){
    this.names.update(prevNames=>[...prevNames, this.name()])
  }
}
