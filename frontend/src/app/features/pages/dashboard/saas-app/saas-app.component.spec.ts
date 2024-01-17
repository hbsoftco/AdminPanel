import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasAppComponent } from './saas-app.component';

describe('SaasAppComponent', () => {
  let component: SaasAppComponent;
  let fixture: ComponentFixture<SaasAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaasAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
