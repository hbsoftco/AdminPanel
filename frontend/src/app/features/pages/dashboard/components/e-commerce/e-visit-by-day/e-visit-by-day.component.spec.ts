import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVisitByDayComponent } from './e-visit-by-day.component';

describe('EVisitByDayComponent', () => {
  let component: EVisitByDayComponent;
  let fixture: ComponentFixture<EVisitByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVisitByDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVisitByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
