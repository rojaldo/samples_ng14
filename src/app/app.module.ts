import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroesFormComponent } from './components/heroes/heroes-form/heroes-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroesFormComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
