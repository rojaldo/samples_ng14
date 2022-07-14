import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';

describe('ApodService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, ApodService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
