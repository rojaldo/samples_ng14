import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  // only characters and size between 3 and 10 are allowed
  namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]{3,10}$/;
  model = new Hero('', '');
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(heroForm: any) {
    console.log(heroForm.value);
    
    this.submitted = true; 
    console.log('Form submitted: ' + JSON.stringify(this.model));
    this.model = new Hero();
  }

  newHero() {
    this.model = new Hero();
  }
}
