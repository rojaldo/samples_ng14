import { Component, OnInit } from '@angular/core';
import { HeroForm } from 'src/app/models/heroform';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  // only characters and size between 3 and 10 are allowed
  namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]{3,10}$/;
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  postalCodePattern = /^[0-9]{5}$/;
  newHero = new HeroForm('', '', 0);
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(heroForm: any) {
    console.log(heroForm.value);
    
    this.submitted = true; 
    console.log('Form submitted: ' + JSON.stringify(this.newHero));
    this.newHero = new HeroForm('', '', 0);
  }

  removeHero() {
    this.newHero = new HeroForm('', '', 0);
  }
}
