import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroesFormComponent } from './components/heroes/heroes-form/heroes-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { CalculatorService } from './services/calculator.service';
import {HttpClientModule} from '@angular/common/http';
import { BeersComponent } from './components/beers/beers/beers.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeersListComponent } from './components/beers/beers-list/beers-list.component';
import { BeersSelectorComponent } from './components/beers/beers-selector/beers-selector.component';
import { BeersPipe } from './pipes/beers.pipe';
import { AbvPipe } from './pipes/abv.pipe';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroesFormComponent,
    HeroesListComponent,
    BeersComponent,
    BeersListComponent,
    BeersSelectorComponent,
    BeersPipe,
    AbvPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
