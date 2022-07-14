import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from '../components/apod/apod/apod.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApodService } from '../services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    CommonModule,
    ApodRoutingModule, 
    FormsModule,
    NgbModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [ApodService],
})
export class ApodModule { }
