import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  countries: string[] = [];

  myValidator(control: any) {
    if (this.countries) {
      // check if the country is in the list of countries case insensitive
      if (this.countries.indexOf(control.value.toLowerCase()) === -1) {
        return {
          country: true
        };
      } else {
        return null;
      }
    } 
    return null;
  }


  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  postalCodePattern = /^[0-9]{5}$/;

  heroForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    description: [''],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    postalCode: ['', [Validators.required, Validators.pattern(this.postalCodePattern)]],
    country: ['', [Validators.required, (control: any) => {
      return this.myValidator(control);
    }]],
  });

  submit() {
    console.log('Form submitted: ' + JSON.stringify(this.heroForm.value));

  }

  profileForm = this.fb.group({
    firstName: ['', this.myValidator],
    lastName: ['', Validators.pattern(/^[a-zA-Z]{2,4}$/)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private service: CountryService) { }

  ngOnInit(): void {
    console.log('profileForm', this.profileForm);
    this.service.countries$.subscribe(countries => {
      this.countries = countries;
    });
    this.service.getCountries();
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

