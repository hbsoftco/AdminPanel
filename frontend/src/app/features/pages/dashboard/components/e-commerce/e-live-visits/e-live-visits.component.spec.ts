import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELiveVisitsComponent } from './e-live-visits.component';

describe('ELiveVisitsComponent', () => {
  let component: ELiveVisitsComponent;
  let fixture: ComponentFixture<ELiveVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ELiveVisitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ELiveVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
