import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStateBoxComponent } from './e-state-box.component';

describe('EStateBoxComponent', () => {
  let component: EStateBoxComponent;
  let fixture: ComponentFixture<EStateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EStateBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EStateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
