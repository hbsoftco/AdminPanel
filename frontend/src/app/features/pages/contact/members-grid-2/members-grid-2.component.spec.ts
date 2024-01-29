import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersGrid2Component } from './members-grid-2.component';

describe('MembersGrid2Component', () => {
  let component: MembersGrid2Component;
  let fixture: ComponentFixture<MembersGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembersGrid2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
