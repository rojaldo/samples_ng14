import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersListComponent } from './beers-list.component';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
