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
  apiLoaded = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe((data: Apod) => {
      this.apod = data;
    });
    this.service.getApod();
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  handleDate() {
    let strDate = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    console.log(strDate);
    
    this.service.getApod(strDate);
    
  }

}
