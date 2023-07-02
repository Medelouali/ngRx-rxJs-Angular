import { Component, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { decrement, increment, reset } from '../ngRx/actions/counter.actions';
import { Store } from '@ngrx/store';
import { updatePassword, updateUsername } from '../ngRx/actions/user.actions';

@Component({
  selector: 'app-awesome-component',
  templateUrl: './awesome-component.component.html',
  styleUrls: ['./awesome-component.component.css']
})
export class AwesomeComponentComponent {
  username=signal("");
  password=signal("");

  constructor(private store: Store<{ counter: number }>) {}
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  changeUsername(e: Event){
    this.username.set((e.target as HTMLInputElement).value);
    this.store.dispatch(updateUsername({ username: this.username() }))
  }

  changePassword(e:Event){
    this.password.set((e.target as HTMLInputElement).value);
    this.store.dispatch(updatePassword({ password: this.password() }))

  }
}
