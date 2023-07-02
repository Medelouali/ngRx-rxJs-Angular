import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  counter$:Observable<number>=of(0);
  user$:Observable<{ username: string, password: string }>=of({ username: "", password: "" });

  constructor(private store: Store<{ user: { username: string, password: string } }>) {
    this.user$ = store.select('user');
  }
}
