import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersSelectorComponent } from './beers-selector.component';

describe('BeersSelectorComponent', () => {
  let component: BeersSelectorComponent;
  let fixture: ComponentFixture<BeersSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
