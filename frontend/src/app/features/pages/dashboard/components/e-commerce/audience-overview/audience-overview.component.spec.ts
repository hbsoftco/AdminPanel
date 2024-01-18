import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceOverviewComponent } from './audience-overview.component';

describe('AudienceOverviewComponent', () => {
  let component: AudienceOverviewComponent;
  let fixture: ComponentFixture<AudienceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudienceOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudienceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
