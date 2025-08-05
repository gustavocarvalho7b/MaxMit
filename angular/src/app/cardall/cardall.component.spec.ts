import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardallComponent } from './cardall.component';

describe('CardallComponent', () => {
  let component: CardallComponent;
  let fixture: ComponentFixture<CardallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
