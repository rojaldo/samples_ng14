import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';

xdescribe('BeersService', () => {
  let service: BeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
