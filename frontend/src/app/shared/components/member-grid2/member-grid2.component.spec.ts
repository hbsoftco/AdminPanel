import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGrid2Component } from './member-grid2.component';

describe('MemberGrid2Component', () => {
  let component: MemberGrid2Component;
  let fixture: ComponentFixture<MemberGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberGrid2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
