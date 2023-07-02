import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { CoreComponent } from './base/core/core.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngRx/reducers/counter.reducer';
import { userReducer } from './ngRx/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CoreComponent,
    AwesomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true,
      
       // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
