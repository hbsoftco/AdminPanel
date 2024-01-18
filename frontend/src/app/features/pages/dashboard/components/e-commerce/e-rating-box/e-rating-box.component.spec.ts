import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERatingBoxComponent } from './e-rating-box.component';

describe('ERatingBoxComponent', () => {
  let component: ERatingBoxComponent;
  let fixture: ComponentFixture<ERatingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERatingBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERatingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
