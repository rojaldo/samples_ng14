import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from '../components/calculator/calculator/calculator.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from '../components/apod/apod/apod.component';
import { BeersComponent } from '../components/beers/beers/beers.component';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { ErrorComponent } from '../components/error/error.component';
import { HeroesGuard } from '../guards/heroes.guard';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'heroes', component: HeroesComponent, canActivate: [HeroesGuard] },
  { path: 'apod', component: ApodComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'forms', component: ReactiveFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
