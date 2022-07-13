import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { Apod } from 'src/app/models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod!: Apod;
  selectedDate!: any;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe((data: Apod) => {
      this.apod = data;
    });
    this.service.getApod();
  }

  handleDate() {
    let strDate = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    console.log(strDate);
    
    this.service.getApod(strDate);
    
  }

}
