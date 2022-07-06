import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe(data => {
      this.apod = data;
    });
    this.service.getApod();
  }

}
