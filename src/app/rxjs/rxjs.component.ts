import { Component } from '@angular/core';
import { Observable, filter, first, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  stream1$:Observable<{status: boolean, age: number, username: string}>=of(
    { status: true, age: 20, username: "Ali" },
    { status: false, age: 25 , username: "Med"},
    { status: true, age: 10 , username: "Tom"},
    { status: false, age: 40 , username: "James"},
    { status: true, age: 5 , username: "Mike"},
  );

  stream2$:Observable<{status: boolean, age: number, username: string}>=of(
    { status: true, age: 30, username: "Walid" },
    { status: false, age: 55 , username: "Booha"},
    { status: true, age: 50 , username: "Ali"},
    { status: false, age: 60 , username: "Kobie"},
    { status: true, age: 52 , username: "Shaq"},
  );

  firstUsername1$=this.stream1$.pipe(
    first(),
    tap((e)=>console.log(e)),
    map(u=>u.username)
  );

  firstUsername2$=this.stream2$.pipe(
    first(),
    tap((e)=>console.log(e)),
    map(u=>u.username)
  );

  firstsNames$=this.stream1$.pipe(
    first(),
    switchMap((username1)=>{
      return this.stream2$.pipe(
        first(),
        tap(username2=>console.log(`The first names are:\t${username1.username}\t${username2.username}`)),
        map(u=>`The first names are:\t${username1.username}\t${u.username}`)
      )
    })
  )
  
  stream1Usernames$=this.stream1$.pipe(
    filter(u=>!u.status),
    tap(e=>console.log(e)),
  )
}
