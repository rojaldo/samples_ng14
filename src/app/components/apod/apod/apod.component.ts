import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};
  selectedDate!: any;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe(data => {
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
